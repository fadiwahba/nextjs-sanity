import { auth } from "@/auth";
import React from "react";

const Profile = async () => {
  const session = await auth();
  return (
    <>
      <h1 className="text-2xl">My Profile</h1>
      <div className="flex justify-start gap-5">
        <div className="text-gray-600">Name</div>
        <div className="text-gray-900">{session?.user?.name}</div>
      </div>
    </>
  );
};

export default Profile;
