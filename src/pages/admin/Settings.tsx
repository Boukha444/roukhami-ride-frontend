
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import ThemeToggle from "@/components/ThemeToggle";

const Settings = () => {
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "ROUKHAMI CAR",
    address: "123 Rue de la Location, Paris, France",
    whatsappNumber: "+33 6 12 34 56 78",
    email: "contact@roukhamicar.com"
  });

  const [preferences, setPreferences] = useState({
    requireLicense: true,
    autoApprove: false,
    sendReminders: true,
    allowWhatsAppBooking: true
  });

  const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (name: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
            <CardDescription>
              Update your business details that will be visible to customers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input 
                id="businessName" 
                name="businessName"
                value={businessInfo.businessName} 
                onChange={handleBusinessInfoChange} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address" 
                name="address"
                value={businessInfo.address} 
                onChange={handleBusinessInfoChange} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
              <Input 
                id="whatsappNumber" 
                name="whatsappNumber"
                value={businessInfo.whatsappNumber} 
                onChange={handleBusinessInfoChange} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={businessInfo.email} 
                onChange={handleBusinessInfoChange} 
              />
            </div>
            <div className="pt-2">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>
              Customize the appearance of your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="theme-toggle">Dark Mode</Label>
                <span className="text-sm text-muted-foreground">Toggle between light and dark themes</span>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Booking Preferences</CardTitle>
            <CardDescription>
              Manage how bookings are handled in your system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="requireLicense">Require Driver's License</Label>
                <p className="text-sm text-muted-foreground">
                  Customers must upload their driver's license before booking
                </p>
              </div>
              <Switch
                id="requireLicense"
                checked={preferences.requireLicense}
                onCheckedChange={(checked) => handlePreferenceChange("requireLicense", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="autoApprove">Auto-approve Bookings</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically approve bookings when all requirements are met
                </p>
              </div>
              <Switch
                id="autoApprove"
                checked={preferences.autoApprove}
                onCheckedChange={(checked) => handlePreferenceChange("autoApprove", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sendReminders">Send Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Send reminders to customers about upcoming bookings
                </p>
              </div>
              <Switch
                id="sendReminders"
                checked={preferences.sendReminders}
                onCheckedChange={(checked) => handlePreferenceChange("sendReminders", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="allowWhatsAppBooking">Allow WhatsApp Booking</Label>
                <p className="text-sm text-muted-foreground">
                  Let customers book through WhatsApp
                </p>
              </div>
              <Switch
                id="allowWhatsAppBooking"
                checked={preferences.allowWhatsAppBooking}
                onCheckedChange={(checked) => handlePreferenceChange("allowWhatsAppBooking", checked)}
              />
            </div>
            
            <div className="pt-2">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
