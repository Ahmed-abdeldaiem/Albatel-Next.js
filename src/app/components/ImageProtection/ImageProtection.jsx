"use client";
import { useEffect, useState } from 'react';

export default function ImageProtection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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
  }, [mounted]);

  if (!mounted) return null;

  return null; // This component doesn't render anything
}
