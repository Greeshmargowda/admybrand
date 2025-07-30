import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    badge: null,
    features: [
      "AI Content Generation",
      "Basic Analytics",
      "5 Brand Templates",
      "Email Support",
      "1 User Account",
      "Social Media Integration"
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Advanced features for growing companies",
    icon: Star,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Predictive Analytics", 
      "Smart Targeting",
      "Automation Engine",
      "15 Brand Templates",
      "Priority Support",
      "5 User Accounts",
      "API Access"
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Complete solution for large organizations",
    icon: Crown,
    badge: "Advanced",
    features: [
      "Everything in Professional",
      "Brand Protection Suite",
      "Advanced Reporting",
      "Omnichannel Integration",
      "Unlimited Templates",
      "Dedicated Support",
      "Unlimited Users",
      "Custom Integrations",
      "SLA Guarantee"
    ],
    cta: "Contact Sales",
    variant: "accent" as const,
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 fade-up">
          <Badge variant="glass" className="inline-flex">
            <Star className="w-4 h-4 mr-2" />
            Pricing
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            Choose Your
            <span className="gradient-text block">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a free trial, then choose the plan that scales with your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative transition-all duration-500 hover:scale-105 fade-up ${
                plan.popular 
                  ? 'border-primary/50 shadow-primary/20 shadow-2xl' 
                  : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-6">
                <div className="mx-auto p-4 rounded-xl bg-gradient-primary/10">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.name === "Starter" && (
                    <p className="text-sm text-muted-foreground">14-day free trial</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            All plans include 24/7 support and 99.9% uptime guarantee
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              30-day money back
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              No setup fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}