import { Card,CardContent } from "@/components/ui/cards";
import { BarChart, LineChart, HeartPulse } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Healthcare Dashboard</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Logout
          </button>
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
                <p className="text-sm font-medium                text-gray-800">190 mg/dL</p>
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

        {/* Upcoming Appointments Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-gray-800 font-medium">Dr. Robert</p>
                  <p className="text-sm text-gray-500">Feb 1, 2025 - 10:30 AM</p>
                </div>
                <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-medium">Dr. Emily</p>
                  <p className="text-sm text-gray-500">Feb 5, 2025 - 3:00 PM</p>
                </div>
                <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

