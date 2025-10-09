"use client";
import { useEffect } from 'react';

export default function ImageProtection() {
  useEffect(() => {
    // Advanced Image Protection Script
    const initImageProtection = () => {
      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });

      // Disable drag and drop
      document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });

      // Disable image saving via keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Disable Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        if (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x')) {
          if (document.activeElement && document.activeElement.tagName === 'IMG') {
            e.preventDefault();
            return false;
          }
        }
        
        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
          e.preventDefault();
          return false;
        }
        
        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
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

      // Add watermark to all images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add protection class
        img.classList.add('image-protected');
        
        // Disable image loading from cache (optional)
        img.setAttribute('draggable', 'false');
        
        // Add watermark overlay
        const watermark = document.createElement('div');
        watermark.className = 'image-watermark-overlay';
        watermark.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 10;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.1);
          font-weight: bold;
          transform: rotate(-45deg);
          user-select: none;
        `;
        watermark.textContent = '© Al-Batel CPA';
        
        // Wrap image in container
        const container = document.createElement('div');
        container.className = 'image-protection-container';
        container.style.cssText = `
          position: relative;
          display: inline-block;
          overflow: hidden;
        `;
        
        img.parentNode.insertBefore(container, img);
        container.appendChild(img);
        container.appendChild(watermark);
      });

      // Disable image printing
      window.addEventListener('beforeprint', (e) => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          img.style.display = 'none';
        });
      });

      window.addEventListener('afterprint', (e) => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          img.style.display = '';
        });
      });

      // Disable image copying via clipboard
      document.addEventListener('copy', (e) => {
        if (window.getSelection().toString().includes('img')) {
          e.preventDefault();
          return false;
        }
      });

      // Console warning for developers
      console.log('%c⚠️ Image Protection Active', 'color: red; font-size: 16px; font-weight: bold;');
      console.log('%cThis website uses advanced image protection. Please respect copyright laws.', 'color: orange; font-size: 12px;');
    };

    // Initialize protection
    initImageProtection();

    // Re-initialize when new images are added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.tagName === 'IMG' || (node.querySelector && node.querySelector('img'))) {
              initImageProtection();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
