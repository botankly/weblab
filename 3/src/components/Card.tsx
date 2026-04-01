import React from 'react';

interface CardProps {
  variant?: 'elevated' | 'flat';
  title: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  variant = 'flat', 
  title, 
  image, 
  imageAlt, 
  children 
}) => {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 transition-all hover:shadow-md ${variant === 'elevated' ? 'shadow-lg hover:shadow-xl' : ''}`}>
      {image && (
        <img 
          src={image} 
          alt={imageAlt || title} 
          className="aspect-video w-full rounded-t-xl object-cover" 
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
