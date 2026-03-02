"use client"
import { CldImage } from "next-cloudinary"


export default function ProfileImage({ data, width, height }) {

    return (
        <CldImage
            className="rounded-full"
            src={data.profile_pic ?? "https://res.cloudinary.com/dtjynfbic/image/upload/v1772458780/avatar-1577909_960_720_alfm83.jpg"}
            width={width}
            height={height}
            alt={`Foto de perfil de ${data.first_name} ${data.last_name}`}
        />
    )
}