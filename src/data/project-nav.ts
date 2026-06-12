import { projects, type ProjectItem } from "./projects";

export function getAdjacentProjects(slug: string): {
  prev: ProjectItem | null;
  next: ProjectItem | null;
  index: number;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null, index: -1 };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
    index,
  };
}
