
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Car, Calendar, Users, FileText } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

// Helper function to format number changes with appropriate color
const formatNumberChange = (value: string | number) => {
  const valueStr = value.toString();
  const isPositive = valueStr.startsWith("+");
  const isNegative = valueStr.startsWith("-");
  
  if (isPositive) {
    return <span className="text-green-600">{valueStr}</span>;
  } else if (isNegative) {
    return <span className="text-red-600">{valueStr}</span>;
  }
  
  return valueStr;
};

const Dashboard = () => {
  // Mock data for the chart
  const bookingData = [
    { name: "Mon", whatsapp: 4, direct: 2 },
    { name: "Tue", whatsapp: 3, direct: 1 },
    { name: "Wed", whatsapp: 5, direct: 3 },
    { name: "Thu", whatsapp: 2, direct: 4 },
    { name: "Fri", whatsapp: 6, direct: 2 },
    { name: "Sat", whatsapp: 8, direct: 5 },
    { name: "Sun", whatsapp: 7, direct: 4 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fleet</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              {formatNumberChange("+2")} added this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Currently Rented</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              50% of fleet in use
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookings Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              {formatNumberChange("+2")} from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Booking Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Booking Sources</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ChartContainer
            config={{
              whatsapp: { color: "#25D366" },
              direct: { color: "#4F46E5" }
            }} 
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingData}>
                <Bar
                  dataKey="whatsapp"
                  name="WhatsApp"
                  fill="var(--color-whatsapp, #25D366)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="direct"
                  name="Direct"
                  fill="var(--color-direct, #4F46E5)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
