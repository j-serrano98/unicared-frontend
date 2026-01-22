import CollaborationCard from "../components/info-cards/Collaboration"
import AddTeacherRequest from "../components/info-cards/AddTeacherRequest"
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
              <div className="pb-6">
                <CollaborationCard/>
              </div>
                <AddTeacherRequest/>
            </div>
          </div>
          
        </div>
      )
}