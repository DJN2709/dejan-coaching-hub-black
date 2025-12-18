import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if gtag is available (when Google Analytics is properly set up)
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-ZCJY6MKB8B', {
        page_path: location.pathname + location.search,
        stream_id: '11180523873'
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics; 