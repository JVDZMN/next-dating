import React from "react";
import TopNavbarClient from "./TopNavbarClient";
import { auth } from "@/auth";

export default async function TopNavbar() {
    const session = await auth();
    return (
        <TopNavbarClient user={session?.user}   />
    );
}
