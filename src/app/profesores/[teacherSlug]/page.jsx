import DetailsHeader from "@/app/components/DetailsHeader";
import ReviewList from "@/app/components/ReviewList";
import Charts from "@/app/components/Charts";
import GoBackButton from "@/app/components/GoBackButton";
import publicFetcher from "@/app/lib/api/publicFetcher";

export async function generateMetadata({ params }) {
    const { teacherSlug } = await params;
    const teacherData = await publicFetcher(`teachers/${teacherSlug}/`);

    if (!teacherData) return { title: "Profesor no encontrado" };

    return {
        title: `${teacherData.name} | Perfil y Reseñas`,
        description: `Lee lo que otros estudiantes dicen sobre ${teacherData.name} en UnicaRed. Consulta su metodología y nivel de dificultad.`,
        alternates: {
            canonical: `https://unicared.tech/profesores/${teacherSlug}`,
        },
        openGraph: {
            title: `${teacherData.name} | Perfil y Reseñas`,
            url: `https://unicared.tech/profesores/${teacherSlug}`,
            type: "profile",
        },
    };
}


export default async function TeacherPage({ params }) {
    const { teacherSlug } = await params;

    const teacherData = await publicFetcher(`teachers/${teacherSlug}/`);
    
    return (
        <section className="px-4 md:px-0">
            <div className="flex-column md:flex gap-5">
                <aside className="bg-gray-900 md:flex-4 lg:flex-3 text-white rounded-2xl justify-between">
                    <DetailsHeader teacherData={teacherData}/>
                    <Charts className="m-1" teacherData={teacherData}/>
                </aside>

                <div className="flex md:hidden justify-end">
                    <GoBackButton/>
                </div>
                
                <div className="bg-gray-900 rounded-2xl md:flex-5 lg:flex-6">
                    <ReviewList id={teacherData.id} teacherData={teacherData}/>
                </div>
            </div>
            <div className="hidden md:block flex justify-end">
                <GoBackButton/>
            </div>
        </section>
    )
} 