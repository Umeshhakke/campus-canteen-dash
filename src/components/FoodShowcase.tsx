import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import thaliMeal from "@/assets/thali-meal.jpg";
import rotiCurry from "@/assets/roti-curry.jpg";
import southIndianFood from "@/assets/south-indian-food.jpg";
import snacks from "@/assets/snacks.jpg";

const foodItems = [
  {
    id: 1,
    name: "Classic Thali",
    image: thaliMeal,
    canteen: "Canteen B",
    rating: 4.5,
    status: "Available",
    trending: true,
    liked: false,
    description: "Traditional complete meal"
  },
  {
    id: 2,
    name: "Roti Curry Combo",
    image: rotiCurry,
    canteen: "Canteen A", 
    rating: 4.3,
    status: "Available",
    trending: false,
    liked: true,
    description: "Fresh roti with spicy curry"
  },
  {
    id: 3,
    name: "South Indian Delight",
    image: southIndianFood,
    canteen: "Canteen D",
    rating: 4.7,
    status: "Limited",
    trending: true,
    liked: false,
    description: "Authentic dosa with chutneys"
  },
  {
    id: 4,
    name: "Evening Snacks",
    image: snacks,
    canteen: "Canteen C",
    rating: 4.2,
    status: "Available",
    trending: false,
    liked: true,
    description: "Crispy snacks with dips"
  },
  {
    id: 5,
    name: "Special Biriyani",
    image: thaliMeal,
    canteen: "Canteen B",
    rating: 4.8,
    status: "Available",
    trending: true,
    liked: false,
    description: "Aromatic rice with tender meat"
  },
  {
    id: 6,
    name: "Healthy Salad Bowl",
    image: southIndianFood,
    canteen: "Canteen A",
    rating: 4.4,
    status: "Available",
    trending: false,
    liked: false,
    description: "Fresh mixed vegetables"
  }
];

const FoodShowcase = () => {
  const { toast } = useToast();
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (itemId: number, itemName: string) => {
    const isLiked = likedItems.includes(itemId);
    if (isLiked) {
      setLikedItems(likedItems.filter(id => id !== itemId));
      toast({
        title: "Removed from Favorites",
        description: `${itemName} has been removed from your favorites.`,
      });
    } else {
      setLikedItems([...likedItems, itemId]);
      toast({
        title: "Added to Favorites",
        description: `${itemName} has been added to your favorites.`,
      });
    }
  };

  const viewDetails = (itemName: string) => {
    toast({
      title: "View Details",
      description: `Viewing details for ${itemName}`,
    });
  };

  const viewAllMenuItems = () => {
    toast({
      title: "Menu Loading",
      description: "Loading complete menu items...",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Canteen Food Showcase</span>
          </div>
          <Badge variant="outline">Live Updates</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {foodItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-2 left-2 text-xs ${
                    item.status === 'Limited' ? 'bg-warning' : 'bg-success'
                  }`}
                >
                  {item.status}
                </Badge>
                
                {/* Trending Badge */}
                {item.trending && (
                  <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Hot
                  </Badge>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="h-8 w-8 p-0"
                    onClick={() => viewDetails(item.name)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant={likedItems.includes(item.id) || item.liked ? "default" : "secondary"} 
                    className="h-8 w-8 p-0"
                    onClick={() => toggleLike(item.id, item.name)}
                  >
                    <Heart className={`h-4 w-4 ${(likedItems.includes(item.id) || item.liked) ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </div>
              
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{item.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item.canteen}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-warning" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={viewAllMenuItems}>
            View All Menu Items
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodShowcase;