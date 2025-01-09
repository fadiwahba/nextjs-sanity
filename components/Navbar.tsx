import { auth, signIn, signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  const displayUserProfile = () => {
    if (session?.user) {
      return (
        <div className="flex items-center gap-1">
          <div className="flex flex-col items-end">
            <div className="text-xs">Logged in as </div>
            <div className="font-bold text-xs">{session?.user?.name}</div>
          </div>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name as string}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      );
    }
  };

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo_trans.png"
            alt="Startup Directory"
            width={250}
            height={40}
          ></Image>
        </Link>
        <div className="flex items-center gap-3">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-purple-500 hover:bg-purple-50 p-3 rounded-md transition-colors"
              >
                <span>Create</span>
              </Link>
              <Link
                href={`/profile`}
                className="text-purple-500 hover:bg-purple-50 p-3 rounded-md transition-colors"
              >
                {displayUserProfile()}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="text-purple-500 hover:bg-purple-50 p-3 rounded-md transition-colors"
                >
                  <LogOutIcon className="size-6 m-0" />
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-purple-500 hover:underline">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
