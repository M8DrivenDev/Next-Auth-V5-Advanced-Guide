import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButtonWrapper from "@/components/auth/loginButtonWrapper";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#1f002b] via-[#3d0066] to-[#2c004c]">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButtonWrapper>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButtonWrapper>
        </div>
      </div>
    </main>
  );
}
