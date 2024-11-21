import React from 'react';
import { MessageCircle, Heart, Repeat2 } from 'lucide-react';

const tweets = [
  {
    author: "Mindfulness Daily",
    handle: "@mindfulnessday",
    content: "Remember to take a moment today to breathe deeply and center yourself. Small moments of mindfulness can transform your entire day. 🧘‍♂️",
    likes: 1234,
    retweets: 234,
    replies: 56,
    time: "2h"
  },
  {
    author: "Wellness Tips",
    handle: "@wellnesstips",
    content: "Start your morning with intention: \n1. Hydrate\n2. Meditate for 5 mins\n3. Move your body\n4. Set daily intentions\n\nSimple habits, powerful results. ✨",
    likes: 2345,
    retweets: 567,
    replies: 89,
    time: "5h"
  }
];

export default function Tweets() {
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold text-surface-800 dark:text-white mb-6">
        Latest Tweets
      </h2>
      <div className="space-y-4">
        {tweets.map((tweet, index) => (
          <div key={index} className="bg-white dark:bg-surface-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-400 flex items-center justify-center text-white font-medium">
                {tweet.author[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-surface-800 dark:text-white">{tweet.author}</span>
                  <span className="text-surface-500 text-sm">{tweet.handle}</span>
                  <span className="text-surface-400 text-sm">· {tweet.time}</span>
                </div>
                <p className="mt-2 text-surface-600 dark:text-surface-300 whitespace-pre-line">{tweet.content}</p>
                <div className="flex items-center gap-6 mt-3">
                  <button className="flex items-center gap-2 text-surface-500 hover:text-primary-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{tweet.replies}</span>
                  </button>
                  <button className="flex items-center gap-2 text-surface-500 hover:text-green-500 transition-colors">
                    <Repeat2 className="w-4 h-4" />
                    <span className="text-sm">{tweet.retweets}</span>
                  </button>
                  <button className="flex items-center gap-2 text-surface-500 hover:text-pink-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{tweet.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}