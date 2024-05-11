"use client"

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Appbar from "./components/Appbar.tsx";

const Page = () => {
  const router = useRouter()
  const {data: session} = useSession()

  const registerCompany = () => {
    router.push("/register/company")
  }

  const joinCompany = () => {
    router.push("/join/company")
  }

  return (
    <>
        <div className="w-screen h-screen bg-gray-950 text-white">
          <Appbar session={session}/>

          <div className="flex justify-center gap-20 mt-10">
            <button
              onClick={registerCompany}
              className="px-2 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Register Your Company
            </button>
            <button
              onClick={joinCompany}
              className="px-2 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Join a company
            </button>
          </div>

        </div>
    </>
  );
}

export default Page;