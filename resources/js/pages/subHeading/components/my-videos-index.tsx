import { Button } from '@/components/ui/button';
import { Dialog,DialogContent, DialogTitle, DialogDescription } from '@/pages/rule-library/components/ui/dialog';
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

// const videos = [
//     {
//         id: 1,
//         name: 'Intro to Our Library',
//         link: 'https://www.youtube.com/embed/1VdS89qP3O8',
//         images: [
//             {
//                 image: 'note5.jpg',
//             },
//         ],
//     },
//     {
//         id: 2,
//         name: 'ភោជនីយដ្ឋានដែលមានវ័យចំណាស់ជាងគេលើពិភពលោក El Soprino De Botin',
//         link: 'https://www.youtube.com/embed/6DqN_vXB_kk?si=Z_WaNkD33oRtZkuf',
//         images: [
//             {
//                 image: 'note6.png',
//             },
//         ],
//     },
//     {
//         id: 3,
//         name: 'Student Interviews',
//         link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//         images: [
//             {
//                 image: 'note3.png',
//             },
//         ],
//     },
//     {
//         id: 4,
//         name: 'Library Services Tour',
//         link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
//         images: [
//             {
//                 image: 'note1.png',
//             },
//         ],
//     },
//     {
//         id: 5,
//         name: 'Intro to Our Library',
//         link: 'https://www.youtube.com/embed/1VdS89qP3O8',
//         images: [
//             {
//                 image: 'note5.jpg',
//             },
//         ],
//     },
//     {
//         id: 6,
//         name: 'ភោជនីយដ្ឋានដែលមានវ័យចំណាស់ជាងគេលើពិភពលោក El Soprino De Botin',
//         link: 'https://www.youtube.com/embed/6DqN_vXB_kk?si=Z_WaNkD33oRtZkuf',
//         images: [
//             {
//                 image: 'note6.png',
//             },
//         ],
//     },
// ];

export default function MyVideoIndexGallery() {
    const { tableDataVideo } = usePage().props;
    const videos = tableDataVideo?.data;
    // console.log(videos);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            console.log(`Currently displaying: ${videos[currentIndex].name}`);
        }
    }, [currentIndex, isOpen]);

    const getVideoUrl = (src: string) => {
        // Check if the src is an iframe HTML string
        const iframeRegex = /<iframe.*?src="(.*?)"/;
        const match = src.match(iframeRegex);
        return match ? match[1] : src; // Return the extracted URL or the original src
    };

    const nextSlide = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    if (!videos || videos?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-xl px-6 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <>
            <div className="mx-auto mt-5 max-w-screen-xl px-6 lg:px-0">
                <div>
                    <div className={`grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-3`}>
                        {videos?.map((item, index) => (
                            <div
                                key={index}
                                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:scale-95"
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsOpen(true);
                                }}
                            >
                                <img src={`/assets/images/videos/${item.image}`} alt="image" className="aspect-video w-full object-cover" />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                                    <div className="text-base font-semibold text-white">{item.title}</div>
                                    {/* <div className="mt-1 text-sm text-gray-300">{item.short_description}</div> */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm text-white">
                                            <PlayCircle /> <span>Play video</span>
                                        </div>
                                        <button className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-black shadow transition hover:bg-gray-200">
                                            Watch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogContent className="flex h-full w-full flex-col border-none bg-black px-14">
                            <DialogTitle className="hidden" />
                            <DialogDescription className="hidden" />
                            <div className="relative flex-grow">
                                <iframe
                                    src={`${getVideoUrl(videos[currentIndex].link)}?&autoplay=1`} // Ensure autoplay works on YouTube
                                    className="h-full w-full rounded-2xl"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="group absolute top-1/2 left-2 -translate-y-1/2 transform"
                                onClick={prevSlide}
                                aria-label="Previous video"
                                disabled={currentIndex === 0} // Disable button if on the first video
                            >
                                <ChevronLeft className="text-white group-hover:text-black" size={28} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="group absolute top-1/2 right-2 -translate-y-1/2 transform"
                                onClick={nextSlide}
                                aria-label="Next video"
                                disabled={currentIndex === videos.length - 1} // Disable button if on the last video
                            >
                                <ChevronRight className="text-white group-hover:text-black" size={28} />
                            </Button>
                        </DialogContent>
                    </Dialog>
                    {videos?.length >= 3 && (
                        <div className="mt-5 flex justify-center">
                            <Link
                                href="/videos"
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
                </div>
            </div>
        </>
    );
}
