import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Header = () => {
  const { toast } = useToast();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLogin = () => {
    toast({
      title: "Login Successful",
      description: "Welcome back to CampusCanteen!",
    });
    setLoginOpen(false);
  };

  const handleSignup = () => {
    toast({
      title: "Account Created",
      description: "Welcome to CampusCanteen! You can now start booking meals.",
    });
    setSignupOpen(false);
  };

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
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login to CampusCanteen</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" />
                  </div>
                  <Button className="w-full" onClick={handleSignup}>
                    Create Account
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
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