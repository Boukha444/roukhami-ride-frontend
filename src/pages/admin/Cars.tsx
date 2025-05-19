
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
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import AddCarForm from "@/components/admin/AddCarForm";
import { toast } from "sonner";

// Car type definition
interface Car {
  id: number;
  name: string;
  type: string;
  status: string;
  mileage: string;
}

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
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [isAddCarDialogOpen, setIsAddCarDialogOpen] = useState(false);
  const [isEditCarDialogOpen, setIsEditCarDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

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

  const handleEditCar = (data: any) => {
    if (!selectedCar) return;
    
    setCars(cars.map(car => 
      car.id === selectedCar.id 
        ? { 
            ...car, 
            name: data.name,
            type: data.transmission,
            status: data.isAvailable ? "Available" : "Rented"
          } 
        : car
    ));
    
    setIsEditCarDialogOpen(false);
    toast.success(`${data.name} updated successfully!`);
  };

  const handleDeleteCar = () => {
    if (!selectedCar) return;
    
    setCars(cars.filter(car => car.id !== selectedCar.id));
    setIsDeleteDialogOpen(false);
    toast.success(`${selectedCar.name} deleted successfully!`);
  };

  const openEditDialog = (car: Car) => {
    setSelectedCar(car);
    setIsEditCarDialogOpen(true);
  };

  const openDeleteDialog = (car: Car) => {
    setSelectedCar(car);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Cars</h1>
        <Button onClick={() => setIsAddCarDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Car
        </Button>
      </div>

      <div className="rounded-md border overflow-x-auto">
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
                      className="hidden sm:inline-flex"
                    >
                      {car.status === "Available" ? "Mark as Rented" : "Mark as Available"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleStatus(car.id)}
                      className="sm:hidden"
                    >
                      {car.status === "Available" ? "Rent" : "Available"}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => openEditDialog(car)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => openDeleteDialog(car)}
                    >
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
        <DialogContent className="sm:max-w-[90%] md:max-w-[800px] p-0 sm:p-6">
          <DialogHeader className="p-6 sm:p-0">
            <DialogTitle className="text-xl">Add New Car</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[80vh] px-6 pb-6 sm:px-0 sm:pb-0">
            <AddCarForm 
              onClose={() => setIsAddCarDialogOpen(false)} 
              onSubmit={handleAddCar} 
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Car Dialog */}
      <Dialog open={isEditCarDialogOpen} onOpenChange={setIsEditCarDialogOpen}>
        <DialogContent className="sm:max-w-[90%] md:max-w-[800px] p-0 sm:p-6">
          <DialogHeader className="p-6 sm:p-0">
            <DialogTitle className="text-xl">Edit Car</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[80vh] px-6 pb-6 sm:px-0 sm:pb-0">
            {selectedCar && (
              <AddCarForm 
                onClose={() => setIsEditCarDialogOpen(false)} 
                onSubmit={handleEditCar}
                initialData={{
                  name: selectedCar.name,
                  transmission: selectedCar.type,
                  isAvailable: selectedCar.status === "Available"
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete {selectedCar?.name} from your fleet. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteCar} 
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Cars;
