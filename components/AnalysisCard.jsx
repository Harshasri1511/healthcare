import Image from "next/image"

export default function AnalysisCard( {report,logo}){
    return(
    <div className="flex flex-row gap-5 lg:w-[48%] bg-white shadow-md rounded-lg p-5 w-full">
        <div className="flex flex-row">
          <Image width = {200} height={10} src = {logo} alt = "Blood test image" className="rounded-full w-full"/>         
        </div>
        <div className="flex flex-col w-full relative">
                <h1 className="text-black font-semibold">Check Your {report}</h1>
                <p className="text-black ">Analyse your {report} by Clicking down the "Analyse" button</p>
                <div className="flex w-full justify-end mt-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 btn items-end">
                        Analyse
                    </button>
                </div>
                
            </div> 
        
    </div>)
}
