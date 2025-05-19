
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

interface Admin {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  admin: Admin | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create a context with default values
const AuthContext = createContext<AuthContextType>({
  admin: null,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

// Mock admin data for demo purposes
// In a real application, this would come from your backend
const MOCK_ADMIN = {
  id: "1",
  email: "admin@roukhami.com",
  name: "Admin User",
};

// Mock admin credentials
const MOCK_CREDENTIALS = {
  email: "admin@roukhami.com",
  password: "admin123",
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const checkAuthentication = () => {
      const storedAdmin = localStorage.getItem("admin");
      if (storedAdmin) {
        try {
          setAdmin(JSON.parse(storedAdmin));
        } catch (error) {
          localStorage.removeItem("admin");
        }
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
          setAdmin(MOCK_ADMIN);
          localStorage.setItem("admin", JSON.stringify(MOCK_ADMIN));
          toast({
            title: "Login successful",
            description: "Welcome back to the admin dashboard",
          });
          resolve(true);
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password",
            variant: "destructive",
          });
          resolve(false);
        }
        setIsLoading(false);
      }, 1000); // Simulate network delay
    });
  };

  // Logout function
  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        isLoading,
        login,
        logout,
        isAuthenticated: !!admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);
