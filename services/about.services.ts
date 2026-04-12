import dbConnect from "@/lib/mongodb";
import { AboutContentModel, type AboutContentDocument } from "@/models/about.m";

function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export class AboutContentService {
  /**
   * Finds an active about content document by slug.
   * Returns lean data for server-side rendering.
   */
  static async getActiveAboutContent(
    slug = "default",
  ): Promise<AboutContentDocument | null> {
    await dbConnect();

    const normalized = slug.trim().toLowerCase();
    const escapedSlug = escapeRegex(normalized);

    return AboutContentModel.findOne({
      slug: { $regex: new RegExp(`^${escapedSlug}$`, "i") },
      isActive: true,
    }).lean<AboutContentDocument>();
  }
}
