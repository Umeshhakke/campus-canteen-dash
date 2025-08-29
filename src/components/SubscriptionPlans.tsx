import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    id: 1,
    name: "Weekly Plan",
    price: 450,
    originalPrice: 525,
    savings: 75,
    duration: "7 days",
    meals: "14 meals",
    features: [
      "2 meals per day",
      "Free time slot booking",
      "Basic meal options",
      "Mobile app access"
    ],
    popular: false,
    color: "default"
  },
  {
    id: 2,
    name: "Monthly Plan",
    price: 1800,
    originalPrice: 2100,
    savings: 300,
    duration: "30 days",
    meals: "60 meals",
    features: [
      "2 meals per day",
      "Priority time slots",
      "Premium meal options",
      "Free delivery to hostel",
      "Diet customization"
    ],
    popular: true,
    color: "primary"
  },
  {
    id: 3,
    name: "Semester Plan",
    price: 7200,
    originalPrice: 8400,
    savings: 1200,
    duration: "120 days",
    meals: "240 meals",
    features: [
      "2 meals per day",
      "VIP time slot access",
      "All premium meals",
      "Free delivery anywhere",
      "Personal dietitian",
      "Monthly health report"
    ],
    popular: false,
    color: "secondary"
  }
];

const SubscriptionPlans = () => {
  const { toast } = useToast();

  const handleSubscription = (planName: string, price: number) => {
    toast({
      title: "Subscription Started",
      description: `You've successfully subscribed to ${planName} for ₹${price}. Enjoy your meals!`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Crown className="h-5 w-5" />
          <span>Subscription Meal Plans</span>
          <Badge variant="secondary">Save More</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative overflow-hidden ${
                plan.popular ? "ring-2 ring-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  <Star className="inline h-3 w-3 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{plan.originalPrice}</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Save ₹{plan.savings}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {plan.meals} • {plan.duration}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleSubscription(plan.name, plan.price)}
                >
                  Subscribe Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Cancel anytime • No hidden fees
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionPlans;