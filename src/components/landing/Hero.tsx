import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/ADmyBRAND-logo_StartupTalky.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-accent rounded-full animate-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-2 h-2 bg-primary-glow rounded-full animate-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-up">
            <div className="space-y-4">
              <Badge variant="glass" className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI-Powered Marketing Suite
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="gradient-text block">
                  Brand with AI
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
                data-driven insights, and seamless brand management across all channels.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Zap className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-glow"></div>
              <img 
                src={heroImage} 
                alt="AI Brain Network" 
                className="relative rounded-2xl shadow-glass w-full max-w-lg mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}