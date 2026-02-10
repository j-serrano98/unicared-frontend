import Image from 'next/image'
import ProfilePicture from '../../../public/teacher-avatar.jpeg';
import Charts from './Charts';

export default function DetailsHeader({ teacherData }) {

    return(
        <div className="relative w-full p-6 rounded-base">

            <div className="flex flex-col">
                <div className="flex gap-6 ">
                    <Image className="w-24 h-24 mb-6 rounded-full" src={ProfilePicture} alt="" />
                    <div>
                        <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">{teacherData.name}</h5>
                        {teacherData.department_name && <span className="bg-gray-600 text-sm text-heading font-medium px-1.5 py-0.5 rounded">{teacherData.department_name}</span>}
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">Materias</h1>
                    {teacherData.subjects.sort().map(subject => (
                        <p key={subject} className="text-sm text-body">{subject}</p>
                    ))}
                </div>
                
                {/* <div className="flex mt-4 md:mt-6 gap-4">
                    <button type="button" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                        Follow me
                    </button>
                    <button type="button" className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Message
                    </button>
                </div> */}
            </div>
        </div>
    )
}