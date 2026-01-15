import CollaborationCard from "../components/CollaborationCard"
import TopUsers from "../components/TopUsers"

export default function TeacherPagesLayout( { children }) {

    return(
        <div className="container-xl lg:container m-auto py-7">
          <div className="grid grid-cols-12">

            <div className="col-span-9">
                { children }
            </div>
    
            {/* Right Side Panel */}
            <div className="col-span-3 flex flex-col items-center px-4 gap-6">
                <TopUsers/>
                <CollaborationCard/>
            </div>
          </div>
          

        </div>
      )
}