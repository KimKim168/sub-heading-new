import MyHeadingStyle1 from "@/pages/rule-library/components/my-heading-style-1";
import { Link } from "@inertiajs/react";
import { ArrowRight, LoaderIcon } from "lucide-react";

const features = [
  {
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.",
  },
  
];

const MyHeroSection = () => {
  return (
   <section className="bg-background my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                {/* Left: Image */}
                <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-md">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={`/assets/rule-library/images/cardmaker (1).png`}
                        alt="Hero Image"
                    />
                </div>
                {/* Right: Content */}
                <div>
                    <MyHeadingStyle1 title='Introduction' />
                    <div
                        className="text-foreground prose prose-strong:dark:text-white mb-6 leading-relaxed whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html:'Easily uncover untapped areas to explore and expand your reach effortlessly and effectively. Easily uncover untapped areas to explore and expand your reach effortlessly and effectively. Easily uncover untapped areas to explore and expand your reach effortlessly and effectively. Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.' }}
                    />
                    {/* <a
                        href={heroSection?.type ? heroSection?.link : heroSection?.content}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:cursor-pointer hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a> */}

                    <div className="flex justify-start">
                        <Link
                            href={`/introduction`}
                            prefetch
                            className="group relative mt-2 w-42 cursor-pointer overflow-hidden rounded-full border bg-[#0097b2]/70 p-2 text-center font-semibold text-white"
                        >
                            <span
                                className={`inline-block transition-all duration-300 ${false ? 'opacity-0' : 'translate-x-1 group-hover:translate-x-12 group-hover:opacity-0'}`}
                            >
                                Read More
                            </span>
                            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#0097b2]/70 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                                Read More
                                {false ? <LoaderIcon className="animate-spin" /> : <ArrowRight />}
                            </div>
                            <div className="absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-full  transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default MyHeroSection;
