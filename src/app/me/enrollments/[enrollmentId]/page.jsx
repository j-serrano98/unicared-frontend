import fetcher from "@/app/lib/api/fetcher";
import EnrollmentFormUpdate from "@/app/components/EnrollmentFormUpdate";


export default async function EnrollmentPage({ params }){
    const { enrollmentId } = await params;

    const enrollmentData = await fetcher(`profile/enrollments/${enrollmentId}`, {
        cache: 'no-store'
    });

    const teachersData = await fetcher("teachers/")


    return(
        <div>
            <EnrollmentFormUpdate enrollmentData={enrollmentData} teachersData={teachersData}/>
        </div>
    )
}