import ProjectPage from "./projectPage";
import { headers } from "next/headers";

async function getProject(id: string) {
  try {
    const baseURL = headers().get("host");
    const protocol = baseURL?.includes("localhost") ? "http" : "https";

    const response = await fetch(`${protocol}://${baseURL}/projectsData.json`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const project = data.project.find((item: any) => item._id === id);
    return project;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

const Project = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  console.log("params.id", params.id);
  console.log("fetched project", project);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return <ProjectPage project={project} />;
};

export default Project;
