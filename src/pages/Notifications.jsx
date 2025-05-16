import React, { useState } from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';
import NotificationItem from '../components/notifications/NotificationItem';
import { mockNotifications } from '../data/mockData';

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        isRead: true
      }))
    );
  };
  
  const clearAll = () => {
    setNotifications([]);
  };
  
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      {/* <Header showBack title="Notifications" /> */}
      
      <main className="pt-16 max-w-6xl mx-auto">
        {notifications.length > 0 ? (
          <>
            <div className="p-4 flex justify-between items-center border-b border-gray-200 bg-white">
              <div className="flex items-center">
                <Bell size={18} className="text-color mr-2" />
                <span className="font-medium text-gray-800">
                  {unreadCount > 0 
                    ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` 
                    : 'All caught up!'}
                </span>
              </div>
              
              <div className="flex space-x-3">
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="flex items-center text-sm text-color text-color-hover transition-colors"
                  >
                    <Check size={16} className="mr-1" />
                    <span>Mark all read</span>
                  </button>
                )}
                
                <button 
                  onClick={clearAll}
                  className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} className="mr-1" />
                  <span>Clear all</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white divide-y divide-gray-100">
              {notifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center pt-12 px-4 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Bell size={24} className="text-color" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No notifications</h2>
            <p className="text-gray-600 max-w-sm">
              You're all caught up! We'll notify you when there are new updates, offers or order status changes.
            </p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
