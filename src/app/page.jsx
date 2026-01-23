import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import TopTeachers from "./components/TopTeachers";
import fetcher from "./lib/api/fetcher";


export default async function Home() {

    const teachersData = await fetcher("teachers/")

  return (
    <div className={`flex flex-col ${teachersData.error ? "" : "justify-between"} h-full m-auto font-sans`}>
        <Hero />
        <HomeCards />
        {teachersData.error ? "" : <TopTeachers data={teachersData}/>}
        
    </div>
  );
}
