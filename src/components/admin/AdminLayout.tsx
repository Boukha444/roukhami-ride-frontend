
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
import { Car, Bell, Search, User, Settings, LayoutDashboard, Calendar, Users, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const AdminLayout = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [notifications] = useState([
    { id: 1, text: "New booking request from Sophie Martin", time: "5 minutes ago" },
    { id: 2, text: "Driver's license uploaded by Martin Dupont", time: "1 hour ago" },
    { id: 3, text: "Booking approved for Lucas Petit", time: "3 hours ago" },
  ]);

  // Track the current theme
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();

    // Create a mutation observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkTheme();
        }
      });
    });

    // Start observing the document element for class changes
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
        <Sidebar>
          <SidebarHeader className="flex items-center gap-2 px-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="font-bold text-lg">ROUKHAMI CAR</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                  >
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <p className="text-xs text-center text-muted-foreground">
              © 2023 ROUKHAMI CAR Admin
            </p>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top Navbar - with dynamic blue background based on theme */}
          <header className={`flex h-14 items-center gap-4 px-4 lg:px-6 transition-colors duration-200 ${
            isDarkMode 
              ? "bg-blue-900 text-white border-b border-blue-800" 
              : "bg-blue-600 text-white border-b border-blue-500"
          }`}>
            <SidebarTrigger className="text-white" />
            
            <div className="flex-1 flex items-center gap-2 md:gap-4">
              <form className="flex-1 hidden md:flex max-w-sm">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/70" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 bg-white/10 border-white/20 placeholder:text-white/70 text-white focus-visible:ring-white/30"
                  />
                </div>
              </form>
            </div>
            
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="p-4 border-b">
                    <p className="font-medium">Notifications</p>
                  </div>
                  <div className="max-h-80 overflow-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b last:border-0">
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
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
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
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
