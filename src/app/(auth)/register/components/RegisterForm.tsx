"use client";
import { Button } from "@/components/ui/button";
import TextInput from "@/src/common/TextInput";
import { cn } from "@/src/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { GalleryVerticalEnd } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    email: yup.string().email().required("Email address is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="bg-primary p-4 rounded-full">
          <GalleryVerticalEnd className="size-9 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Register to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                lableClassName="text-base"
                error={errors.firstName?.message}
                className={cn(
                  errors.firstName?.message ? "border border-red-500" : ""
                )}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                lableClassName="text-base"
                error={errors.lastName?.message}
                className={cn(
                  errors.lastName?.message ? "border border-red-500" : ""
                )}
              />
            )}
          />
        </div>
        <div className="grid gap-2">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Email"
                type="text"
                placeholder="Enter email"
                lableClassName="text-base"
                error={errors.email?.message}
                className={cn(
                  errors.email?.message ? "border border-red-500" : ""
                )}
              />
            )}
          />
        </div>
        <div className="grid gap-2">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Password"
                type="password"
                placeholder="Enter password"
                lableClassName="text-base"
                error={errors.password?.message}
                className={cn(
                  errors.password?.message ? "border border-red-500" : ""
                )}
              />
            )}
          />
          <div className="flex items-center">
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-base">
        Already have an account?{" "}
        <a
          href="/login"
          className="underline underline-offset-4 text-primary font-semibold hover:text-primary-dark transition"
        >
          Sign In
        </a>
      </div>
    </form>
  );
}
