"use client"

import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
    } else {
      router.push("/Login");
    }
  }, [session, router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-950 text-white min-w-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-6 text-center text-gray-300">Enter Your Information</h2>
        <InputField type="text" label="Name" value={name} onChange={(e: any) => setName(e.target.value)} disabled={true} />
        <InputField type="text" label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)} disabled={true} />
        <InputField type="date" label="Date of Birth" value={dob} onChange={(e: any) => setDob(e.target.value)} disabled={false} />
        <InputField type="tel" label="Phone Number" value={phoneNumber} onChange={(e: any) => setPhoneNumber(e.target.value)} disabled={false} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none mt-4 w-full">Submit</button>
      </div>
    </div>
  );
};

export default Page;



