"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

// Define a type for the content keys
type ContentKeys = "profile" | "returns" | "cancellations" | "wishlist";

const sidebarItems = [
  { id: "profile", label: "My Profile" },
  { id: "address", label: "Address Book" },
  { id: "payment", label: "My Payment Options" },
  { id: "returns", label: "My Returns" },
  { id: "cancellations", label: "My Cancellations" },
  { id: "wishlist", label: "My Wishlist" },
];

const contentData: Record<ContentKeys, JSX.Element> = {
  profile: (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Your Profile</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Bryan Cranston" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input id="mobile" placeholder="+1 424-236-3574" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="thejon1" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Hawthorne" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Select defaultValue="CA">
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="zip">ZIP</Label>
        <Input id="zip" placeholder="90250" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="4736 Libby Street" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address line 2</Label>
        <Input id="address" placeholder="4736 Libby Street" />
      </div>
      <div className="flex justify-end gap-5">
        <Button className="bg-white text-black">Cancel</Button>
        <Button className=" py-3 text-white bg-primary rounded-md">
          Save Changes
        </Button>
      </div>
    </div>
  ),
  returns: <div>My Returns Content</div>,
  cancellations: <div>My Cancellations Content</div>,
  wishlist: <div>My Wishlist Content</div>,
};

export default function AccountPage() {
  // Use the ContentKeys type for activeItem
  const [activeItem, setActiveItem] = useState<ContentKeys>("profile");

  return (
    <div className="container mx-auto flex min-h-screen px-8 py-8">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-200 pr-4">
        <nav className="space-y-4">
          <h2 className="text-2xl font-bold font-serif leading-[1.1] md:text-2xl">
            Manage My Account
          </h2>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id as ContentKeys)}
              className={`block w-full text-left px-4 py-2 ${
                activeItem === item.id
                  ? "bg-primary text-white"
                  : "text-gray-700"
              } rounded-md hover:bg-primary hover:text-white`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="w-3/4 pl-8">
        <div className="bg-white p-8 rounded-lg shadow">
          {contentData[activeItem]}
        </div>
      </div>
    </div>
  );
}
