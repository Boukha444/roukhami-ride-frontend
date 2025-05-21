import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Car, Upload, Check, X } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "sonner";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Car name must be at least 2 characters." }),
  transmission: z.enum(["Manual", "Automatic"]),
  quantity: z.coerce.number().int().positive(),
  fuelType: z.enum(["Essence", "Diesel", "Electric"]),
  dailyRate: z.coerce.number().positive(),
  category: z.enum(["Compact", "SUV", "Sedan", "Luxury", "Economy"]),
  description: z.string().optional(),
  isAvailable: z.boolean().default(true),
  image: z.instanceof(File).optional().nullable(),
});

type FormValues = z.infer<typeof formSchema>;

interface AddCarFormProps {
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
  isEditMode?: boolean;
  carData?: any;
}

const AddCarForm = ({ onClose, onSubmit, isEditMode = false, carData = null }: AddCarFormProps) => {
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: isEditMode && carData ? carData.name : "",
      transmission: isEditMode && carData ? carData.transmission : "Manual",
      quantity: isEditMode && carData ? carData.quantity : 1,
      fuelType: isEditMode && carData ? carData.fuelType : "Essence",
      dailyRate: isEditMode && carData ? carData.dailyRate : 30,
      category: isEditMode && carData ? carData.category : "Compact",
      description: isEditMode && carData ? carData.description : "",
      isAvailable: isEditMode && carData ? carData.isAvailable : true,
      image: null,
    },
  });

  React.useEffect(() => {
    // Set image preview if editing a car with an existing image
    if (isEditMode && carData && carData.image) {
      setImagePreview(typeof carData.image === 'string' ? carData.image : URL.createObjectURL(carData.image));
    }
  }, [isEditMode, carData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitForm = (data: FormValues) => {
    // If editing and not changing the image, keep the existing image
    if (isEditMode && !data.image && carData.image) {
      data.image = carData.image;
    }
    
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-6 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <FormLabel>Car Image</FormLabel>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4">
            {imagePreview ? (
              <div className="mb-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  <img src={imagePreview} alt="Car preview" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setImagePreview(null);
                      form.setValue("image", null);
                    }}
                  >
                    <X className="h-4 w-4 mr-2" /> Remove Image
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" /> Upload New Image
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 sm:py-8">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                  Drop your image here or click to upload
                </p>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("image-upload")?.click()}
                >
                  Select Image
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Car Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Brand & Model</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Hyundai i10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Transmission */}
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transmission type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Manual">Manual</SelectItem>
                    <SelectItem value="Automatic">Automatic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quantity */}
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormDescription>Number of vehicles available</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fuel Type */}
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Essence">Essence</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Per Day */}
          <FormField
            control={form.control}
            name="dailyRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Day</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormDescription>Daily rental price</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Car Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select car category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Compact">Compact</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                  <SelectItem value="Economy">Economy</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Brief description of the vehicle" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Availability Status */}
        <FormField
          control={form.control}
          name="isAvailable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Available</FormLabel>
                <FormDescription>
                  This car will be shown as available for rental
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-2 mt-6">
          <Button type="button" variant="outline" onClick={onClose} className="order-2 sm:order-1">
            Cancel
          </Button>
          <Button type="submit" className="order-1 sm:order-2">
            <Check className="mr-2 h-4 w-4" /> {isEditMode ? "Update Car" : "Add Car"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddCarForm;
