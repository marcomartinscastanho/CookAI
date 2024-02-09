import React from "react";
import { UserButton, currentUser, auth } from "@clerk/nextjs";

const MemberProfile = async () => {
  const user = await currentUser();

  if (user) {
    return (
      <div className="px-4 flex items-center gap-2 overflow-hidden">
        <UserButton afterSignOutUrl="/" />
        <p>{user.emailAddresses[0].emailAddress}</p>
      </div>
    );
  }
};

export default MemberProfile;
