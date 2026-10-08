import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Spray } from "@/components/Decor";
import { BrowserFrame } from "@/components/ProjectMedia";
import Reveal from "@/components/Reveal";

// One full-width row of the "top creations" list; text and visual swap sides on every other row
export default function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <article className="pad grid items-center gap-10 border-t border-line py-14 md:py-16 lg:grid-cols-12 lg:gap-6">
      <Reveal
        className={
          flip ? "lg:col-span-5 lg:col-start-8 lg:row-start-1" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
        }
      >
        <p className="mb-4 text-sm text-muted">
          {project.category} · {project.year}
        </p>
        <h3 className="text-3xl leading-[1.15] tracking-tight md:text-[2.75rem]">{project.project_name}</h3>
        <p className="mt-5 max-w-[42ch] leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-pill mt-8"
          aria-label={`Mở website ${project.project_name}`}
        >
          <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
        </a>
      </Reveal>

      <Reveal
        delay={0.1}
        className={
          flip ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7 lg:row-start-1"
        }
      >
        <div className="relative overflow-hidden bg-tint px-6 py-10 sm:px-14 sm:py-14">
          <Spray className={`-bottom-28 h-80 w-80 ${flip ? "-left-28" : "-right-28"}`} />
          <BrowserFrame
            project={project}
            className={`relative mx-auto max-w-md transition-transform duration-500 ease-out hover:rotate-0 ${
              flip ? "rotate-2" : "-rotate-2"
            }`}
          />
        </div>
      </Reveal>
    </article>
  );
}
