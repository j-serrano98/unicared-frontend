"use client"

import { CldUploadButton } from "next-cloudinary";

export default function ImageUploader( {onUpload }) {
     

    return (
        <div className="w-25 mx-auto text-center border border-1 border-gra rounded text-gray-600 hover:bg-gray-300 hover:cursor-pointer">
            <CldUploadButton 
                uploadPreset="profile_preset"
                onSuccess={(res) => {
                    const url = res?.info?.secure_url;
                    if (url && onUpload) {
                        onUpload(url);
                    }
                }}
            />
        </div>
    )
}