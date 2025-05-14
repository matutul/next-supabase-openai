import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkMode";

const Header = () => {
  const user = null;
  return (
    <header
      className="relative h-16 w-full flex items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          height={50}
          width={50}
          alt="logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-xl font-semibold leading-6">
          NEXT <span>SUPA</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          "Logout"
        ) : (
          <>
            <Button asChild>
              <Link href={"/signup"} className="hidden sm:block">Sign up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        )}
        <ModeToggle/>
      </div>
    </header>
  );
};

export default Header;
