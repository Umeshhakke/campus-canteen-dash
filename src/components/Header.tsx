import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CampusCanteen</h1>
                <p className="text-sm text-muted-foreground">Smart, Simple, and Hassle-Free Dining</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Orders</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Subscription</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;