import { usePage } from "@inertiajs/react";

const MyHeroBottom = () => {
    const { heroSection } = usePage().props;
    return (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1  gap-4 lg:grid-cols-3">
            {/* Left: Image + Text */}
            <div className="flex flex-col lg:col-span-2">
                <img src={`/assets/images/pages/${heroSection?.images?.[0]?.image}`} alt="News" className="mb-4 w-full object-cover aspect-video" />
                <div className="text-lg px-5 lg:px-0 leading-relaxed font-light dark:prose-invert" dangerouslySetInnerHTML={{__html:heroSection?.long_description}}>
                   
                </div>
            </div>

            {/* Right: Advertisement (match height) */}
            <div className="h-full">
                <img src="/assets/demo-images/note-logo.png" alt="Ad" className="h-full w-full object-cover" />   
            </div>
        </div>
    );
};

export default MyHeroBottom;
