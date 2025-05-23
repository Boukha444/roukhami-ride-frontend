
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User, Check, X, Download, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Customer type definition
interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  bookings: number;
  licenseUploaded: boolean;
}

// Mock customers data
const customers = [
  { 
    id: 1, 
    name: "Martin Dupont", 
    phone: "+33 6 12 34 56 78", 
    email: "martin.dupont@email.com", 
    bookings: 3, 
    licenseUploaded: true 
  },
  { 
    id: 2, 
    name: "Sophie Martin", 
    phone: "+33 6 23 45 67 89", 
    email: "sophie.martin@email.com", 
    bookings: 1, 
    licenseUploaded: true 
  },
  { 
    id: 3, 
    name: "Lucas Petit", 
    phone: "+33 6 34 56 78 90", 
    email: "lucas.petit@email.com", 
    bookings: 0, 
    licenseUploaded: false 
  },
  { 
    id: 4, 
    name: "Emma Rodriguez", 
    phone: "+33 6 45 67 89 01", 
    email: "emma.rodriguez@email.com", 
    bookings: 2, 
    licenseUploaded: true 
  },
  { 
    id: 5, 
    name: "Thomas Lefebvre", 
    phone: "+33 6 56 78 90 12", 
    email: "thomas.lefebvre@email.com", 
    bookings: 1, 
    licenseUploaded: true 
  },
];

const CustomerProfile = ({ customer }: { customer: Customer }) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "License downloaded",
      description: "The license file has been downloaded successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{customer.name}</h2>
            <p className="text-muted-foreground">Customer ID: #{customer.id}</p>
          </div>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
              <p>{customer.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
              <p>{customer.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Bookings</p>
              <p>{customer.bookings}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">License Status</p>
              {customer.licenseUploaded ? (
                <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                  <Check className="mr-1 h-3 w-3" /> Uploaded
                </div>
              ) : (
                <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800">
                  <X className="mr-1 h-3 w-3" /> Missing
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {customer.licenseUploaded && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">License Document</h3>
          <div className="border rounded-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop" 
              alt="License Document Preview" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-muted/20 flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span className="text-sm">license-document.pdf</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Download License
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Customers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Bookings</TableHead>
              <TableHead>License Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell className="text-center">{customer.bookings}</TableCell>
                <TableCell>
                  {customer.licenseUploaded ? (
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                      <Check className="mr-1 h-3 w-3" /> Uploaded
                    </div>
                  ) : (
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800">
                      <X className="mr-1 h-3 w-3" /> Missing
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button size="sm" variant="outline">
                        <User className="mr-2 h-4 w-4" />
                        View Profile
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                      <SheetHeader className="mb-6">
                        <SheetTitle>Customer Profile</SheetTitle>
                        <SheetDescription>
                          View detailed information about this customer.
                        </SheetDescription>
                      </SheetHeader>
                      <CustomerProfile customer={customer} />
                    </SheetContent>
                  </Sheet>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Customers;
