import { model, models, Schema, type InferSchemaType } from "mongoose";

const skillItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    experienceYears: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { _id: false },
);

const skillCategorySchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      enum: ["frontend", "backend", "database", "tools", "mobile", "design"],
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    colorFrom: {
      type: String,
      required: true,
      trim: true,
    },
    colorTo: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
      min: 0,
    },
    skills: {
      type: [skillItemSchema],
      default: [],
    },
  },
  { _id: false },
);

const skillStatSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
      trim: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    },
    colorClass: {
      type: String,
      required: true,
      trim: true,
    },
    backgroundClass: {
      type: String,
      required: true,
      trim: true,
    },
    borderClass: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const skillSummarySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    gradientFrom: {
      type: String,
      required: true,
      trim: true,
    },
    gradientTo: {
      type: String,
      required: true,
      trim: true,
    },
    backgroundClass: {
      type: String,
      required: true,
      trim: true,
    },
    imageTintClass: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const skillsContentSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: "default",
    },
    categories: {
      type: [skillCategorySchema],
      default: [],
    },
    stats: {
      type: [skillStatSchema],
      default: [],
    },
    summaryItems: {
      type: [skillSummarySchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "skills_contents",
    timestamps: true,
  },
);

export type SkillItem = InferSchemaType<typeof skillItemSchema>;
export type SkillCategory = InferSchemaType<typeof skillCategorySchema>;
export type SkillStat = InferSchemaType<typeof skillStatSchema>;
export type SkillSummaryItem = InferSchemaType<typeof skillSummarySchema>;
export type SkillsContentDocument = InferSchemaType<typeof skillsContentSchema>;

export const SkillsContentModel =
  models.SkillsContent ||
  model<SkillsContentDocument>("SkillsContent", skillsContentSchema);
