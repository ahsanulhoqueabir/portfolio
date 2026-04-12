import { model, models, Schema, type InferSchemaType } from "mongoose";

const contactMethodSchema = new Schema(
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
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
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
  },
  { _id: false },
);

const socialLinkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
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
  },
  { _id: false },
);

const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const contactContentSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: "default",
    },
    methods: {
      type: [contactMethodSchema],
      default: [],
    },
    socialLinks: {
      type: [socialLinkSchema],
      default: [],
    },
    faqs: {
      type: [faqSchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "contact_contents",
    timestamps: true,
  },
);

export type ContactMethod = InferSchemaType<typeof contactMethodSchema>;
export type SocialLink = InferSchemaType<typeof socialLinkSchema>;
export type Faq = InferSchemaType<typeof faqSchema>;
export type ContactContentDocument = InferSchemaType<
  typeof contactContentSchema
>;

export const ContactContentModel =
  models.ContactContent ||
  model<ContactContentDocument>("ContactContent", contactContentSchema);
