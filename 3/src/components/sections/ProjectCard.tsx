import { Project } from "../../types/project";
import Card from "../ui/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full flex flex-col">
      {/* Visual Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300"></div>
        <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
           {project.category === 'backend' ? '⚙️' : '💻'}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-200">
              Öne Çıkan
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-800"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {project.year} • {project.category}
          </span>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
            Detayları Gör →
          </a>
        </div>
      </div>
    </Card>
  );
}
