import DetailsHeader from "@/app/components/DetailsHeader";
import ReviewList from "@/app/components/ReviewList";
import Charts from "@/app/components/Charts";
import GoBackButton from "@/app/components/GoBackButton";
import fetcher from "@/app/lib/api/fetcher";

export default async function TeacherPage({ params }) {
    const { teacherId } = await params;

    const teacherData = await fetcher(`teachers/${teacherId}/`, {
        cache: 'no-store',
    });
    
    return (
        <section>
            <div className="grid grid-cols-12 gap-6">
                <aside className="bg-gray-900 col-span-4 flex flex-col  text-white rounded-2xl justify-between">
                    <DetailsHeader teacherData={teacherData}/>
                    <Charts className="m-1" teacherData={teacherData}/>
                </aside>
                <div className="bg-gray-900 col-span-8 flex flex-col rounded-2xl">
                    <ReviewList id={teacherData.id} teacherData={teacherData}/>
                </div>
            </div>
            <div className="flex justify-end">
                <GoBackButton/>
            </div>
        </section>
    )
} 