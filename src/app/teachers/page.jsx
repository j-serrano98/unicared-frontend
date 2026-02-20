import fetcher from "../lib/api/fetcher";
import TeachersList from "../components/TeachersList";

export default async function ProfesoresPage() {
    const teachersData = await fetcher(`teachers/`);

  return(
      <section className="p-4 overflow-hidden">

        {/* Left Side Panel */}
        {/* <FilterSideBar teachers={teachersData}/> */}
        <TeachersList teachers={teachersData}/>

        {/* Main Panel */}
       

      </section>
  )
}