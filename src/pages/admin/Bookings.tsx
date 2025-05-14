
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
import { FileUp, Check, X, MessageCircle } from "lucide-react";

// Mock bookings data
const bookings = [
  { 
    id: 1, 
    client: "Martin Dupont", 
    car: "Dacia Logan", 
    dates: "12/05/2023 - 15/05/2023", 
    type: "WhatsApp", 
    status: "Pending",
    licenseUploaded: true
  },
  { 
    id: 2, 
    client: "Sophie Martin", 
    car: "Renault Clio", 
    dates: "18/05/2023 - 25/05/2023", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true
  },
  { 
    id: 3, 
    client: "Lucas Petit", 
    car: "Peugeot 208", 
    dates: "01/06/2023 - 07/06/2023", 
    type: "WhatsApp", 
    status: "Pending",
    licenseUploaded: false
  },
  { 
    id: 4, 
    client: "Emma Rodriguez", 
    car: "Citroen C3", 
    dates: "10/06/2023 - 12/06/2023", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true
  },
  { 
    id: 5, 
    client: "Thomas Lefebvre", 
    car: "Volkswagen Golf", 
    dates: "15/06/2023 - 20/06/2023", 
    type: "WhatsApp", 
    status: "Rejected",
    licenseUploaded: true
  },
];

const Bookings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Car</TableHead>
              <TableHead>Rental Dates</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.client}</TableCell>
                <TableCell>{booking.car}</TableCell>
                <TableCell>{booking.dates}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    booking.type === "WhatsApp" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {booking.type}
                  </div>
                </TableCell>
                <TableCell>
                  {booking.licenseUploaded ? (
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <FileUp className="mr-2 h-4 w-4" />
                      Request
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    booking.status === "Approved" 
                      ? "bg-green-100 text-green-800" 
                      : booking.status === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {booking.status === "Pending" && (
                      <>
                        <Button size="icon" variant="ghost" className="text-green-600">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-red-600">
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    <Button size="icon" variant="ghost">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Bookings;
