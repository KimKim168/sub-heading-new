import { Link, usePage } from "@inertiajs/react";

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
        <div className="px-5 xl:px-0 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliveries.map((item, index) => (
                <Link href={`/how_to/${item.id}`}>
                <div key={index} className="mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                    {/* Top Section */}
                    <div className="relative rounded-t-2xl p-2">
                        <img
                            src={`/assets/images/items/${item.images?.[0]?.image}`}
                            className="flex aspect-video w-full items-center object-cover justify-center rounded-sm"
                        ></img>
                    </div>
                    {/* Bottom Section */}
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
                        <p className="mb-4 text-lage leading-relaxed text-gray-800 line-clamp-5">{item?.short_description}</p>
                        {/* <div className="border-t border-gray-200 pt-2">
                            <p className="text-center text-sm text-gray-600">{item.status}</p>
                        </div> */}
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default MyApp;
