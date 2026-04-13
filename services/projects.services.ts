import dbConnect from "@/lib/mongodb";
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
   * Returns one active project by its numeric projectId.
   */
  static async getActiveProjectById(
    projectId: number,
  ): Promise<ProjectDocument | null> {
    await dbConnect();

    return ProjectModel.findOne({
      projectId,
      isActive: true,
    }).lean<ProjectDocument>();
  }
}
