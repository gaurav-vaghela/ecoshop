import React, { useState } from 'react';
import { Bell, Lock, CreditCard, Globe, Mail, Shield, Moon, Sun } from 'lucide-react';
import { MetaTags } from '../components/MetaTags';
import { useTheme } from '../context/ThemeContext';

export const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      newsletter: true
    },
    privacy: {
      profileVisibility: 'public',
      activityStatus: true,
      showWishlist: true
    },
    language: 'en',
    currency: 'USD'
  });

  const [activeTab, setActiveTab] = useState('notifications');

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handlePrivacyChange = (key: keyof typeof settings.privacy) => {
    if (key === 'profileVisibility') {
      setSettings(prev => ({
        ...prev,
        privacy: {
          ...prev.privacy,
          profileVisibility: prev.privacy.profileVisibility === 'public' ? 'private' : 'public'
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        privacy: {
          ...prev.privacy,
          [key]: !prev.privacy[key as keyof typeof settings.privacy]
        }
      }));
    }
  };

  return (
    <>
      <MetaTags
        title="Settings"
        description="Manage your EcoShop account settings and preferences"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b dark:border-gray-700">
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'notifications'
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Bell className="h-5 w-5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'privacy'
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Shield className="h-5 w-5" />
              Privacy
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'payment'
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <CreditCard className="h-5 w-5" />
              Payment
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === 'preferences'
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Globe className="h-5 w-5" />
              Preferences
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Receive order updates via email</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      className="h-6 w-6 rounded text-teal-600 focus:ring-teal-500"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Get instant updates on your device</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={() => handleNotificationChange('push')}
                      className="h-6 w-6 rounded text-teal-600 focus:ring-teal-500"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Receive our weekly newsletter</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.newsletter}
                      onChange={() => handleNotificationChange('newsletter')}
                      className="h-6 w-6 rounded text-teal-600 focus:ring-teal-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Profile Visibility</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Control who can see your profile</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePrivacyChange('profileVisibility')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        settings.privacy.profileVisibility === 'public'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {settings.privacy.profileVisibility === 'public' ? 'Public' : 'Private'}
                    </button>
                  </label>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Activity Status</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Show when you're active</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.activityStatus}
                      onChange={() => handlePrivacyChange('activityStatus')}
                      className="h-6 w-6 rounded text-teal-600 focus:ring-teal-500"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Public Wishlist</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Allow others to see your wishlist</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.showWishlist}
                      onChange={() => handlePrivacyChange('showWishlist')}
                      className="h-6 w-6 rounded text-teal-600 focus:ring-teal-500"
                    />
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
                <div className="space-y-4">
                  <div className="border dark:border-gray-700 rounded-lg p-4">
                    <p className="text-center text-gray-600 dark:text-gray-400">No payment methods added yet</p>
                    <button className="w-full mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">App Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {theme === 'light' ? (
                        <Sun className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Moon className="h-5 w-5 text-gray-400" />
                      )}
                      <div>
                        <p className="font-medium">Theme</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred theme</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {theme === 'light' ? (
                        <Moon className="h-5 w-5" />
                      ) : (
                        <Sun className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Language</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Select your preferred language</p>
                      </div>
                    </div>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                      className="border dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Currency</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred currency</p>
                      </div>
                    </div>
                    <select
                      value={settings.currency}
                      onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                      className="border dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};