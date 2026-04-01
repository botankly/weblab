export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Portfolyo Sitesi. Tüm hakları saklıdır.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-blue-600">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-blue-600">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
