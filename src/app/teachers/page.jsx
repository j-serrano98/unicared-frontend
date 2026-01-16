import fetcher from "../lib/api/fetcher";
import TeachersList from "../components/TeachersList";

export default async function TeachersPage() {
    const teachersData = await fetcher(`teachers/`);

  return(
      <section className="px-2 overflow-auto">

        {/* Left Side Panel */}
        {/* <FilterSideBar teachers={teachersData}/> */}
        <TeachersList teachers={teachersData}/>

        {/* Main Panel */}
       

      </section>
  )
}