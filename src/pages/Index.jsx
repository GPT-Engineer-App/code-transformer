import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Button Clicked",
      description: "You have clicked the button!",
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">CodeFormer UI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="input">Enter some text</Label>
              <Input id="input" placeholder="Type here..." />
            </div>
            <Button onClick={handleButtonClick} className="w-full">
              Click Me
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;