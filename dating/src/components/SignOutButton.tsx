"use client";

import { Button } from "@heroui/react";
import { signOutUser } from "@/app/actions/authAction";

export default function SignOutButton() {
  return (
    <Button
      onPress={() => signOutUser()}
      className="bg-red-500 text-white px-4 py-2 rounded">
      Sign Out
    </Button>
  );
}
