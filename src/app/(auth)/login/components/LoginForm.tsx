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
    email: yup.string().email().required("Email address is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function LoginForm({
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
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
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
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="underline underline-offset-4 text-primary font-semibold"
        >
          Sign up
        </a>
      </div>
    </form>
  );
}
