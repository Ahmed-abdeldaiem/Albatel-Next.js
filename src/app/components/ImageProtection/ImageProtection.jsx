"use client";
import { useEffect } from 'react';

export default function ImageProtection() {
  useEffect(() => {
    // Simple Image Protection - Lightweight approach
    const initImageProtection = () => {
      // Disable right-click context menu on images only
      document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });

      // Disable drag and drop on images
      document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });

      // Disable text selection on images
      document.addEventListener('selectstart', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });
    };

    // Initialize protection
    initImageProtection();
  }, []);

  return null; // This component doesn't render anything
}
