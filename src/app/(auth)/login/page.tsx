import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-white">
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/assets/auth/login.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-contain bg-white"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 ">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
