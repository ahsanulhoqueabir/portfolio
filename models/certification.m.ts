import { model, models, Schema, type InferSchemaType } from "mongoose";

const certificationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    issuer: {
      type: String,
      required: true,
      trim: true,
    },
    issueDate: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    certificate: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    credential: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "certifications",
    timestamps: true,
  },
);

export type CertificationDocument = InferSchemaType<typeof certificationSchema>;

export const CertificationModel =
  models.Certification ||
  model<CertificationDocument>("Certification", certificationSchema);
