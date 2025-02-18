"use client";
import { useState } from "react";
import Profile from "./components/Profile";
import { Menu, X } from "lucide-react"; // Icons for toggle button

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
  profile: <Profile />,
  returns: <div>My Returns Content</div>,
  cancellations: <div>My Cancellations Content</div>,
  wishlist: <div>My Wishlist Content</div>,
};

export default function AccountPage() {
  const [activeItem, setActiveItem] = useState<ContentKeys>("profile");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row h-[800px] px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between lg:hidden mb-4">
        <h2 className="text-xl font-bold">Manage My Account</h2>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white  p-4 transition-transform ${
          isSidebarOpen ? "translate-x-0 shadow-lg" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-1/5 lg:border-r lg:border-l border-gray-200`}
      >
        <nav className="space-y-4">
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-bold">Manage My Account</h2>
            <button onClick={() => setSidebarOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          <h2 className="text-xl font-bold hidden lg:block">
            Manage My Account
          </h2>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id as ContentKeys);
                setSidebarOpen(false); // Close sidebar after clicking (on mobile)
              }}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                activeItem === item.id
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 lg:pl-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
          {contentData[activeItem]}
        </div>
      </div>
    </div>
  );
}
