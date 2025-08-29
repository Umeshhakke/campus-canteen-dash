import Header from "@/components/Header";
import MealBooking from "@/components/MealBooking";
import TimeSlotSelection from "@/components/TimeSlotSelection";
import MenuCategories from "@/components/MenuCategories";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FoodShowcase from "@/components/FoodShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-b from-muted/30 to-background rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-primary">CampusCanteen</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Smart, Simple, and Hassle-Free Dining for College Students
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🍽️ Easy Booking
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              ⏰ Time Slots
            </span>
            <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
              💰 Save Money
            </span>
          </div>
        </section>

        {/* Meal Booking Section */}
        <MealBooking />

        {/* Time Slot Selection */}
        <TimeSlotSelection />

        {/* Menu Categories */}
        <MenuCategories />

        {/* Food Showcase */}
        <FoodShowcase />

        {/* Subscription Plans */}
        <SubscriptionPlans />
      </main>
    </div>
  );
};

export default Index;
