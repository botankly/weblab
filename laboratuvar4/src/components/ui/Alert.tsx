import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "success" | "error" | "info";
  title?: string;
}

export default function Alert({ children, variant = "info", title }: AlertProps) {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300",
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300",
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300"
  };

  return (
    <div className={`p-4 rounded-xl border ${styles[variant]}`}>
      {title && <p className="font-bold mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
