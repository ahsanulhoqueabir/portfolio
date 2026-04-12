import dbConnect from "@/lib/mongodb";
import {
  CertificationModel,
  type CertificationDocument,
} from "@/models/certification.m";
import {
  SkillsContentModel,
  type SkillsContentDocument,
} from "@/models/skills.m";

function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export class SkillsContentService {
  /**
   * Finds an active skills content document by slug.
   * Returns lean data for server-side rendering.
   */
  static async getActiveSkillsContent(
    slug = "default",
  ): Promise<SkillsContentDocument | null> {
    await dbConnect();

    const normalized = slug.trim().toLowerCase();
    const escapedSlug = escapeRegex(normalized);

    return SkillsContentModel.findOne({
      slug: { $regex: new RegExp(`^${escapedSlug}$`, "i") },
      isActive: true,
    }).lean<SkillsContentDocument>();
  }
}

export class CertificationsService {
  /**
   * Returns all active certifications sorted by latest update.
   */
  static async getActiveCertifications(): Promise<CertificationDocument[]> {
    await dbConnect();

    return CertificationModel.find({ isActive: true })
      .sort({ updatedAt: -1 })
      .lean<CertificationDocument[]>();
  }
}
