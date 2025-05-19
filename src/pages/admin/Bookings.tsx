
import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { format, addDays, startOfToday, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWithinInterval, parseISO } from "date-fns";
import { FileUp, Check, X, MessageCircle, Search, Calendar as CalendarIcon, FileText, Filter, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock bookings data
const mockBookings = [
  { 
    id: 1, 
    client: "Martin Dupont", 
    car: "Dacia Logan", 
    startDate: "2023-05-12", 
    endDate: "2023-05-15", 
    type: "WhatsApp", 
    status: "Pending",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 2, 
    client: "Sophie Martin", 
    car: "Renault Clio", 
    startDate: "2023-05-18", 
    endDate: "2023-05-25", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 3, 
    client: "Lucas Petit", 
    car: "Peugeot 208", 
    startDate: "2023-06-01", 
    endDate: "2023-06-07", 
    type: "WhatsApp", 
    status: "Pending",
    licenseUploaded: false
  },
  { 
    id: 4, 
    client: "Emma Rodriguez", 
    car: "Citroen C3", 
    startDate: "2023-06-10", 
    endDate: "2023-06-12", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 5, 
    client: "Thomas Lefebvre", 
    car: "Volkswagen Golf", 
    startDate: "2023-06-15", 
    endDate: "2023-06-20", 
    type: "WhatsApp", 
    status: "Rejected",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 6, 
    client: "Sarah Johnson", 
    car: "Ford Focus", 
    startDate: "2023-06-22", 
    endDate: "2023-06-25", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 7, 
    client: "Antoine Bernard", 
    car: "Toyota Yaris", 
    startDate: "2023-07-01", 
    endDate: "2023-07-07", 
    type: "WhatsApp", 
    status: "Pending",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 8, 
    client: "Clara Dubois", 
    car: "Nissan Micra", 
    startDate: "2023-07-10", 
    endDate: "2023-07-15", 
    type: "Direct", 
    status: "Approved",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 9, 
    client: "Pierre Moreau", 
    car: "Fiat 500", 
    startDate: "2023-07-18", 
    endDate: "2023-07-20", 
    type: "WhatsApp", 
    status: "Rejected",
    licenseUploaded: false
  },
  { 
    id: 10, 
    client: "Julie Laurent", 
    car: "BMW Series 1", 
    startDate: "2023-07-25", 
    endDate: "2023-07-30", 
    type: "Direct", 
    status: "Pending",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 11, 
    client: "Marc Girard", 
    car: "Mercedes A-Class", 
    startDate: "2023-08-02", 
    endDate: "2023-08-08", 
    type: "WhatsApp", 
    status: "Approved",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
  { 
    id: 12, 
    client: "Camille Rousseau", 
    car: "Audi A3", 
    startDate: "2023-08-12", 
    endDate: "2023-08-15", 
    type: "Direct", 
    status: "Pending",
    licenseUploaded: true,
    licenseUrl: "/license-sample.jpg"
  },
];

const Bookings = () => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState(mockBookings);
  const [filteredBookings, setFilteredBookings] = useState(mockBookings);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateRangeFilter, setDateRangeFilter] = useState<{ from: Date | undefined; to: Date | undefined }>({ from: undefined, to: undefined });
  const [datePresetFilter, setDatePresetFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [bookingsPerPage] = useState(5);
  const [viewLicenseDialog, setViewLicenseDialog] = useState(false);
  const [currentLicenseUrl, setCurrentLicenseUrl] = useState("");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject">("approve");
  const [selectedBooking, setSelectedBooking] = useState<number | null>(null);

  // Apply filters
  useEffect(() => {
    let result = bookings;
    
    // Apply search query
    if (searchQuery) {
      result = result.filter(booking => 
        booking.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.car.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter(booking => booking.status === statusFilter);
    }
    
    // Apply type filter
    if (typeFilter !== "all") {
      result = result.filter(booking => booking.type === typeFilter);
    }
    
    // Apply date range filter
    if (dateRangeFilter.from && dateRangeFilter.to) {
      result = result.filter(booking => {
        const startDate = parseISO(booking.startDate);
        const endDate = parseISO(booking.endDate);
        
        return (
          isWithinInterval(startDate, { start: dateRangeFilter.from!, end: dateRangeFilter.to! }) ||
          isWithinInterval(endDate, { start: dateRangeFilter.from!, end: dateRangeFilter.to! }) ||
          (startDate <= dateRangeFilter.from! && endDate >= dateRangeFilter.to!)
        );
      });
    }
    
    // Apply date preset filter
    if (datePresetFilter !== "all" && !dateRangeFilter.from && !dateRangeFilter.to) {
      const today = startOfToday();
      let start: Date, end: Date;
      
      switch (datePresetFilter) {
        case "today":
          start = today;
          end = today;
          break;
        case "thisWeek":
          start = startOfWeek(today);
          end = endOfWeek(today);
          break;
        case "thisMonth":
          start = startOfMonth(today);
          end = endOfMonth(today);
          break;
        default:
          start = today;
          end = today;
      }
      
      result = result.filter(booking => {
        const startDate = parseISO(booking.startDate);
        const endDate = parseISO(booking.endDate);
        
        return (
          isWithinInterval(startDate, { start, end }) ||
          isWithinInterval(endDate, { start, end }) ||
          (startDate <= start && endDate >= end)
        );
      });
    }
    
    setFilteredBookings(result);
    setPage(1); // Reset to first page when filters change
  }, [bookings, searchQuery, statusFilter, typeFilter, dateRangeFilter, datePresetFilter]);

  // Get current page bookings
  const indexOfLastBooking = page * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setPage(pageNumber);

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setTypeFilter("all");
    setDateRangeFilter({ from: undefined, to: undefined });
    setDatePresetFilter("all");
  };

  // View license handler
  const handleViewLicense = (licenseUrl: string) => {
    setCurrentLicenseUrl(licenseUrl);
    setViewLicenseDialog(true);
  };

  // Approve booking handler
  const handleApproveBooking = (id: number) => {
    setSelectedBooking(id);
    setActionType("approve");
    setConfirmDialogOpen(true);
  };

  // Reject booking handler
  const handleRejectBooking = (id: number) => {
    setSelectedBooking(id);
    setActionType("reject");
    setConfirmDialogOpen(true);
  };

  // Confirm action
  const confirmAction = () => {
    if (!selectedBooking) return;
    
    const updatedBookings = bookings.map(booking => {
      if (booking.id === selectedBooking) {
        return {
          ...booking,
          status: actionType === "approve" ? "Approved" : "Rejected"
        };
      }
      return booking;
    });
    
    setBookings(updatedBookings);
    setConfirmDialogOpen(false);
    
    toast({
      title: actionType === "approve" ? "Booking Approved" : "Booking Rejected",
      description: `Booking #${selectedBooking} has been ${actionType === "approve" ? "approved" : "rejected"}.`,
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold">Bookings</h1>
        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetFilters} className="text-sm">
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Filters section */}
      <div className="bg-gray-50 p-4 rounded-md mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by client or car..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-[180px]">
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Type Filter */}
          <div className="w-full md:w-[180px]">
            <Select
              value={typeFilter}
              onValueChange={(value) => setTypeFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                  <SelectItem value="Direct">Direct</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Date Preset Filter */}
          <div className="w-full md:w-[180px]">
            <Select
              value={datePresetFilter}
              onValueChange={(value) => {
                setDatePresetFilter(value);
                // Clear custom date range when using presets
                if (value !== "all") {
                  setDateRangeFilter({ from: undefined, to: undefined });
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="custom">Custom Range...</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Date Range Picker */}
          {datePresetFilter === "custom" && (
            <div className="w-full md:w-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full md:w-[240px] justify-start text-left">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRangeFilter.from ? (
                      dateRangeFilter.to ? (
                        <>
                          {format(dateRangeFilter.from, "LLL dd, y")} -{" "}
                          {format(dateRangeFilter.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRangeFilter.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={{
                      from: dateRangeFilter.from,
                      to: dateRangeFilter.to,
                    }}
                    onSelect={(range) => setDateRangeFilter(range || { from: undefined, to: undefined })}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>

      {/* Tabs for different booking states */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Table content is shared across tabs, with different filters applied */}
          <BookingsTable 
            bookings={currentBookings} 
            onViewLicense={handleViewLicense} 
            onApprove={handleApproveBooking} 
            onReject={handleRejectBooking} 
          />
        </TabsContent>
        <TabsContent value="pending">
          <BookingsTable 
            bookings={currentBookings.filter(b => b.status === "Pending")} 
            onViewLicense={handleViewLicense} 
            onApprove={handleApproveBooking} 
            onReject={handleRejectBooking} 
          />
        </TabsContent>
        <TabsContent value="approved">
          <BookingsTable 
            bookings={currentBookings.filter(b => b.status === "Approved")} 
            onViewLicense={handleViewLicense} 
            onApprove={handleApproveBooking} 
            onReject={handleRejectBooking} 
          />
        </TabsContent>
        <TabsContent value="rejected">
          <BookingsTable 
            bookings={currentBookings.filter(b => b.status === "Rejected")} 
            onViewLicense={handleViewLicense} 
            onApprove={handleApproveBooking} 
            onReject={handleRejectBooking} 
          />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => page > 1 && paginate(page - 1)}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <PaginationItem key={number}>
                <PaginationLink 
                  isActive={page === number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => page < totalPages && paginate(page + 1)}
                className={page === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* View License Dialog */}
      <Dialog open={viewLicenseDialog} onOpenChange={setViewLicenseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Driver's License</DialogTitle>
            <DialogDescription>
              Viewing driver's license document
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-4 border rounded-md">
            {/* Placeholder for license image - in a real app this would show the actual image */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <FileText className="h-16 w-16 text-gray-400" />
              <p className="text-gray-500 ml-2">License document preview</p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirm Action Dialog */}
      <AlertDialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionType === "approve" ? "Approve Booking" : "Reject Booking"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {actionType === "approve" ? "approve" : "reject"} this booking?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
              {actionType === "approve" ? "Approve" : "Reject"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// BookingsTable component to display the bookings
interface BookingsTableProps {
  bookings: typeof mockBookings;
  onViewLicense: (licenseUrl: string) => void;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

const BookingsTable: React.FC<BookingsTableProps> = ({ 
  bookings, 
  onViewLicense,
  onApprove,
  onReject
}) => {
  return (
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
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.client}</TableCell>
                <TableCell>{booking.car}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">From</span>
                    <span>{format(parseISO(booking.startDate), "MMM d, yyyy")}</span>
                    <span className="text-xs text-gray-500 mt-1">To</span>
                    <span>{format(parseISO(booking.endDate), "MMM d, yyyy")}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`${
                    booking.type === "WhatsApp" 
                      ? "bg-green-100 text-green-800 hover:bg-green-200" 
                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  }`}>
                    {booking.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  {booking.licenseUploaded ? (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onViewLicense(booking.licenseUrl || "")}
                    >
                      <Eye className="mr-2 h-4 w-4" />
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
                  <Badge className={`${
                    booking.status === "Approved" 
                      ? "bg-green-100 text-green-800 hover:bg-green-200" 
                      : booking.status === "Rejected"
                      ? "bg-red-100 text-red-800 hover:bg-red-200"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  }`}>
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {booking.status === "Pending" && (
                      <>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="text-green-600 hover:text-green-800 hover:bg-green-100"
                          onClick={() => onApprove(booking.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="text-red-600 hover:text-red-800 hover:bg-red-100"
                          onClick={() => onReject(booking.id)}
                        >
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No bookings found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Bookings;
