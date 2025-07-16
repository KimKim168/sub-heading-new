import { Link, usePage } from '@inertiajs/react';

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

function MyApp() {
    const { tableData } = usePage().props;
    const deliveries = tableData;
    return (
        <>
            <div className="mt-5 grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 xl:px-0">
                {deliveries.map((item, index) => (
                    <Link href={`/how_to/${item.id}`}>
                        <div key={index} className="mx-auto h-full rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Top Section */}
                            <div className="relative rounded-t-2xl p-2">
                                <img
                                    src={`/assets/images/items/${item.images?.[0]?.image}`}
                                    className="flex aspect-video w-full items-center justify-center rounded-sm object-cover"
                                ></img>
                            </div>
                            {/* Bottom Section */}
                            <div className="p-4">
                                <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900">{item.name}</h3>
                                <p className="text-lage mb-4 line-clamp-3 leading-relaxed text-gray-800">{item?.short_description}</p>
                                {/* <div className="border-t border-gray-200 pt-2">
                            <p className="text-center text-sm text-gray-600">{item.status}</p>
                        </div> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* See More Button */}
            {deliveries?.length >= 4 && (
                <div className="mt-5 flex justify-center">
                    <Link
                        href="/how_to"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#e31c24] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#c0141a] hover:shadow-lg"
                    >
                        See More
                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            )}
        </>
    );
}

export default MyApp;
