
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
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";

// Define validation schema
const businessInfoSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  address: z.string().min(1, "Address is required"),
  whatsappNumber: z.string().min(1, "WhatsApp number is required"),
  email: z.string().email("Invalid email format")
});

const Settings = () => {
  // Business info state
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "ROUKHAMI CAR",
    address: "123 Rue de la Location, Paris, France",
    whatsappNumber: "+33 6 12 34 56 78",
    email: "contact@roukhamicar.com"
  });
  
  // Original business info for reset functionality
  const [originalBusinessInfo] = useState({...businessInfo});

  // Preferences state
  const [preferences, setPreferences] = useState({
    requireLicense: true,
    autoApprove: false,
    sendReminders: true,
    allowWhatsAppBooking: true
  });
  
  // Original preferences for reset functionality
  const [originalPreferences] = useState({...preferences});

  // Form errors state
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Loading states
  const [businessInfoLoading, setBusinessInfoLoading] = useState(false);
  const [preferencesLoading, setPreferencesLoading] = useState(false);
  
  // Tracks if forms have been modified
  const [businessInfoModified, setBusinessInfoModified] = useState(false);
  const [preferencesModified, setPreferencesModified] = useState(false);

  const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => {
      const updated = { ...prev, [name]: value };
      // Check if any values differ from original
      const isModified = Object.keys(originalBusinessInfo).some(
        key => originalBusinessInfo[key as keyof typeof originalBusinessInfo] !== updated[key as keyof typeof updated]
      );
      setBusinessInfoModified(isModified);
      return updated;
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handlePreferenceChange = (name: string, checked: boolean) => {
    setPreferences(prev => {
      const updated = { ...prev, [name]: checked };
      // Check if any values differ from original
      const isModified = Object.keys(originalPreferences).some(
        key => originalPreferences[key as keyof typeof originalPreferences] !== updated[key as keyof typeof updated]
      );
      setPreferencesModified(isModified);
      return updated;
    });
  };
  
  const validateBusinessInfo = () => {
    try {
      businessInfoSchema.parse(businessInfo);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSaveBusinessInfo = async () => {
    if (!validateBusinessInfo()) {
      toast.error("Please fix the errors before saving");
      return;
    }
    
    setBusinessInfoLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - would be replaced with actual API call later
      toast.success("Business information updated successfully!");
      setBusinessInfoModified(false);
    } catch (error) {
      toast.error("Failed to update business information");
      console.error(error);
    } finally {
      setBusinessInfoLoading(false);
    }
  };
  
  const handleSavePreferences = async () => {
    setPreferencesLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - would be replaced with actual API call later
      toast.success("Booking preferences updated successfully!");
      setPreferencesModified(false);
    } catch (error) {
      toast.error("Failed to update booking preferences");
      console.error(error);
    } finally {
      setPreferencesLoading(false);
    }
  };
  
  const handleResetBusinessInfo = () => {
    setBusinessInfo({...originalBusinessInfo});
    setBusinessInfoModified(false);
    setErrors({});
  };
  
  const handleResetPreferences = () => {
    setPreferences({...originalPreferences});
    setPreferencesModified(false);
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
              <Label htmlFor="businessName" className={errors.businessName ? "text-destructive" : ""}>
                Business Name
              </Label>
              <Input 
                id="businessName" 
                name="businessName"
                value={businessInfo.businessName} 
                onChange={handleBusinessInfoChange}
                className={errors.businessName ? "border-destructive" : ""}
              />
              {errors.businessName && (
                <div className="text-sm font-medium text-destructive flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.businessName}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address" className={errors.address ? "text-destructive" : ""}>
                Address
              </Label>
              <Input 
                id="address" 
                name="address"
                value={businessInfo.address} 
                onChange={handleBusinessInfoChange}
                className={errors.address ? "border-destructive" : ""}
              />
              {errors.address && (
                <div className="text-sm font-medium text-destructive flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.address}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber" className={errors.whatsappNumber ? "text-destructive" : ""}>
                WhatsApp Number
              </Label>
              <Input 
                id="whatsappNumber" 
                name="whatsappNumber"
                value={businessInfo.whatsappNumber} 
                onChange={handleBusinessInfoChange}
                className={errors.whatsappNumber ? "border-destructive" : ""}
              />
              {errors.whatsappNumber && (
                <div className="text-sm font-medium text-destructive flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.whatsappNumber}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                Contact Email
              </Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={businessInfo.email} 
                onChange={handleBusinessInfoChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <div className="text-sm font-medium text-destructive flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
            
            <div className="flex space-x-2 pt-2">
              <Button 
                onClick={handleSaveBusinessInfo} 
                disabled={!businessInfoModified || businessInfoLoading}
              >
                {businessInfoLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!businessInfoLoading && businessInfoModified && "Save Changes"}
                {!businessInfoLoading && !businessInfoModified && (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Saved
                  </>
                )}
              </Button>
              
              {businessInfoModified && (
                <Button 
                  variant="outline" 
                  onClick={handleResetBusinessInfo}
                  disabled={businessInfoLoading}
                >
                  Reset
                </Button>
              )}
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
            
            <div className="flex space-x-2 pt-2">
              <Button
                onClick={handleSavePreferences}
                disabled={!preferencesModified || preferencesLoading}
              >
                {preferencesLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!preferencesLoading && preferencesModified && "Save Preferences"}
                {!preferencesLoading && !preferencesModified && (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Saved
                  </>
                )}
              </Button>
              
              {preferencesModified && (
                <Button
                  variant="outline"
                  onClick={handleResetPreferences}
                  disabled={preferencesLoading}
                >
                  Reset
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
