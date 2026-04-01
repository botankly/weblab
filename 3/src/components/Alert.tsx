import React from 'react';

interface AlertProps {
  variant?: 'error' | 'info' | 'success' | 'warning';
  title?: string;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ 
  variant = 'info', 
  title, 
  children 
}) => {
  const variants = {
    error: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50',
    info: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/50',
    success: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900/50',
  };

  return (
    <div className={`rounded-lg border p-4 mb-6 ${variants[variant]}`}>
      {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
};

export default Alert;
