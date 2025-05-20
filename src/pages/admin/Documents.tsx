
import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock documents data
const documents = [
  {
    id: 1,
    clientName: "Martin Dupont",
    carBooked: "Dacia Logan",
    uploadDate: "10/05/2023",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    clientName: "Sophie Martin",
    carBooked: "Renault Clio",
    uploadDate: "16/05/2023",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    clientName: "Emma Rodriguez",
    carBooked: "Citroen C3",
    uploadDate: "08/06/2023",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
  },
  {
    id: 4,
    clientName: "Thomas Lefebvre",
    carBooked: "Volkswagen Golf",
    uploadDate: "12/06/2023",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop"
  }
];

// Document type definition
interface Document {
  id: number;
  clientName: string;
  carBooked: string;
  uploadDate: string;
  imageUrl: string;
}

const Documents = () => {
  const [documentList, setDocumentList] = useState<Document[]>(documents);
  const [viewDocument, setViewDocument] = useState<Document | null>(null);
  const [documentToDelete, setDocumentToDelete] = useState<Document | null>(null);
  const { toast } = useToast();

  // Handle document view
  const handleViewDocument = (document: Document) => {
    setViewDocument(document);
  };

  // Handle document download
  const handleDownload = (document: Document) => {
    // In a real app, this would trigger a download from Supabase Storage or API
    toast({
      title: "Document Downloaded",
      description: `License for ${document.clientName} has been downloaded.`,
    });
  };

  // Handle document deletion confirmation
  const handleDeleteConfirm = (document: Document) => {
    setDocumentToDelete(document);
  };

  // Handle document deletion
  const handleDelete = () => {
    if (documentToDelete) {
      // Remove document from list (in real app, this would call Supabase)
      setDocumentList(documentList.filter(doc => doc.id !== documentToDelete.id));
      
      // Show success toast
      toast({
        title: "Document Deleted",
        description: `License for ${documentToDelete.clientName} has been removed.`,
      });
      
      // Reset the document to delete
      setDocumentToDelete(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      
      {documentList.length === 0 ? (
        <div className="text-center p-12 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-2">No Documents Available</h3>
          <p className="text-muted-foreground">
            All uploaded license documents will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documentList.map((document) => (
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleViewDocument(document)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleDownload(document)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleDeleteConfirm(document)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* View Document Dialog */}
      <Dialog open={viewDocument !== null} onOpenChange={(open) => !open && setViewDocument(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>License Document</DialogTitle>
            <DialogDescription>
              {viewDocument?.clientName}'s driver license for {viewDocument?.carBooked} booking.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md">
              {viewDocument && (
                <img
                  src={viewDocument.imageUrl}
                  alt={`License for ${viewDocument.clientName}`}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-muted-foreground">Client</p>
                <p>{viewDocument?.clientName}</p>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">Car Booked</p>
                <p>{viewDocument?.carBooked}</p>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">Upload Date</p>
                <p>{viewDocument?.uploadDate}</p>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">Document ID</p>
                <p>#{viewDocument?.id}</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={() => viewDocument && handleDownload(viewDocument)}
              variant="default"
            >
              <Download className="mr-2 h-4 w-4" /> Download License
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={documentToDelete !== null} onOpenChange={(open) => !open && setDocumentToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this document?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove {documentToDelete?.clientName}'s license document from the system.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Documents;
