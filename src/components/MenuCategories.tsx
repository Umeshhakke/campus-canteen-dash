import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Sun, Utensils, Moon, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import thaliMeal from "@/assets/thali-meal.jpg";
import rotiCurry from "@/assets/roti-curry.jpg";
import southIndianFood from "@/assets/south-indian-food.jpg";
import snacks from "@/assets/snacks.jpg";

const menuData = {
  breakfast: [
    { name: "Poha", price: 25, image: snacks, available: true },
    { name: "Upma", price: 20, image: southIndianFood, available: true },
    { name: "Paratha", price: 30, image: rotiCurry, available: false },
    { name: "Idli Sambar", price: 35, image: southIndianFood, available: true }
  ],
  lunch: [
    { name: "Full Thali", price: 85, image: thaliMeal, available: true },
    { name: "Roti Curry", price: 45, image: rotiCurry, available: true },
    { name: "Biriyani", price: 120, image: thaliMeal, available: true },
    { name: "South Indian Combo", price: 60, image: southIndianFood, available: true }
  ],
  snacks: [
    { name: "Samosa", price: 15, image: snacks, available: true },
    { name: "Pakora", price: 20, image: snacks, available: true },
    { name: "Sandwich", price: 35, image: snacks, available: false },
    { name: "Vada Pav", price: 25, image: snacks, available: true }
  ],
  dinner: [
    { name: "Dal Rice", price: 55, image: thaliMeal, available: true },
    { name: "Chapati Sabzi", price: 50, image: rotiCurry, available: true },
    { name: "Special Thali", price: 95, image: thaliMeal, available: true },
    { name: "Light Meal", price: 40, image: southIndianFood, available: true }
  ]
};

const categories = [
  { id: "breakfast", label: "Breakfast", icon: Sun, time: "7:00 - 10:00 AM" },
  { id: "lunch", label: "Lunch", icon: Utensils, time: "12:00 - 3:00 PM" },
  { id: "snacks", label: "Snacks", icon: Coffee, time: "3:00 - 6:00 PM" },
  { id: "dinner", label: "Dinner", icon: Moon, time: "7:00 - 10:00 PM" }
];

const MenuCategories = () => {
  const { toast } = useToast();

  const addToCart = (itemName: string, price: number) => {
    toast({
      title: "Added to Cart",
      description: `${itemName} (₹${price}) has been added to your cart.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Utensils className="h-5 w-5" />
          <span>Today's Menu</span>
          <Badge variant="secondary">Updated Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lunch" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex flex-col gap-1">
                <category.icon className="h-4 w-4" />
                <span className="text-xs">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.time}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menuData[category.id as keyof typeof menuData].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 ${
                          item.available ? 'bg-success' : 'bg-muted'
                        }`}
                      >
                        {item.available ? 'Available' : 'Sold Out'}
                      </Badge>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="font-bold text-primary">₹{item.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        disabled={!item.available}
                        variant={item.available ? "default" : "outline"}
                        onClick={() => item.available && addToCart(item.name, item.price)}
                      >
                        {item.available && <ShoppingCart className="h-3 w-3 mr-1" />}
                        {item.available ? 'Add to Cart' : 'Unavailable'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MenuCategories;