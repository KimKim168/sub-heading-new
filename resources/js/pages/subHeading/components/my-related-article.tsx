import { Link, usePage } from '@inertiajs/react';
import React from 'react'

// const deliveries = [
//     {
//         description:
//             'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
//         status: 'MALAK EL HALABI',
//     },
//     {
//         description:
//             'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
//         status: 'MALAK EL HALABI',
//     },
//     {
//         description:
//             'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
//         status: 'MALAK EL HALABI',
//     },
//     {
//         description:
//             'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
//         status: 'MALAK EL HALABI',
//     },
// ];
const MyRelatedArticle = () => {
    const { relatedArticle } = usePage().props;
    const deliveries = relatedArticle;
    console.log(deliveries);
  return (
    <div className="mt-10 px-5 xl:px-0">
                <p className="text-xl font-black">Related Article:</p>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {deliveries.map((item, index) => (
                        <Link href={`/page/${item.id}`}>
                        <div key={index} className="mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Top Section */}
                            <div className="relative rounded-t-2xl p-2">
                                <img
                                    src={`/assets/images/pages/${item?.images?.[0]?.image}`}
                                    className="flex aspect-video object-cover w-full items-center justify-center rounded-sm"
                                ></img>
                            </div>

                            {/* Bottom Section */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{item.title}</h3>
                                <div className="text-lage mb-4 leading-relaxed text-gray-800 line-clamp-5" dangerouslySetInnerHTML={{__html:item.short_description}}></div>
{/* 
                                <div className="border-t border-gray-200 pt-2">
                                    <p className="text-center text-sm text-gray-600">{item.status}</p>
                                </div> */}
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
  )
}

export default MyRelatedArticle
