import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Calculator, Users, Zap, Crown } from "lucide-react";

const PricingCalculator = () => {
  const [users, setUsers] = useState([50]);
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("professional");

  const planPricing = {
    starter: { monthly: 29, annual: 24, maxUsers: 10 },
    professional: { monthly: 99, annual: 82, maxUsers: 100 },
    enterprise: { monthly: 299, annual: 249, maxUsers: 1000 }
  };

  const getCurrentPrice = () => {
    const plan = planPricing[selectedPlan as keyof typeof planPricing];
    const basePrice = isAnnual ? plan.annual : plan.monthly;
    const userCount = users[0];
    
    if (userCount <= plan.maxUsers) {
      return basePrice;
    }
    
    // Additional user pricing
    const extraUsers = userCount - plan.maxUsers;
    const extraUserCost = selectedPlan === "starter" ? 5 : selectedPlan === "professional" ? 3 : 2;
    
    return basePrice + (extraUsers * extraUserCost);
  };

  const getSavings = () => {
    if (!isAnnual) return 0;
    const monthlyTotal = getCurrentPrice() / (isAnnual ? 0.83 : 1) * 12; // Reverse calculation
    const annualTotal = getCurrentPrice() * 12;
    return Math.round(monthlyTotal - annualTotal);
  };

  return (
    <section className="py-20 px-4 bg-glass-subtle" id="calculator">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pricing Calculator
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Customize your plan and see real-time pricing
          </p>
        </div>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-center">Configure Your Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Plan Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Select Plan</Label>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(planPricing).map(([key, plan]) => (
                  <Card
                    key={key}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedPlan === key 
                        ? "ring-2 ring-primary bg-primary/5" 
                        : "hover:bg-accent/20"
                    }`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="mb-2">
                        {key === "starter" && <Users className="h-6 w-6 mx-auto text-blue-500" />}
                        {key === "professional" && <Zap className="h-6 w-6 mx-auto text-purple-500" />}
                        {key === "enterprise" && <Crown className="h-6 w-6 mx-auto text-gold-500" />}
                      </div>
                      <h3 className="font-semibold capitalize">{key}</h3>
                      <p className="text-sm text-muted-foreground">
                        Up to {plan.maxUsers} users
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* User Count Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-lg font-semibold">Number of Users</Label>
                <Badge variant="accent">{users[0]} users</Badge>
              </div>
              <Slider
                value={users}
                onValueChange={setUsers}
                max={500}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 user</span>
                <span>500+ users</span>
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 p-4 bg-accent/10 rounded-lg">
              <Label htmlFor="billing-toggle" className="text-sm">Monthly</Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle" className="text-sm">Annual</Label>
              {isAnnual && (
                <Badge variant="accent" className="ml-2">
                  Save 17%
                </Badge>
              )}
            </div>

            {/* Price Display */}
            <div className="text-center p-6 bg-gradient-primary/5 rounded-lg border border-primary/20">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Cost</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">
                    ${getCurrentPrice()}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    /{isAnnual ? "month" : "month"}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600">
                    Save ${getSavings()} per year!
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Billed {isAnnual ? "annually" : "monthly"}
                </p>
              </div>
              
              <Button variant="hero" size="lg" className="mt-6">
                Start Free Trial
              </Button>
            </div>

            {/* Features Summary */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold">Included Features:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• AI Content Generation</li>
                  <li>• Social Media Automation</li>
                  <li>• Analytics Dashboard</li>
                  <li>• Email Marketing Tools</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Support & Extras:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 24/7 Customer Support</li>
                  <li>• API Access</li>
                  <li>• Custom Integrations</li>
                  <li>• Training & Onboarding</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;