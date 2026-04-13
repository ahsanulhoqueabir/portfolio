import { loadEnvConfig } from "@next/env";
import mongoose from "mongoose";

loadEnvConfig(process.cwd());

const mongoUri = process.env.MONGODB_URI;

function getMongoUri(): string {
  if (!mongoUri) {
    throw new Error(
      "MONGODB_URI is missing. Set it in .env.local before running db:update.",
    );
  }

  return mongoUri;
}

function resolveDefaultValue(defaultValue: unknown): unknown {
  if (typeof defaultValue === "function") {
    return (defaultValue as () => unknown)();
  }

  return defaultValue;
}

async function backfillMissingDefaults(model: mongoose.Model<unknown>) {
  const updates: Array<{ path: string; value: unknown }> = [];

  for (const [path, schemaType] of Object.entries(model.schema.paths)) {
    if (
      path.includes(".") ||
      path === "_id" ||
      path === "__v" ||
      path === "createdAt" ||
      path === "updatedAt"
    ) {
      continue;
    }

    const defaultValue = resolveDefaultValue(
      (schemaType as { defaultValue?: unknown }).defaultValue,
    );

    if (typeof defaultValue === "undefined") {
      continue;
    }

    updates.push({ path, value: defaultValue });
  }

  if (updates.length === 0) {
    console.log(`- ${model.modelName}: no default fields to backfill`);
    return;
  }

  let modifiedTotal = 0;

  for (const update of updates) {
    const result = await model.updateMany(
      { [update.path]: { $exists: false } },
      { $set: { [update.path]: update.value } },
    );

    modifiedTotal += result.modifiedCount;
  }

  console.log(
    `- ${model.modelName}: default backfill done (updated ${modifiedTotal})`,
  );
}

async function syncAllModels() {
  // Register all schemas before collecting mongoose.models.
  await Promise.all([
    import("../models/about.m"),
    import("../models/certification.m"),
    import("../models/contact.m"),
    import("../models/projects.m"),
    import("../models/skills.m"),
  ]);

  const registeredModels = Object.values(mongoose.models);

  if (registeredModels.length === 0) {
    console.log("No models found to sync.");
    return;
  }

  console.log(`Found ${registeredModels.length} model(s). Starting DB sync...`);

  for (const model of registeredModels) {
    try {
      await model.createCollection();
    } catch {
      // Collection may already exist; safe to continue.
    }

    const droppedIndexes = await model.syncIndexes();
    const droppedCount = Array.isArray(droppedIndexes)
      ? droppedIndexes.length
      : 0;

    await backfillMissingDefaults(model);

    console.log(
      `- ${model.modelName}: index sync done (dropped ${droppedCount})`,
    );
  }
}

async function run() {
  try {
    await mongoose.connect(getMongoUri(), { bufferCommands: false });
    console.log("Connected to MongoDB.");

    await syncAllModels();

    console.log("DB update complete.");
  } catch (error) {
    console.error("DB update failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

void run();
