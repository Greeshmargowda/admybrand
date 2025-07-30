import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

export function usePerformanceTracking() {
  useEffect(() => {
    // Track Core Web Vitals
    if ('web-vital' in window) {
      return;
    }

    // Simple performance tracking
    const trackPerformance = () => {
      if ('performance' in window) {
        const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (timing) {
          const metrics = {
            loadTime: timing.loadEventEnd - timing.loadEventStart,
            domContentLoaded: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
            timeToFirstByte: timing.responseStart - timing.requestStart,
          };

          analytics.track('performance_metrics', metrics);
        }
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      setTimeout(trackPerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(trackPerformance, 1000);
      });
    }
  }, []);
}

export function useVisibilityTracking() {
  useEffect(() => {
    let startTime = Date.now();
    let isVisible = !document.hidden;

    const handleVisibilityChange = () => {
      const now = Date.now();
      
      if (document.hidden && isVisible) {
        // Page became hidden
        const timeOnPage = now - startTime;
        analytics.track('page_visibility', { 
          action: 'hidden',
          timeOnPage 
        });
        isVisible = false;
      } else if (!document.hidden && !isVisible) {
        // Page became visible
        analytics.track('page_visibility', { action: 'visible' });
        startTime = now;
        isVisible = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Track final time on page
      if (isVisible) {
        const timeOnPage = Date.now() - startTime;
        analytics.track('page_visibility', { 
          action: 'unload',
          timeOnPage 
        });
      }
    };
  }, []);
}