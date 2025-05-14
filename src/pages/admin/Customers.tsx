
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User, Check, X } from "lucide-react";

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
                  <Button size="sm" variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
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
