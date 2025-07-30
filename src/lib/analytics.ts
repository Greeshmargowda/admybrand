// Production analytics helper
export class Analytics {
  private static instance: Analytics;
  private isProduction = import.meta.env.PROD;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  // Track events
  track(event: string, properties?: Record<string, any>) {
    if (!this.isProduction) {
      console.log(`[Analytics] ${event}:`, properties);
      return;
    }

    // Add your production analytics service here
    // Examples: Google Analytics, Mixpanel, PostHog, etc.
    
    // Google Analytics 4 example:
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', event, properties);
    // }
    
    // PostHog example:
    // if (typeof posthog !== 'undefined') {
    //   posthog.capture(event, properties);
    // }
  }

  // Track page views
  page(path: string, title?: string) {
    if (!this.isProduction) {
      console.log(`[Analytics] Page view: ${path}`, { title });
      return;
    }

    // Add your page tracking here
    // Google Analytics example:
    // if (typeof gtag !== 'undefined') {
    //   gtag('config', 'GA_TRACKING_ID', {
    //     page_path: path,
    //     page_title: title
    //   });
    // }
  }

  // Identify users
  identify(userId: string, traits?: Record<string, any>) {
    if (!this.isProduction) {
      console.log(`[Analytics] Identify: ${userId}:`, traits);
      return;
    }

    // Add user identification here
  }

  // Track errors
  error(error: Error, context?: Record<string, any>) {
    if (!this.isProduction) {
      console.error(`[Analytics] Error:`, error, context);
      return;
    }

    // Add error tracking here
    // Sentry example:
    // if (typeof Sentry !== 'undefined') {
    //   Sentry.captureException(error, { extra: context });
    // }
  }
}

export const analytics = Analytics.getInstance();