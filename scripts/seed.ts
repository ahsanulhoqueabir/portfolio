import mongoose from "mongoose";

import { aboutContentSeed } from "../constants/seed/about.seed";
import { certificationsSeed } from "../constants/seed/certifications.seed";
import { contactContentSeed } from "../constants/seed/contact.seed";
import { projectsSeed } from "../constants/seed/projects.seed";
import { skillsContentSeed } from "../constants/seed/skills.seed";
import { AboutContentModel } from "../models/about.m";
import { CertificationModel } from "../models/certification.m";
import { ContactContentModel } from "../models/contact.m";
import { ProjectModel } from "../models/projects.m";
import { SkillsContentModel } from "../models/skills.m";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error(
    "MONGODB_URI is missing. Set it before running the seed script.",
  );
}

async function seedStaticContent() {
  await SkillsContentModel.findOneAndUpdate(
    { slug: skillsContentSeed.slug },
    skillsContentSeed,
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  await AboutContentModel.findOneAndUpdate(
    { slug: aboutContentSeed.slug },
    aboutContentSeed,
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  await ContactContentModel.findOneAndUpdate(
    { slug: contactContentSeed.slug },
    contactContentSeed,
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );
}

async function seedProjects() {
  if (projectsSeed.length === 0) {
    return;
  }

  await ProjectModel.bulkWrite(
    projectsSeed.map((project) => ({
      updateOne: {
        filter: { projectId: project.projectId },
        update: { $set: project },
        upsert: true,
      },
    })),
  );
}

async function seedCertifications() {
  if (certificationsSeed.length === 0) {
    return;
  }

  await CertificationModel.bulkWrite(
    certificationsSeed.map((certification) => ({
      updateOne: {
        filter: {
          name: certification.name,
          issuer: certification.issuer,
        },
        update: { $set: certification },
        upsert: true,
      },
    })),
  );
}

async function run() {
  try {
    await mongoose.connect(mongoUri);

    await seedStaticContent();
    await seedProjects();
    await seedCertifications();

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

void run();
