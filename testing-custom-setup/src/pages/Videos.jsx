import React from 'react';
import ContentCard from '../components/ContentCard';

const videos = [
  {
    title: "Advanced Meditation Techniques for Deep Focus",
    author: "Mindful Masters",
    views: "328K",
    time: "1 day",
    thumbnail: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Yoga Flow for Energy and Balance",
    author: "Wellness Warriors",
    views: "195K",
    time: "3 days",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Videos() {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-surface-800 dark:text-white mb-6">
        Latest Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {videos.map((video, index) => (
          <ContentCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}