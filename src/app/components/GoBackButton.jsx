"use client"
import { useRouter } from 'next/navigation'
export default function GoBackButton() {
    const router = useRouter()

    return (
        <div className="py-3 flex justify-end">
            <button type="button" onClick={() => router.back()} className="text-fg-brand  text-white bg-gray-900 border border-brand hover:bg-[#ededed] hover:text-gray-900 hover:cursor-pointer focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-lg">Go back</button>
        </div>
    )
}