import { model, models, Schema, type InferSchemaType } from "mongoose";

const aboutExperienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    period: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    achievements: {
      type: [String],
      default: [],
    },
    colorClass: {
      type: String,
      required: true,
      trim: true,
    },
    accentClass: {
      type: String,
      required: true,
      trim: true,
    },
    borderClass: {
      type: String,
      required: true,
      trim: true,
    },
    topBarClass: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const aboutValueSchema = new Schema(
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
    gradientClass: {
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

const aboutStatSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
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

const aboutContentSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: "default",
    },
    experiences: {
      type: [aboutExperienceSchema],
      default: [],
    },
    values: {
      type: [aboutValueSchema],
      default: [],
    },
    stats: {
      type: [aboutStatSchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "about_contents",
    timestamps: true,
  },
);

export type AboutExperience = InferSchemaType<typeof aboutExperienceSchema>;
export type AboutValue = InferSchemaType<typeof aboutValueSchema>;
export type AboutStat = InferSchemaType<typeof aboutStatSchema>;
export type AboutContentDocument = InferSchemaType<typeof aboutContentSchema>;

export const AboutContentModel =
  models.AboutContent ||
  model<AboutContentDocument>("AboutContent", aboutContentSchema);
