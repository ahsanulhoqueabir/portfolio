import dbConnect from "@/lib/mongodb";
import { Types } from "mongoose";
import { ProjectModel, type ProjectDocument } from "@/models/projects.m";

export class ProjectsService {
  /**
   * Returns active projects sorted by publish date (newest first).
   */
  static async getActiveProjects(): Promise<ProjectDocument[]> {
    await dbConnect();

    return ProjectModel.find({ isActive: true })
      .sort({ publishedAt: -1 })
      .lean<ProjectDocument[]>();
  }

  /**
   * Returns one active project by MongoDB _id.
   */
  static async getActiveProjectById(
    id: string,
  ): Promise<ProjectDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    await dbConnect();

    return ProjectModel.findOne({
      _id: id,
      isActive: true,
    }).lean<ProjectDocument>();
  }
}
