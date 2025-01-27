import  AnalysisCard  from "@/components/AnalysisCard";
import { Card,CardContent } from "@/components/ui/cards";
import { BarChart, LineChart, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {

    const logged = true;

  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex items-center space-x-4">
              <HeartPulse className="text-red-500 w-8 h-8" />
              <div>
                <p className="text-sm font-medium text-gray-500">Heart Rate</p>
                <p className="text-xl font-bold text-gray-800">75 bpm</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4">
              <BarChart className="text-blue-500 w-8 h-8" />
              <div>
                <p className="text-sm font-medium text-gray-500">Blood Pressure</p>
                <p className="text-xl font-bold text-gray-800">120/80</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4">
              <LineChart className="text-green-500 w-8 h-8" />
              <div>
                <p className="text-sm font-medium text-gray-800">190 mg/dL</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Trends Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Health Trends</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-500">Here, you can display graphs or charts using a library like <strong>Chart.js</strong>, <strong>Recharts</strong>, or <strong>Victory</strong>.</p>
          </div>
        </section>
        
        <h1 className="font-bold text-black text-xl mt-4">Gain insights into your health</h1>
        
        {/* Analysis Section */}
        <section className="flex flex-col md:flex-row justify-between flex-wrap mt-4 gap-5">
          <AnalysisCard logo="/blood.jpg" report="Blood Report" />
          <AnalysisCard logo="/blood.jpg" report="Blood Pressure Report" />
          <AnalysisCard logo="/blood.jpg" report="Blood Sugar Report" />
          <AnalysisCard logo="/blood.jpg" report="BMI" />
          <AnalysisCard logo="/blood.jpg" report="Temperature" />
        </section>

        

      </main>
    </div>
  );
}

