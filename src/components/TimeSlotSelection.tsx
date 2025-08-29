import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  { id: 1, time: "12:00-12:15", available: true, popular: false },
  { id: 2, time: "12:15-12:30", available: true, popular: true },
  { id: 3, time: "12:30-12:45", available: true, popular: false },
  { id: 4, time: "12:45-1:00", available: false, popular: false },
  { id: 5, time: "1:00-1:15", available: true, popular: false },
  { id: 6, time: "1:15-1:30", available: true, popular: false },
];

const TimeSlotSelection = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Select a Time Slot</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {timeSlots.map((slot) => (
            <div key={slot.id} className="relative">
              <Button
                variant={selectedSlot === slot.id ? "default" : "outline"}
                className={`w-full h-12 text-sm ${
                  !slot.available ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => slot.available && setSelectedSlot(slot.id)}
                disabled={!slot.available}
              >
                {slot.time}
              </Button>
              {slot.popular && slot.available && (
                <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-1">
                  Popular
                </Badge>
              )}
              {!slot.available && (
                <Badge className="absolute -top-2 -right-2 bg-muted text-muted-foreground text-xs px-1">
                  Full
                </Badge>
              )}
            </div>
          ))}
        </div>
        
        {selectedSlot && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Selected:</span>{" "}
              {timeSlots.find(slot => slot.id === selectedSlot)?.time} lunch slot
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Please arrive 5 minutes before your selected time
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimeSlotSelection;