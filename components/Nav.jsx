import Image from "next/image";


export default function Nav(){

    const logged = true;

    return(
        <div>
            {/* Header */}
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4    py-4 flex justify-between items-center">
            <div className="flex flex-row items-center gap-3">
            <Image src="/logo.png" width={50} height={10} alt="logo image" />
            <h1 className="text-2xl font-bold text-gray-800">Wellness 360</h1>
            </div>


            {logged ?  
            <div className="flex flex-row gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                + Report
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Logout
                </button>
                
            </div>

            :
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Login
                </button>
            }
            </div>
        </header>
        </div>
    );
}