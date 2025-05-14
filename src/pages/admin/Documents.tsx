
import React from "react";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye, Download, Trash2 } from "lucide-react";

// Mock documents data
const documents = [
  {
    id: 1,
    clientName: "Martin Dupont",
    carBooked: "Dacia Logan",
    uploadDate: "10/05/2023",
    imageUrl: "https://placehold.co/600x400/png"
  },
  {
    id: 2,
    clientName: "Sophie Martin",
    carBooked: "Renault Clio",
    uploadDate: "16/05/2023",
    imageUrl: "https://placehold.co/600x400/png"
  },
  {
    id: 3,
    clientName: "Emma Rodriguez",
    carBooked: "Citroen C3",
    uploadDate: "08/06/2023",
    imageUrl: "https://placehold.co/600x400/png"
  },
  {
    id: 4,
    clientName: "Thomas Lefebvre",
    carBooked: "Volkswagen Golf",
    uploadDate: "12/06/2023",
    imageUrl: "https://placehold.co/600x400/png"
  }
];

const Documents = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documents.map((document) => (
          <Card key={document.id}>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{document.clientName}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <AspectRatio ratio={4/3} className="bg-muted rounded-md overflow-hidden">
                <img
                  src={document.imageUrl}
                  alt={`License for ${document.clientName}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Car:</span>
                  <span className="font-medium">{document.carBooked}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span className="font-medium">{document.uploadDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Documents;
