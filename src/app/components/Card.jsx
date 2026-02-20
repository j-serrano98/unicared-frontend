import Link from 'next/link'

export default function Card({ teacher }) {

    const rating = teacher.rating;
    const filledStars = Math.round(rating / 2);
    const emptyStars = 5 - Math.round(rating / 2);

    return (
        <div key={teacher.id} className="border p-5 mx-2 rounded-2xl space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            {/* Image/Avatar section */}
            <div className="flex items-center justify-center w-full h-48 bg-gray-400 rounded-base sm:w-96">
                {/* You'd put a real <img /> here, e.g.:
                <img src={teacher.avatarUrl} alt={teacher.first_name} className="w-full h-full object-cover rounded-base" />
                For now, I'll just show initials.
                */}                
            </div>
            {/* Content section */}
            <div className="w-full">
                <div>
                    <Link href={`/profesores/${teacher.slug}`}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{teacher.name}</h2>
                    </Link>
                    <div className="flex space-x-3 mb-6">
                        <div className="flex items-center rtl:space-x-reverse">
                            {
                                Array.from({ length: filledStars }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                    </svg>                            
                                ))
                            }
                            {
                                Array.from({ length: emptyStars } ).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                    </svg>                              
                                ))
                            }
                        </div>
                        <span className="text-md font-medium py-0.5 rounded-sm">{!!teacher.rating ? teacher?.rating.toFixed(2) : 0.00.toFixed(2)}</span>
                        <span className="font-bold text-md py-0.5 rounded-sm">({teacher.reviews_count})</span>
                    </div>
                </div>
                {/* <p className="text-lg text-gray-700 mb-2.5">{teacher.department_name}</p>
                <p className="text-base text-gray-600 mb-2.5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio sapiente minus, reprehenderit illum quasi natus laborum possimus ratione necessitatibus dolores corporis, eos, culpa minima.
                </p> */}
            </div>
        </div>
    )
}