import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Palette,
  BarChart3,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Generate compelling copy, visuals, and campaigns with our advanced AI engine.",
    badge: "Core"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast campaign performance and optimize ROI with machine learning insights.",
    badge: "Pro"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Identify and reach your ideal audience with precision AI-driven targeting.",
    badge: "Core"
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Streamline workflows and automate repetitive marketing tasks intelligently.",
    badge: "Pro"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital platforms.",
    badge: "Enterprise"
  },
  {
    icon: Palette,
    title: "Creative Studio",
    description: "Design stunning visuals and maintain brand consistency with AI assistance.",
    badge: "Core"
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Get instant insights with comprehensive analytics and performance tracking.",
    badge: "Pro"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Integration",
    description: "Seamlessly manage campaigns across social media, email, and web platforms.",
    badge: "Enterprise"
  }
];

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "Core": return "default";
    case "Pro": return "accent";
    case "Enterprise": return "glass";
    default: return "secondary";
  }
};

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 fade-up">
          <Badge variant="glass" className="inline-flex">
            <Zap className="w-4 h-4 mr-2" />
            Features
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Powerful AI Tools for
            <span className="gradient-text block">
              Modern Marketing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered suite transforms your marketing workflow with 
            intelligent automation and data-driven insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-primary transition-all duration-500 hover:scale-105 border-border/50 fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant={getBadgeVariant(feature.badge)} className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}