import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  const displayUserProfile = () => {
    if (session?.user?.image) {
      return (
        <Image
          src={session?.user?.image}
          alt={session?.user?.name as string}
          width={40}
          height={40}
          className="rounded-full"
        ></Image>
      );
    } else {
      return <span>{session?.user?.name}</span>;
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
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-indigo-500 hover:underline"
              >
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="text-indigo-500 hover:underline"
                >
                  <span>Logout</span>
                </button>
              </form>
              <Link
                // href={`/user/${session?.id}`}
                href={`/profile`}
                className="text-indigo-500 hover:underline"
              >
                {displayUserProfile()}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-indigo-500 hover:underline">
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
