import React, { useState, useEffect } from 'react';
import { Clock, Bell, Code, Eye, Zap } from 'lucide-react';

interface IslandState {
  mode: 'compact' | 'expanded';
  currentTime: string;
  notification: string | null;
  activity: string;
}

const DynamicIsland: React.FC = () => {
  const [state, setState] = useState<IslandState>({
    mode: 'compact',
    currentTime: '',
    notification: null,
    activity: 'Available'
  });

  const [isHovered, setIsHovered] = useState(false);
  const [notificationQueue, setNotificationQueue] = useState<string[]>([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setState(prev => ({ ...prev, currentTime: timeString }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const activities = [
      'Available',
      'Building AI 🤖',
      'Coding React ⚛️',
      'Data Science 📊',
      'Learning 🧠'
    ];

    let activityIndex = 0;
    const activityInterval = setInterval(() => {
      activityIndex = (activityIndex + 1) % activities.length;
      setState(prev => ({ ...prev, activity: activities[activityIndex] }));
    }, 4000);

    return () => clearInterval(activityInterval);
  }, []);

  useEffect(() => {
    const notifications = [
      'Portfolio Updated ✨',
      'New Project Added 🎉',
      'Skills Enhanced 💪',
      'Message Received 📨'
    ];

    const showRandomNotification = () => {
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      setState(prev => ({ ...prev, notification: randomNotif }));

      setTimeout(() => {
        setState(prev => ({ ...prev, notification: null }));
      }, 3000);
    };

    const notificationInterval = setInterval(showRandomNotification, 8000);
    return () => clearInterval(notificationInterval);
  }, []);

  const toggleMode = () => {
    setState(prev => ({
      ...prev,
      mode: prev.mode === 'compact' ? 'expanded' : 'compact'
    }));
  };

  return (
    <div
      className="fixed top-2 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Compact Mode */}
      {state.mode === 'compact' && !isHovered && (
        <div
          onClick={toggleMode}
          className="h-10 px-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-full flex items-center justify-center gap-2 shadow-2xl border border-blue-500/50 backdrop-blur-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Clock className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-semibold tracking-wider">{state.currentTime}</span>
        </div>
      )}

      {/* Expanded Mode */}
      {(state.mode === 'expanded' || isHovered) && (
        <div className="animate-in fade-in zoom-in-95 duration-200">
          <div
            className="px-6 py-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 rounded-3xl shadow-2xl border border-blue-500/50 backdrop-blur-xl min-w-fit max-w-xs"
            onClick={() => state.mode === 'expanded' && toggleMode()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-bold">Live Status</span>
              </div>
              <Clock className="w-4 h-4 text-white/70" />
            </div>

            {/* Notification or Activity */}
            {state.notification ? (
              <div className="mb-3 p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Bell className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-xs font-semibold">Notification</span>
                </div>
                <p className="text-white text-sm font-medium">{state.notification}</p>
              </div>
            ) : (
              <div className="mb-3 p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-green-300" />
                  <span className="text-white text-xs font-semibold">Activity</span>
                </div>
                <p className="text-white text-sm font-medium">{state.activity}</p>
              </div>
            )}

            {/* Time Display */}
            <div className="mb-3 p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-200" />
                  <span className="text-white/80 text-xs font-medium">Current Time</span>
                </div>
                <span className="text-white font-bold text-sm">{state.currentTime}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 rounded-lg p-2 text-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <Code className="w-4 h-4 text-white/60 mx-auto mb-1" />
                <span className="text-white text-xs font-semibold block">10+ Projects</span>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <Eye className="w-4 h-4 text-white/60 mx-auto mb-1" />
                <span className="text-white text-xs font-semibold block">Online</span>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <Zap className="w-4 h-4 text-white/60 mx-auto mb-1" />
                <span className="text-white text-xs font-semibold block">Ready</span>
              </div>
            </div>

            {/* Collapse Hint */}
            <div className="mt-3 text-center">
              <p className="text-white/60 text-xs">Click to collapse</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicIsland;
