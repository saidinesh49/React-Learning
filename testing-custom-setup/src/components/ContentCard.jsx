import React from 'react';
import { Play } from 'lucide-react';

export default function ContentCard({ title, author, views, time, thumbnail }) {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl">
      <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-medium text-surface-800 dark:text-surface-200 line-clamp-2 mb-2 text-sm sm:text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400 mb-1 hover:text-surface-800 dark:hover:text-surface-200 transition-colors">
          {author}
        </p>
        <p className="text-sm text-surface-500 dark:text-surface-500 flex items-center gap-1">
          <span>{views} views</span>
          <span className="w-1 h-1 rounded-full bg-surface-400"></span>
          <span>{time} ago</span>
        </p>
      </div>
    </div>
  );
}