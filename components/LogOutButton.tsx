"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { resolve } from "path";
import { toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { logOutAction } from "@/actions/users";

const LogOutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("You have been successfully logged out");
      router.push("/");
    } else {
      toast.error(errorMessage);
    }
    setLoading(false);
  };
  return (
    <Button variant="outline" onClick={handleLogOut}>
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
};

export default LogOutButton;
