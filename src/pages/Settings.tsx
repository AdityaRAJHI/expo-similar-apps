
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, User, Bell, Shield, Moon, 
  HelpCircle, LogOut, ChevronRight, Smartphone
} from 'lucide-react';
import MobileLayout from '@/components/MobileLayout';
import StatusBar from '@/components/StatusBar';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const settingsSections = [
  {
    title: "General",
    items: [
      { icon: <User size={20} />, label: "Account", link: "#" },
      { icon: <Bell size={20} />, label: "Notifications", link: "#" },
      { icon: <Smartphone size={20} />, label: "Appearance", link: "#" }
    ]
  },
  {
    title: "Security",
    items: [
      { icon: <Shield size={20} />, label: "Privacy", link: "#" },
      { icon: <Moon size={20} />, label: "Dark Mode", link: "#", toggle: true }
    ]
  },
  {
    title: "Support",
    items: [
      { icon: <HelpCircle size={20} />, label: "Help Center", link: "#" },
      { icon: <LogOut size={20} />, label: "Sign Out", link: "#", danger: true }
    ]
  }
];

const Settings = () => {
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/42.jpg");
  const { toast } = useToast();

  const handleProfileUpdate = (newImage: string) => {
    setProfileImage(newImage);
    setProfileDialogOpen(false);
    toast({
      title: "Profile Updated",
      description: "Your profile picture has been updated successfully.",
    });
  };

  return (
    <MobileLayout>
      <div className="p-4 pb-20">
        <StatusBar darkIcons={true} />
        
        <div className="flex items-center mb-6">
          <SettingsIcon className="mr-2 text-crypto-blue" size={24} />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        
        <div className="bg-white rounded-lg border p-4 mb-6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 border-2 border-crypto-blue cursor-pointer" onClick={() => setProfileDialogOpen(true)}>
              <AvatarImage src={profileImage} alt="User profile" />
              <AvatarFallback>NJ</AvatarFallback>
            </Avatar>
            
            <div className="ml-4">
              <h2 className="font-medium text-lg">Nora Johnson</h2>
              <p className="text-sm text-gray-500">nora.johnson@example.com</p>
              <button 
                className="text-crypto-blue text-sm mt-1"
                onClick={() => setProfileDialogOpen(true)}
              >
                Change profile picture
              </button>
            </div>
          </div>
        </div>
        
        {settingsSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
            <div className="bg-white rounded-lg border overflow-hidden">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className={`flex items-center justify-between p-4 border-b last:border-b-0 ${item.danger ? 'text-red-500' : ''}`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  
                  {item.toggle ? (
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                      <span className="absolute h-4 w-4 rounded-full bg-white transition-all left-1"></span>
                    </div>
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <Dialog open={profileDialogOpen} onOpenChange={setProfileDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Profile Picture</DialogTitle>
              <DialogDescription>
                Choose a new profile picture from our selection
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                "https://randomuser.me/api/portraits/women/42.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/36.jpg",
                "https://randomuser.me/api/portraits/men/79.jpg"
              ].map((image, index) => (
                <Avatar 
                  key={index} 
                  className="h-20 w-20 mx-auto cursor-pointer hover:scale-105 transition-transform border-2 border-transparent hover:border-crypto-blue"
                  onClick={() => handleProfileUpdate(image)}
                >
                  <AvatarImage src={image} alt={`Profile option ${index}`} />
                </Avatar>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </MobileLayout>
  );
};

export default Settings;
