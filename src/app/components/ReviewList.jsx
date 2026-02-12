"use client"
import { useState, useEffect } from "react";

export default function ReviewList({ teacherData }) {

    const [filteredReviews, setFilteredReviews] = useState([])
    const [viewMore, setViewMore] = useState(3);

    useEffect(() => {
        setFilteredReviews(teacherData.reviews.slice(0, viewMore));
    }, [])

    const handleViewMore = () => {
        if (viewMore >= teacherData.reviews.length) return;
        const newViewMore = viewMore + 3;
        setViewMore(newViewMore);
        setFilteredReviews(teacherData.reviews.slice(0, newViewMore));
    }
    
    function formatDate(isoString) {
        const date =  new Date(isoString);

        return date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        });
    }

    const rating = teacherData.rating;
    const filledStars = Math.round(rating / 2);
    const emptyStars = 5 - Math.round(rating / 2);

    return(
        <div className="antialiased bg-gray-900 py-6 ps-6 pe-2 rounded-base rounded-2xl">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 h-[76vh] overflow-hidden overflow-y-auto scrollbar">
                    <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold text-gray-900 text-white">Reviews</h2>

                    <div className="mt-2 flex items-center gap-2 sm:mt-0">
                        <div className="flex items-center gap-0.5">
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
                                        <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                    </svg>                              
                                ))
                            }
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 text-gray-400">({(teacherData.reviews.reduce((acc, curr) => acc + curr.average, 0) / teacherData.reviews.length || 0).toFixed(2)})</p>
                        <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline text-white"> {teacherData.reviews.length} Reviews </a>
                    </div>
                    </div>

                    <div className="mt-6 divide-y divide-gray-200 divide-gray-700">
                    
                    {filteredReviews?.map((review, i) => {

                        const review_rating = review.average;
                        const review_filledStars = Math.round(review_rating / 2);
                        const review_emptyStars = 5 - Math.round(review_rating / 2);

                        return(
                            <div key={i} className={`gap-3 ${i == 0 ? 'pb-6' : 'py-6'} sm:flex sm:items-start pe-3`}>
                                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">

                                    {/* Rating Stars */}
                                    <div className="flex items-center gap-0.5">
                                        {
                                            Array.from({ length: review_filledStars }).map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>                            
                                            ))
                                        }
                                        {
                                            Array.from({ length: review_emptyStars } ).map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                </svg>                              
                                            ))
                                        }

                                        <span className="text-white">({review.average})</span>
                                    </div>

                                    {/* Reviewer */}
                                    <div className="space-y-0.5">
                                        <p className="text-base font-semibold text-gray-900 text-white">{review.username}</p>
                                        <p className="text-sm font-normal text-gray-500 text-gray-400">
                                            {formatDate(review.updated_at)}
                                        </p>
                                    </div>

                                <div className="inline-flex items-center gap-1">
                                    <svg className="h-5 w-5 text-primary-700 text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                    {/* <p className="text-sm font-medium text-gray-900 text-white">{review.subject_name}</p> */}
                                </div>
                                </div>

                                <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                                <p className="text-sm font-medium text-gray-900 text-white">{review.subject_name}</p>
                                <p className="text-base font-normal text-gray-500 text-gray-400">{review.comment}</p>

                                {/* <div className="flex items-center gap-4">
                                    <p className="text-sm font-medium text-gray-500 text-gray-400">Te resulto util?</p>
                                    <div className="flex items-center">
                                    <input id="reviews-radio-1" type="radio" value="" name="reviews-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600" />
                                    <label htmlFor="reviews-radio-1" className="ms-2 text-sm font-medium text-gray-900 text-gray-300"> Si: 3 </label>
                                    </div>
                                    <div className="flex items-center">
                                    <input id="reviews-radio-2" type="radio" value="" name="reviews-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600" />
                                    <label htmlFor="reviews-radio-2" className="ms-2 text-sm font-medium text-gray-900 text-gray-300">No: 0 </label>
                                    </div>
                                </div> */}
                                </div>
                            </div>

                        )
                    }
                    )}

                    {/* Example with image */}
                    {/* <div className="gap-3 py-6 sm:flex sm:items-start">
                        <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                        <div className="flex items-center gap-0.5">
                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>

                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>

                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>

                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>

                            <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                        </div>

                        <div className="space-y-0.5">
                            <p className="text-base font-semibold text-gray-900 text-white">Jese Leos</p>
                            <p className="text-sm font-normal text-gray-500 text-gray-400">November 18 2023 at 15:35</p>
                        </div>

                        <div className="inline-flex items-center gap-1">
                            <svg className="h-5 w-5 text-primary-700 text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <p className="text-sm font-medium text-gray-900 text-white">Verified purchase</p>
                        </div>
                        </div>

                        <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                        <p className="text-base font-normal text-gray-500 text-gray-400">It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!</p>

                        <div className="flex gap-2">
                            <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                            <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="text-sm font-medium text-gray-500 text-gray-400">Was it helpful to you?</p>
                            <div className="flex items-center">
                            <input id="reviews-radio-3" type="radio" value="" name="reviews-radio-2" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600" />
                            <label htmlFor="reviews-radio-3" className="ms-2 text-sm font-medium text-gray-900 text-gray-300"> Yes: 1 </label>
                            </div>
                            <div className="flex items-center">
                            <input id="reviews-radio-4" type="radio" value="" name="reviews-radio-2" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600" />
                            <label htmlFor="reviews-radio-4" className="ms-2 text-sm font-medium text-gray-900 text-gray-300">No: 0 </label>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                        {viewMore < teacherData.reviews.length ?
                    <div className="mt-6 text-center">
                    <button type="button" onClick={handleViewMore} className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 border-gray-600 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700">View more reviews</button>
                    </div>
                    : <></>}
                </div>
            </section>


                {/* <!-- Add review modal --> */}
            <div id="review-modal" tabIndex="-1" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased">
            <div className="relative max-h-full w-full max-w-2xl p-4">
                {/* <!-- Modal content --> */}
                <div className="relative rounded-lg bg-white shadow bg-gray-800">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 border-gray-700 md:p-5">
                    <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 text-white">Add a review for:</h3>
                    <a href="#" className="font-medium text-primary-700 hover:underline text-primary-500">Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD</a>
                    </div>
                    <button type="button" className="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 hover:bg-gray-600 hover:text-white" data-modal-toggle="review-modal">
                    <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <form className="p-4 md:p-5">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <div className="flex items-center">
                        <svg className="h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="ms-2 h-6 w-6 text-gray-300 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="ms-2 h-6 w-6 text-gray-300 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="ms-2 text-lg font-bold text-gray-900 text-white">3.0 out of 5</span>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 text-white">Review title</label>
                        <input type="text" name="title" id="title" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500" required="" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 text-white">Review description</label>
                        <textarea id="description" rows="6" className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500" required=""></textarea>
                        <p className="ms-auto text-xs text-gray-500 text-gray-400">Problems with the product or delivery? <a href="#" className="text-primary-600 hover:underline text-primary-500">Send a report</a>.</p>
                    </div>
                    <div className="col-span-2">
                        <p className="mb-2 block text-sm font-medium text-gray-900 text-white">Add real photos of the product to help other customers <span className="text-gray-500 text-gray-400">(Optional)</span></p>
                        <div className="flex w-full items-center justify-center">
                        <label htmlFor="dropzone-file" className="hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 border-gray-600 bg-gray-700 hover:border-gray-500 hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg className="mb-4 h-8 w-8 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center">
                        <input id="review-checkbox" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600" />
                        <label htmlFor="review-checkbox" className="ms-2 text-sm font-medium text-gray-500 text-gray-400">By publishing this review you agree with the <a href="#" className="text-primary-600 hover:underline text-primary-500">terms and conditions</a>.</label>
                        </div>
                    </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 border-gray-700 md:pt-5">
                    <button type="submit" className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Add review</button>
                    <button type="button" data-modal-toggle="review-modal" className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 border-gray-600 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700">Cancel</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}