"use client"

import { useSession } from "next-auth/react";
import Appbar from "../../components/Appbar.tsx";

const Page = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="w-screen h-screen bg-gray-950 text-white">
        <Appbar session={session} />
        <div className="mt-5 ">
          <center><h1>Register company</h1></center>

        </div>
      </div>
    </>
  )
}

export default Page;
