import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

export default function Input({
  label,
  error,
  multiline = false,
  rows = 4,
  className = "",
  id,
  ...props
}: InputProps) {
  const Component = multiline ? "textarea" : "input";
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <Component
        id={id}
        // @ts-ignore
        rows={multiline ? rows : undefined}
        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
          error 
            ? "border-red-500 focus:ring-red-200" 
            : "border-gray-200 dark:border-gray-600 focus:ring-blue-100 focus:border-blue-500"
        } bg-gray-50 dark:bg-gray-900 dark:text-white ${multiline ? "resize-none" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
