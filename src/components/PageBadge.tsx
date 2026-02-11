'use client';

import { getPageColor, getPageBgClass, getPageTextClass, FONT_WEIGHTS } from '@/lib/colors';

interface PageBadgeProps {
  pageId: number;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PageBadge({ 
  pageId, 
  children, 
  variant = 'solid',
  size = 'md',
  className = '' 
}: PageBadgeProps) {
  const bgClass = getPageBgClass(pageId);
  const textClass = getPageTextClass(pageId);
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantClasses = {
    solid: `${bgClass} text-white ${FONT_WEIGHTS.bold}`,
    outline: `border-2 ${textClass} border-current bg-transparent ${FONT_WEIGHTS.medium}`,
    text: `${textClass} bg-transparent ${FONT_WEIGHTS.medium}`,
  };

  return (
    <span 
      className={`
        inline-flex items-center rounded-lg
        transition-all duration-300 hover:scale-105
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
