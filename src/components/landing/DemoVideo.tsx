import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = 180; // 3 minutes demo

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate video progress
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / totalTime) * 100;

  return (
    <section className="py-20 px-4" id="demo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="accent" className="mb-4">
            Live Demo
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            See ADmyBRAND AI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI transforms your marketing workflow in just 3 minutes. 
            From content creation to campaign optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <Card className="glass overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-primary" />
                    ) : (
                      <Play className="h-8 w-8 text-primary ml-1" />
                    )}
                  </div>
                  <p className="text-lg font-semibold">AI Marketing Demo</p>
                  <p className="text-sm text-muted-foreground">
                    {formatTime(totalTime)} showcase
                  </p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
                <div className="flex items-center gap-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  
                  <div className="flex-1">
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div 
                        className="bg-primary h-1 rounded-full transition-all duration-1000"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(totalTime)}
                  </span>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </button>
              )}
            </div>
          </Card>

          {/* Demo Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What You'll See:</h3>
              
              <div className="space-y-4">
                {[
                  {
                    time: "0:30",
                    title: "AI Content Generation",
                    description: "Watch AI create engaging social media posts in seconds"
                  },
                  {
                    time: "1:15",
                    title: "Smart Campaign Optimization",
                    description: "See how AI analyzes and improves campaign performance"
                  },
                  {
                    time: "2:00",
                    title: "Real-time Analytics",
                    description: "Explore our comprehensive analytics dashboard"
                  },
                  {
                    time: "2:45",
                    title: "Integration Showcase",
                    description: "Discover seamless connections with your favorite tools"
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-4 hover:bg-accent/5 transition-colors">
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">
                        {item.time}
                      </Badge>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                Start Your Free Trial
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;