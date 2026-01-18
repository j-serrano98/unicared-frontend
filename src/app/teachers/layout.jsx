import CollaborationCard from "../components/CollaborationCard"
import TopUsers from "../components/TopUsers"

export default function TeacherPagesLayout( { children }) {

    return(
        <div className="container-xl lg:container m-auto py-7">
          <div className="flex flex-column">

            <div className="col-span-9 w-full">
                { children }
            </div>
    
            {/* Right Side Panel */}
            <div className="hidden md:block col-span-3 flex flex-col items-center px-4 gap-6">
                <TopUsers/>
                <CollaborationCard/>
            </div>
          </div>
          
        </div>
      )
}