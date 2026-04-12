import { model, models, Schema, type InferSchemaType } from "mongoose";

const projectSchema = new Schema(
  {
    projectId: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
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
    longDescription: {
      type: String,
      required: true,
      trim: true,
    },
    tech: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    github: {
      type: String,
      required: true,
      trim: true,
    },
    demo: {
      type: String,
      trim: true,
      default: "",
    },
    stars: {
      type: Number,
      default: 0,
      min: 0,
    },
    forks: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      required: true,
      enum: ["completed", "on-going", "planned"],
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
    gradientClass: {
      type: String,
      required: true,
      trim: true,
    },
    accentColorClass: {
      type: String,
      required: true,
      trim: true,
    },
    orbClass: {
      type: String,
      required: true,
      trim: true,
    },
    topBarClass: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "projects",
    timestamps: true,
  },
);

export type ProjectDocument = InferSchemaType<typeof projectSchema>;

export const ProjectModel =
  models.Project || model<ProjectDocument>("Project", projectSchema);
