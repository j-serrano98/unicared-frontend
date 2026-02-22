import publicFetcher from "../lib/api/publicFetcher";
import TeachersList from "../components/TeachersList";

export default async function ProfesoresPage() {
    const teachersData = await publicFetcher(`teachers/`);

  return(
      <section className="p-4 overflow-hidden">

        {/* Left Side Panel */}
        {/* <FilterSideBar teachers={teachersData}/> */}
        <TeachersList teachers={teachersData}/>

        {/* Main Panel */}
       

      </section>
  )
}