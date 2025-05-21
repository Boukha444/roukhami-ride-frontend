
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
    mileage: "12,500 km",
    transmission: "Manual",
    quantity: 3,
    fuelType: "Essence",
    dailyRate: 30,
    category: "Economy",
    description: "Economical car perfect for city driving.",
    isAvailable: true,
    image: null
  },
  { 
    id: 2, 
    name: "Renault Clio", 
    type: "Automatic", 
    status: "Rented", 
    mileage: "8,200 km",
    transmission: "Automatic",
    quantity: 2,
    fuelType: "Diesel",
    dailyRate: 35,
    category: "Compact",
    description: "Compact and fuel-efficient, ideal for city use.",
    isAvailable: false,
    image: null
  },
  { 
    id: 3, 
    name: "Peugeot 208", 
    type: "Manual", 
    status: "Available", 
    mileage: "15,700 km",
    transmission: "Manual",
    quantity: 4,
    fuelType: "Essence",
    dailyRate: 32,
    category: "Compact",
    description: "Stylish and comfortable small car.",
    isAvailable: true,
    image: null
  },
  { 
    id: 4, 
    name: "Citroen C3", 
    type: "Automatic", 
    status: "Rented", 
    mileage: "5,900 km",
    transmission: "Automatic",
    quantity: 1,
    fuelType: "Diesel",
    dailyRate: 38,
    category: "Compact",
    description: "Unique design and comfortable ride.",
    isAvailable: false,
    image: null
  },
  { 
    id: 5, 
    name: "Volkswagen Golf", 
    type: "Manual", 
    status: "Available", 
    mileage: "20,300 km",
    transmission: "Manual",
    quantity: 2,
    fuelType: "Diesel",
    dailyRate: 40,
    category: "Compact",
    description: "German engineering with excellent build quality.",
    isAvailable: true,
    image: null
  },
];

const Cars = () => {
  const [cars, setCars] = useState(initialCars);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  
  const toggleStatus = (id) => {
    setCars(cars.map(car => 
      car.id === id 
        ? { 
            ...car, 
            status: car.status === "Available" ? "Rented" : "Available",
            isAvailable: car.status === "Available" ? false : true
          } 
        : car
    ));
  };

  const handleAddCar = (data) => {
    const newCar = {
      id: cars.length + 1,
      name: data.name,
      type: data.transmission,
      status: data.isAvailable ? "Available" : "Not Available",
      mileage: "0 km",
      transmission: data.transmission,
      quantity: data.quantity,
      fuelType: data.fuelType,
      dailyRate: data.dailyRate,
      category: data.category,
      description: data.description,
      isAvailable: data.isAvailable,
      image: data.image || null
    };
    setCars([...cars, newCar]);
    setIsFormDialogOpen(false);
    toast.success(`${data.name} added successfully!`);
  };

  const handleUpdateCar = (data) => {
    setCars(cars.map(car => 
      car.id === currentCar.id 
        ? { 
            ...car,
            name: data.name,
            type: data.transmission,
            status: data.isAvailable ? "Available" : "Not Available",
            transmission: data.transmission,
            quantity: data.quantity,
            fuelType: data.fuelType,
            dailyRate: data.dailyRate,
            category: data.category,
            description: data.description,
            isAvailable: data.isAvailable,
            image: data.image
          } 
        : car
    ));
    setIsFormDialogOpen(false);
    setCurrentCar(null);
    setIsEditMode(false);
    toast.success(`${data.name} updated successfully!`);
  };

  const handleEditCar = (car) => {
    setCurrentCar(car);
    setIsEditMode(true);
    setIsFormDialogOpen(true);
  };

  const handleOpenAddForm = () => {
    setCurrentCar(null);
    setIsEditMode(false);
    setIsFormDialogOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormDialogOpen(false);
    setCurrentCar(null);
    setIsEditMode(false);
  };

  const handleDeleteCar = (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      setCars(cars.filter(car => car.id !== id));
      toast.success("Car deleted successfully!");
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Cars</h1>
        <Button onClick={handleOpenAddForm}>
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
                      onClick={() => handleEditCar(car)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDeleteCar(car.id)}
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

      {/* Car Form Dialog */}
      <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
        <DialogContent className="sm:max-w-[90%] md:max-w-[800px] p-0 sm:p-6">
          <DialogHeader className="p-6 sm:p-0">
            <DialogTitle className="text-xl">
              {isEditMode ? "Edit Car" : "Add New Car"}
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[80vh] px-6 pb-6 sm:px-0 sm:pb-0">
            <AddCarForm 
              onClose={handleCloseForm} 
              onSubmit={isEditMode ? handleUpdateCar : handleAddCar}
              isEditMode={isEditMode}
              carData={currentCar}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cars;
