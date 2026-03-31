import { useState, useEffect, useMemo } from "react";
import { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import ProjectCard from "./ProjectCard";
import Alert from "../ui/Alert";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Sort State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return applyFilters(projects, search, category, sortField, sortOrder);
  }, [projects, search, category, sortField, sortOrder]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-500">Projeler yükleniyor...</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projelerim</h2>
          <p className="text-gray-600 dark:text-gray-400">Üzerinde çalıştığım ve katkıda bulunduğum bazı projeler</p>
        </div>

        {error && (
          <div className="mb-8 max-w-md mx-auto">
            <Alert variant="error" title="Hata!">
              {error}
              <button 
                onClick={() => window.location.reload()}
                className="block mt-2 text-xs underline"
              >
                Tekrar Dene
              </button>
            </Alert>
          </div>
        )}

        <ProjectFilter 
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sortField={sortField}
          onSortFieldChange={setSortField}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          resultCount={filteredProjects.length}
          totalCount={projects.length}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500">Aranan kriterlere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
