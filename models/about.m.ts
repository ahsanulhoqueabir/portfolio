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
    heroImageUrl: {
      type: String,
      trim: true,
      default:
        "https://cdn.ahsanull.com/Untitled%20(1000%20x%20800%20px)%20(1).png",
    },
    cvDownloadUrl: {
      type: String,
      trim: true,
      default: "/Ahsanul-Hoque-CV.pdf",
    },
    homeHeroSubtitle: {
      type: String,
      trim: true,
      default:
        "I craft exceptional digital experiences with clean code and modern design. Passionate about building scalable web applications.",
    },
    homeAboutParagraph: {
      type: String,
      trim: true,
      default:
        "I'm a passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and Node.js, with a strong focus on user experience and clean, maintainable code. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
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
