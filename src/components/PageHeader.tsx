
import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description,
  className 
}) => {
  return (
    <section className={cn(
      "bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg max-w-2xl text-gray-200">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
