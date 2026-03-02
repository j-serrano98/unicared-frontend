"use client"

import { useFormState } from "react-dom";
import { updateProfileAction } from "@/app/actions/updateProfile";
import { useRouter } from "next/navigation";
import TextInput from "./TextInput";
import UrlInput from "./UrlInput";
import { CldImage } from 'next-cloudinary';
import ImageUploader from "./ImageUploader";
import { useState } from "react";


const initialState = {
    success: null,
    error: null,
};

export default function ProfileForm({ profile }) {

    const [state, formAction] = useFormState(updateProfileAction, initialState);
    const [profilePic, setProfilePic] = useState(profile.profile_pic);

    const router = useRouter();
    
    function skipForm() {
        router.push("/register/career");
    }

    return (

        <section className="py-4">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Perfil Público</h2>
            <hr className="text-gray-300" />
            <form action={formAction}>
                <div className="grid gap-4 grid-cols-6 gap-6 py-5 rounded-xl">
                    <div className="col-span-4 flex flex-col gap-3">
                        <div className="flex gap-3 w-full mb-6">
                            <TextInput name={"first_name"} label={"Nombre"} defaultValue={profile.first_name} placeholder="Jose"/>
                            <TextInput name={"last_name"} label={"Apellido"} defaultValue={profile.last_name} placeholder="Perez"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-900 dark:text-white font-semibold">Bio</label>
                            <textarea id="bio" name="bio" rows="5" defaultValue={profile.bio} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Me gustan los gatos!"></textarea>
                        </div>

                        {/*  */}
                        <div className="flex flex-col gap-6">
                            {/* WEBSITE */}
                            <UrlInput 
                                name={"website"}
                                label={"Website personal"}
                                defaultValue={profile.website}
                                placeholder="https://www.miwebsite.com"
                            />

                            {/* LINKEDIN */}
                            <UrlInput
                                name={"linkedin_url"}
                                label={"Linkedin URL"}
                                defaultValue={profile.linkedin_url}
                                placeholder="https://www.linkedin.com/in/jose-perez"
                            />

                            {/* FACEBOOK */}
                            <UrlInput
                                name={"fb_url"}
                                label={"Facebook URL"}
                                defaultValue={profile.fb_url}
                                placeholder="https://www.facebook.com/JosePerez"
                            />

                            {/* GITHUB */}
                            <UrlInput
                                name={"github_user"}
                                label={"Github"}
                                defaultValue={profile.github_user}
                                placeholder="https://github.com/j-perez26"
                            />

                            {/* INSTAGRAM */}
                            <TextInput
                                name={"instagram_user"}
                                label={"Instagram"}
                                defaultValue={profile.instagram_user}
                                placeholder="j-perez26"
                                required={false}
                            />

                        </div>

                        

                        <div className="pt-2 md:pt-4">
                        <div className="gap-4 sm:flex items-center justify-end">
                            <div className="flex gap-3 items-baseline">
                                <button  className="hover:cursor-pointer mt-4 flex w-full items-center justify-center rounded-lg border border-green-700 bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:border-green-800 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0 sm:w-auto">Actualizar perfil</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-3">
                        <span className="font-semibold">Foto de perfil</span>
                        <input type="hidden" id="profile_pic" name="profile_pic" defaultValue={profilePic || ""} />
                        <CldImage
                        className="rounded-full mx-auto"
                        src={profilePic ?? "https://res.cloudinary.com/dtjynfbic/image/upload/v1772458780/avatar-1577909_960_720_alfm83.jpg"}
                        width={200}
                        height={200}
                        alt={`Foto de perfil de ${profile.first_name} ${profile.last_name}`}
                        />
                        <ImageUploader onUpload={(url) => setProfilePic(url)}/>
                    </div>
                </div>
                
            </form>
        </section>
    )
}