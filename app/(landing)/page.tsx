import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>

        <Link href="/sign-un">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
