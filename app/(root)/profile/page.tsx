import { auth } from "@/auth";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Profile = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <>
      <section className="section_container">
        <h1 className="text-[36px] text-white bg-black px-6 py-3 text-xl font-extrabold">
          My Profile
        </h1>

        <Card className="mt-8">
          <CardContent>
            <div className="flex justify-start gap-8 my-4">
              <div>
                <div className="flex justify-start gap-8 my-4">
                  <div className="text-gray-600">Name</div>
                  <div className="text-gray-900 font-bold">
                    {session?.user?.name}
                  </div>
                </div>
                <div className="flex justify-start gap-8 my-4">
                  <div className="text-gray-600">Email</div>
                  <div className="text-gray-900 font-bold">
                    {session?.user?.email}
                  </div>
                </div>
              </div>
              <Image
                src={session?.user?.image || "/default-profile.png"}
                alt={session?.user?.name || "user"}
                width={100}
                height={100}
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Profile;
