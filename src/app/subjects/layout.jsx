import CollaborationCard from "../components/info-cards/Collaboration"
import AddTeacherRequest from "../components/info-cards/AddTeacherRequest"
import TopUsers from "../components/TopUsers"

export const metadata = {
  title: "Materias"
}

export default function SubjectsPagesLayout( { children }) {

    return(

            <div className="w-full">
                { children }
            </div>
      )
}