import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, description, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877f2] hover:bg-[#0d6efd]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1da1f2] hover:bg-[#0c8de4]',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0a66c2] hover:bg-[#084d93]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 border rounded-lg transition-all duration-300 ${
          isOpen ? 'bg-gray-100 border-gray-300' : 'hover:bg-gray-50'
        }`}
      >
        <Share2 className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setIsOpen(false)}
          />
          <div 
            className="absolute right-0 mt-2 z-30 origin-top-right"
            style={{
              animation: 'popup 0.3s ease-out forwards'
            }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden w-48">
              <div className="p-2 grid grid-cols-2 gap-2">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} text-white p-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTimeout(() => setIsOpen(false), 300);
                    }}
                    style={{
                      animation: 'slideIn 0.3s ease-out forwards'
                    }}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard();
                }}
                className="w-full px-4 py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 relative overflow-hidden border-t"
              >
                <LinkIcon className="h-4 w-4" />
                <span className={`transition-opacity duration-300 ${showCopied ? 'opacity-0' : 'opacity-100'}`}>
                  Copy Link
                </span>
                {showCopied && (
                  <span className="absolute inset-0 flex items-center justify-center bg-teal-500 text-white" style={{ animation: 'fadeInOut 2s ease-in-out' }}>
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};