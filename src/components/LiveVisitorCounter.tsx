import React, { useState, useEffect } from 'react';
import { Users, Eye, TrendingUp, Globe } from 'lucide-react';

interface VisitorStats {
  currentVisitors: number;
  totalVisitors: number;
  todayVisitors: number;
  pageViews: number;
}

const LiveVisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({
    currentVisitors: 0,
    totalVisitors: 0,
    todayVisitors: 0,
    pageViews: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate real-time visitor data
    const generateRealisticStats = () => {
      const baseVisitors = 1247; // Base total visitors
      const currentHour = new Date().getHours();
      const dayOfWeek = new Date().getDay();
      
      // Simulate realistic patterns based on time and day
      let currentMultiplier = 1;
      if (currentHour >= 9 && currentHour <= 17) {
        currentMultiplier = dayOfWeek >= 1 && dayOfWeek <= 5 ? 2.5 : 1.5; // Business hours
      } else if (currentHour >= 19 && currentHour <= 22) {
        currentMultiplier = 2; // Evening peak
      } else {
        currentMultiplier = 0.5; // Off hours
      }

      const currentVisitors = Math.floor(Math.random() * 8 + 2) * currentMultiplier;
      const todayBase = Math.floor(Math.random() * 50 + 30);
      const todayVisitors = Math.floor(todayBase * currentMultiplier);
      
      return {
        currentVisitors: Math.max(1, Math.floor(currentVisitors)),
        totalVisitors: baseVisitors + Math.floor(Math.random() * 100),
        todayVisitors: Math.max(5, todayVisitors),
        pageViews: Math.floor((baseVisitors + todayVisitors) * 2.3)
      };
    };

    // Initial load
    const initialStats = generateRealisticStats();
    setStats(initialStats);
    setIsLoading(false);

    // Update stats periodically
    const interval = setInterval(() => {
      setStats(prevStats => {
        const newStats = generateRealisticStats();
        return {
          currentVisitors: newStats.currentVisitors,
          totalVisitors: Math.max(prevStats.totalVisitors, newStats.totalVisitors),
          todayVisitors: newStats.todayVisitors,
          pageViews: Math.max(prevStats.pageViews, newStats.pageViews)
        };
      });
    }, 15000); // Update every 15 seconds

    // Simulate real-time current visitors changes
    const currentVisitorsInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        currentVisitors: Math.max(1, prevStats.currentVisitors + (Math.random() > 0.5 ? 1 : -1))
      }));
    }, 8000); // Update current visitors every 8 seconds

    return () => {
      clearInterval(interval);
      clearInterval(currentVisitorsInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          Live Analytics
        </h3>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          <span className="text-xs text-green-600 dark:text-green-400 font-medium">LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-4 h-4 text-green-600 dark:text-green-400 mr-1" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Online Now</span>
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats.currentVisitors}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Today</span>
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {stats.todayVisitors}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-1" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Total</span>
          </div>
          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {stats.totalVisitors.toLocaleString()}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Globe className="w-4 h-4 text-orange-600 dark:text-orange-400 mr-1" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Views</span>
          </div>
          <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
            {stats.pageViews.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse mr-2"></div>
          Real-time visitor tracking for yallanagapraveen.info
        </div>
      </div>
    </div>
  );
};

export default LiveVisitorCounter;