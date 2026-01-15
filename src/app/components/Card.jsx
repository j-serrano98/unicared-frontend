import Link from 'next/link'

export default function Card({ teacher }) {
    return (
        <div className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
        {/* Image/Avatar section */}
        <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-base sm:w-96">
            {/* You'd put a real <img /> here, e.g.:
            <img src={teacher.avatarUrl} alt={teacher.first_name} className="w-full h-full object-cover rounded-base" />
            For now, I'll just show initials.
            */}
            
            <span className="text-4xl font-semibold text-gray-700">
                {/* {teacher.name} */}
            </span>
            
        </div>
        {/* Content section */}
        <div className="w-full">
            <div className='flex justify-between'>
                <Link href={`/teachers/${teacher.uuid}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{teacher.name}</h2>
                </Link>
                <span className='pe-4'>{teacher.rating?.toFixed(2) ?? (0).toFixed(2)}</span>
            </div>
            <p className="text-lg text-gray-700 mb-2.5">{teacher.department_name}</p>
            <p className="text-base text-gray-600 mb-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio sapiente minus, reprehenderit illum quasi natus laborum possimus ratione necessitatibus dolores corporis, eos, culpa minima.
            </p>
        </div>
    </div>
    )
}