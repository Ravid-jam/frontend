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
export default function Profile() {
  return (
    <div>
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
    </div>
  );
}
