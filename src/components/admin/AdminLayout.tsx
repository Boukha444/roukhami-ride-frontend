
import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Car, 
  Bell, 
  Search, 
  User, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const location = useLocation();
  const [notifications] = useState([
    { id: 1, text: "New booking request from Sophie Martin", time: "5 minutes ago" },
    { id: 2, text: "Driver's license uploaded by Martin Dupont", time: "1 hour ago" },
    { id: 3, text: "Booking approved for Lucas Petit", time: "3 hours ago" },
  ]);

  const navigationItems = [
    { 
      title: "Dashboard", 
      icon: LayoutDashboard, 
      path: "/admin" 
    },
    { 
      title: "Cars", 
      icon: Car, 
      path: "/admin/cars" 
    },
    { 
      title: "Bookings", 
      icon: Calendar, 
      path: "/admin/bookings" 
    },
    { 
      title: "Customers", 
      icon: Users, 
      path: "/admin/customers" 
    },
    { 
      title: "Documents", 
      icon: FileText, 
      path: "/admin/documents" 
    },
    { 
      title: "Settings", 
      icon: Settings, 
      path: "/admin/settings" 
    },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full bg-background">
        <Sidebar
          collapsible="icon"
          className="border-r border-border bg-background shadow-sm z-50"
        >
          <SidebarHeader className="flex items-center justify-between px-4 py-3 bg-background">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-roukhami-blue" />
              <span className="font-bold text-lg">ROUKHAMI CAR</span>
            </div>
            <SidebarToggleButton />
          </SidebarHeader>
          <SidebarContent className="px-2 py-2 bg-background">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                    className={cn(
                      "transition-all duration-200 hover:bg-muted",
                      location.pathname === item.path && "bg-muted font-medium"
                    )}
                  >
                    <Link to={item.path} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className={cn(
                        "h-5 w-5",
                        location.pathname === item.path ? "text-roukhami-blue" : "text-muted-foreground"
                      )} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto p-4 border-t border-border bg-background">
            <p className="text-xs text-center text-muted-foreground">
              © 2023 ROUKHAMI CAR Admin
            </p>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top Navbar */}
          <header className="flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="md:hidden" />
            
            <div className="flex-1 flex items-center gap-2 md:gap-4">
              <form className="flex-1 hidden md:flex max-w-sm">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 bg-background"
                  />
                </div>
              </form>
            </div>
            
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-red-600"></span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="p-4 border-b">
                    <p className="font-medium">Notifications</p>
                  </div>
                  <div className="max-h-80 overflow-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b last:border-0 hover:bg-muted/50 transition-colors">
                        <p className="text-sm">{notification.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/" className="w-full">Back to Website</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-4 lg:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

// New SidebarToggleButton component to handle the toggle functionality
const SidebarToggleButton = () => {
  const { toggleSidebar, state } = useSidebar();
  const isExpanded = state === "expanded";
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSidebar}
      className="transition-all duration-300 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted"
      aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
    >
      {isExpanded ? (
        <ChevronLeft className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <ChevronRight className="h-5 w-5 transition-transform duration-300" />
      )}
    </Button>
  );
};

export default AdminLayout;
