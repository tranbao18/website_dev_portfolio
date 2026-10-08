import type { Project } from "@/data/projects";

// Project images are mostly client logos, so they are shown contained on a light panel
// instead of cropped like screenshots. Projects without an image get their initials.
export function ProjectLogo({ project, className = "" }: { project: Project; className?: string }) {
  if (project.img) {
    return (
      <img
        src={project.img}
        alt={`Logo ${project.project_name}`}
        loading="lazy"
        className={`h-full w-full object-contain ${className}`}
      />
    );
  }
  const initials = project.project_name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span aria-hidden="true" className={`text-5xl font-medium tracking-tight text-blue ${className}`}>
      {initials}
    </span>
  );
}

// Minimal browser window with the real domain in the address bar
export function BrowserFrame({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line/60 bg-paper shadow-[0_30px_60px_-28px_rgba(13,13,18,0.35)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line/50 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/60" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-full bg-tint px-3 py-1 text-center text-[11px] text-muted">
          {project.host}
        </div>
      </div>
      <div className="flex aspect-[16/10] items-center justify-center p-8 sm:p-12">
        <ProjectLogo project={project} />
      </div>
    </div>
  );
}
