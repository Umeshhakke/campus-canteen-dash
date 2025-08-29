import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import thaliMeal from "@/assets/thali-meal.jpg";
import rotiCurry from "@/assets/roti-curry.jpg";
import southIndianFood from "@/assets/south-indian-food.jpg";
import snacks from "@/assets/snacks.jpg";

const meals = [
  {
    id: 1,
    name: "Full Thali",
    description: "Complete meal with rice, dal, vegetables, roti, and curry",
    price: 85,
    image: thaliMeal,
    canteen: "Canteen B",
    rating: 4.5,
    availability: "Available",
    time: "12:00 - 2:00 PM"
  },
  {
    id: 2,
    name: "Roti & Curry",
    description: "Fresh roti with aromatic curry and side dishes",
    price: 45,
    image: rotiCurry,
    canteen: "Canteen A",
    rating: 4.3,
    availability: "Available",
    time: "11:30 - 2:00 PM"
  },
  {
    id: 3,
    name: "South Indian Special",
    description: "Dosa with coconut chutney and sambar",
    price: 60,
    image: southIndianFood,
    canteen: "Canteen D",
    rating: 4.7,
    availability: "Limited",
    time: "10:00 - 1:00 PM"
  },
  {
    id: 4,
    name: "Snack Combo",
    description: "Assorted snacks with chutneys",
    price: 35,
    image: snacks,
    canteen: "Canteen C",
    rating: 4.2,
    availability: "Available",
    time: "2:00 - 6:00 PM"
  }
];

const MealBooking = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (mealId: number, mealName: string, price: number) => {
    setCartItems([...cartItems, mealId]);
    toast({
      title: "Added to Cart",
      description: `${mealName} (₹${price}) has been added to your cart.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Book a Meal</span>
          <Badge variant="secondary">Today's Menu</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {meals.map((meal) => (
            <Card key={meal.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${
                    meal.availability === 'Limited' ? 'bg-warning' : 'bg-success'
                  }`}
                >
                  {meal.availability}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{meal.name}</h3>
                  <span className="text-lg font-bold text-primary">₹{meal.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{meal.canteen}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-warning" />
                    <span>{meal.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{meal.time}</span>
                </div>
                
                <Button 
                  className="w-full" 
                  variant={meal.availability === 'Limited' ? 'outline' : 'default'}
                  onClick={() => addToCart(meal.id, meal.name, meal.price)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {meal.availability === 'Limited' ? 'Limited Stock' : 'Add to Cart'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MealBooking;