import { RegisterForm } from "./components/RegisterForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/assets/auth/register.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 ">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
