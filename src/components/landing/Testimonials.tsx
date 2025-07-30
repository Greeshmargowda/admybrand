import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "ADmyBRAND AI Suite transformed our marketing efficiency by 300%. The AI content generation alone saves us 20 hours per week.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "StartupLab",
    content: "The predictive analytics helped us increase our conversion rate by 150%. This platform is a game-changer for any serious marketing team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Growth Manager",
    company: "Scale Dynamics",
    content: "We've automated 80% of our marketing workflows. The ROI has been incredible - our team can now focus on strategy instead of repetitive tasks.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    company: "Global Ventures",
    content: "The brand protection features caught several potential issues before they became problems. ADmyBRAND is essential for our operations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Rachel Thompson",
    role: "Digital Marketing Specialist",
    company: "InnovateCorp",
    content: "The creative studio feature has revolutionized our content creation process. We're producing higher quality materials in half the time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Alex Johnson",
    role: "CMO",
    company: "Futuretech Solutions",
    content: "Implementation was seamless, and the results were immediate. Our team's productivity increased by 250% within the first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 fade-up">
          <Badge variant="glass" className="inline-flex">
            <MessageSquare className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Loved by
            <span className="gradient-text block">
              Marketing Teams
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of marketers who have transformed their workflows with ADmyBRAND AI Suite.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="group hover:shadow-primary transition-all duration-500 hover:scale-105 border-border/50 h-full"
                >
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="relative flex-1">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                      <p className="text-muted-foreground leading-relaxed pl-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="text-center mt-16 fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-8 p-6 glass rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border/50"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-border/50"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}