import ReactGA from "react-ga4";
import { UaEventOptions } from "react-ga4/types/ga4";

/**
 * Initialize Google Analytics 4.
 * Safely checks for the measurement ID and development environment.
 */
export const initAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn("GA4 Measurement ID is not defined. Analytics will not be initialized.");
    return;
  }

  // Initialize GA4
  ReactGA.initialize(measurementId, {
    testMode: import.meta.env.DEV, // Prevent sending real data during local development if desired, though react-ga4 testMode might just suppress console logs or enable testing mode.
  });
};

/**
 * Track a page view.
 * @param path The path to track (e.g., "/about")
 */
export const trackPageView = (path: string) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;

  ReactGA.send({ hitType: "pageview", page: path });
};

/**
 * Track a custom event.
 * @param eventName The name of the event (e.g., "click_whatsapp")
 * @param eventParams Additional parameters (e.g., { location: "hero" })
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;

  ReactGA.event(eventName, eventParams);
};
