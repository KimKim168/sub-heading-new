import React from 'react'

const deliveries = [
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
];
const MyRelatedArticle = () => {
  return (
    <div className="mt-10 px-5 xl:px-0">
                <p className="text-xl font-black">Related Article:</p>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {deliveries.map((item, index) => (
                        <div key={index} className="mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Top Section */}
                            <div className="relative rounded-t-2xl p-2">
                                <img
                                    src="/assets/demo-images/note-tech/note2.png"
                                    className="flex aspect-video w-full items-center justify-center rounded-sm"
                                ></img>
                            </div>

                            {/* Bottom Section */}
                            <div className="p-4">
                                {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3> */}
                                <p className="text-lage mb-4 leading-relaxed text-gray-800">{item.description}</p>

                                <div className="border-t border-gray-200 pt-2">
                                    <p className="text-center text-sm text-gray-600">{item.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default MyRelatedArticle
