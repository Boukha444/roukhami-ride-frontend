
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import AdminHeader from "./AdminHeader";

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
            <div className="flex items-center">
              <Car className="h-6 w-6 text-roukhami-blue" />
              <span className="font-bold text-lg md:hidden ml-2">ROUKHAMI CAR</span>
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
          <AdminHeader notifications={notifications} />

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-4 lg:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

// SidebarToggleButton component to handle the toggle functionality
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
