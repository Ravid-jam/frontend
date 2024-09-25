import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Props = {
  open?: boolean;
  handleOpen: () => void;
};

export default function MainMobileNav({ handleOpen, open }: Props) {
  return (
    <Sheet open={open} onOpenChange={handleOpen}>
      <SheetContent side={"left"} className="w-[250px] sm:w-[250px]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
