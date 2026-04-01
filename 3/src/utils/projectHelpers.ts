import { Project, Category, SortField, SortOrder } from "../types/project";

export const applyFilters = (
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] => {
  let filtered = [...projects];

  // Arama filtreleme
  if (search.trim()) {
    const query = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query))
    );
  }

  // Kategori filtreleme
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Siralama
  filtered.sort((a, b) => {
    let comparison = 0;
    if (sortField === "year") {
      comparison = b.year - a.year;
    } else {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return filtered;
};
