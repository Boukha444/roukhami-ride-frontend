
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
import { Pencil, Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddCarForm from "@/components/admin/AddCarForm";
import { toast } from "sonner";

// Mock car data
const initialCars = [
  { 
    id: 1, 
    name: "Dacia Logan", 
    type: "Manual", 
    status: "Available", 
    mileage: "12,500 km" 
  },
  { 
    id: 2, 
    name: "Renault Clio", 
    type: "Automatic", 
    status: "Rented", 
    mileage: "8,200 km" 
  },
  { 
    id: 3, 
    name: "Peugeot 208", 
    type: "Manual", 
    status: "Available", 
    mileage: "15,700 km" 
  },
  { 
    id: 4, 
    name: "Citroen C3", 
    type: "Automatic", 
    status: "Rented", 
    mileage: "5,900 km" 
  },
  { 
    id: 5, 
    name: "Volkswagen Golf", 
    type: "Manual", 
    status: "Available", 
    mileage: "20,300 km" 
  },
];

const Cars = () => {
  const [cars, setCars] = useState(initialCars);
  const [isAddCarDialogOpen, setIsAddCarDialogOpen] = useState(false);

  const toggleStatus = (id: number) => {
    setCars(cars.map(car => 
      car.id === id 
        ? { 
            ...car, 
            status: car.status === "Available" ? "Rented" : "Available" 
          } 
        : car
    ));
  };

  const handleAddCar = (data: any) => {
    const newCar = {
      id: cars.length + 1,
      name: data.name,
      type: data.transmission,
      status: data.isAvailable ? "Available" : "Not Available",
      mileage: "0 km"
    };
    setCars([...cars, newCar]);
    setIsAddCarDialogOpen(false);
    toast.success(`${data.name} added successfully!`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cars</h1>
        <Button onClick={() => setIsAddCarDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Car
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Car Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Mileage</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell className="font-medium">{car.name}</TableCell>
                <TableCell>{car.type}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    car.status === "Available" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {car.status}
                  </div>
                </TableCell>
                <TableCell>{car.mileage}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleStatus(car.id)}
                    >
                      {car.status === "Available" ? "Mark as Rented" : "Mark as Available"}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Car Dialog */}
      <Dialog open={isAddCarDialogOpen} onOpenChange={setIsAddCarDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Car</DialogTitle>
          </DialogHeader>
          <AddCarForm 
            onClose={() => setIsAddCarDialogOpen(false)} 
            onSubmit={handleAddCar} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cars;
