import DetailsHeader from "@/app/components/DetailsHeader";
import ReviewList from "@/app/components/ReviewList";
import Charts from "@/app/components/Charts";
import GoBackButton from "@/app/components/GoBackButton";
import fetcher from "@/app/lib/api/fetcher";

export async function generateMetadata({ params }) {
    const { teacherSlug } = await params;

    const teacherData = await fetcher(`teachers/${teacherSlug}/`, {
        cache: 'no-store',
    });

    if (!teacherData) return { title: "Profesor no encontrado" };

    return {
        title: `${teacherData.name} | Perfil y Reseñas`,
        description: `Lee lo que otros estudiantes dicen sobre ${teacherData.name} en UnicaRed. Consulta su metodología y nivel de dificultad.`,
    };
}


export default async function TeacherPage({ params }) {
    const { teacherSlug } = await params;

    const teacherData = await fetcher(`teachers/${teacherSlug}/`, {
        cache: 'no-store',
    });
    
    return (
        <section className="px-4 md:px-0">
            <div className="flex-column md:flex gap-5">
                <aside className="bg-gray-900 md:col-span-4 text-white rounded-2xl justify-between">
                    <DetailsHeader teacherData={teacherData}/>
                    <Charts className="m-1" teacherData={teacherData}/>
                </aside>

                <div className="flex md:hidden justify-end">
                    <GoBackButton/>
                </div>
                
                <div className="bg-gray-900 rounded-2xl">
                    <ReviewList id={teacherData.id} teacherData={teacherData}/>
                </div>
            </div>
            <div className="hidden md:block flex justify-end">
                <GoBackButton/>
            </div>
        </section>
    )
} 