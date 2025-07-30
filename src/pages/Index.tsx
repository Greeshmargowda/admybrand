import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { usePerformanceTracking, useVisibilityTracking } from "@/hooks/usePerformance";
import { analytics } from "@/lib/analytics";
import { SEOHead } from "@/components/SEOHead";
import { FullPageLoader } from "@/components/LoadingSpinner";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import PricingCalculator from "@/components/landing/PricingCalculator";
import Testimonials from "@/components/landing/Testimonials";
import DemoVideo from "@/components/landing/DemoVideo";
import BlogResources from "@/components/landing/BlogResources";
import ContactForm from "@/components/landing/ContactForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import { FloatingParticles } from "@/components/EnhancedAnimations";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

const Index = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  
  // Performance and analytics tracking
  usePerformanceTracking();
  useVisibilityTracking();

  useEffect(() => {
    // Track page view
    analytics.page('/', 'Home - ADmyBRAND AI Suite');
    
    // Optional: Redirect to auth if not logged in
    // Uncomment the lines below if you want to require authentication
    // if (!loading && !user) {
    //   navigate('/auth');
    // }
  }, [user, loading, navigate]);

  if (loading) {
    return <FullPageLoader text="Initializing ADmyBRAND AI Suite..." />;
  }

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background relative">
      {/* Auth Header */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
            <div className="flex items-center gap-2 px-2">
              <User className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {user.user_metadata?.display_name || user.email}
              </span>
            </div>
            <Button
              onClick={signOut}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => navigate('/auth')}
            variant="outline"
            size="sm"
            className="bg-background/90 backdrop-blur-sm"
          >
            Sign In
          </Button>
        )}
      </div>

      <FloatingParticles />
      <ScrollAnimations />
      <Hero />
      <Features />
      <DemoVideo />
      <Pricing />
      <PricingCalculator />
      <Testimonials />
      <BlogResources />
      <FAQ />
      <ContactForm />
      <Footer />
      </div>
    </>
  );
};

export default Index;
