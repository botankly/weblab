import { Category, SortField, SortOrder } from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (val: string) => void;
  category: Category | "all";
  onCategoryChange: (val: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (val: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (val: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories = [
  { value: "all", label: "Tümü" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-6 mb-12 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Arama */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Proje Ara</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Başlık, açıklama veya teknoloji yazın..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Sıralama Ölçütü */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Sıralama</label>
          <div className="flex gap-2">
            <select
              value={sortField}
              onChange={(e) => onSortFieldChange(e.target.value as SortField)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="year">Yıla Göre</option>
              <option value="title">Başlığa Göre</option>
            </select>
            <button
              onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Yönü Değiştir"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        {/* Kategori Butonları */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sonuç Sayısı */}
        <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 px-3 py-1 rounded-lg">
          <span className="font-bold text-gray-900 dark:text-white">{resultCount}</span> / {totalCount} proje listeleniyor
        </p>
      </div>
    </div>
  );
}
