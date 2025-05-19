
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  transmission: z.string(),
  isAvailable: z.boolean().default(true),
  // Add other fields as needed
});

type FormData = z.infer<typeof formSchema>;

interface AddCarFormProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: {
    name: string;
    transmission: string;
    isAvailable: boolean;
  };
}

const AddCarForm = ({ onClose, onSubmit, initialData }: AddCarFormProps) => {
  const isEditMode = !!initialData;
  
  const defaultValues: FormData = {
    name: initialData?.name || "",
    transmission: initialData?.transmission || "manual",
    isAvailable: initialData?.isAvailable ?? true,
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Dacia Logan" {...field} />
              </FormControl>
              <FormDescription>
                Enter the make and model of the car
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="transmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transmission Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transmission type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="automatic">Automatic</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the transmission type of the car
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isAvailable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Available for Rent
                </FormLabel>
                <FormDescription>
                  Set whether this car is currently available for rental
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {isEditMode ? "Update Car" : "Add Car"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddCarForm;
