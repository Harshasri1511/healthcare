"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // keep using the standard useRouter
import Image from "next/image";

export default function Nav() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true); // Ensure useRouter is only used after mounting
    }, []);

    const handleLogout = () => {
        router.push('/Router');
    };

    if (!mounted) return null;  // Prevent rendering until the component has mounted

    return (
        <div>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex flex-row items-center gap-3">
                        <Image src="/logo.png" width={50} height={10} alt="Wellness 360 logo" />
                        <h1 className="text-2xl font-bold text-gray-800">Wellness 360</h1>
                    </div>

                    <div className="flex flex-row gap-4">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            onClick={() => { router.push('/Report') }}
                        >
                            + Report
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}
