import { Card } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MyNewSlideBottom() {
    const { banners } = usePage().props;
    const images = banners;
    // const images = [
    //     { id: '1', image: '/assets/demo-images/slide1.png', alt: 'Slide 1' },
    //     { id: '2', image: '/assets/demo-images/slide2.png', alt: 'Slide 2' },
    // ];
    console.log(images);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative mx-auto w-full max-w-full">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images?.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%]">
                            <a href={item.link}>
                                <Card className="relative aspect-[21/9] w-full rounded-none border-0 py-0">
                                    <img src={`/assets/images/banners/${item.image}`} alt={item.alt} className="h-full w-full object-cover" />
                                    <div className="absolute top-0 bottom-0 left-0 h-full w-[30%] bg-black/10">
                                        <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center px-4 text-white sm:max-w-screen-xl sm:px-8 md:max-w-screen-2xl md:px-12">
                                            <h3 className="text-sm leading-snug font-bold sm:text-lg md:text-2xl xl:text-3xl">{item.title}</h3>
                                            <div
                                                className="mt-2 line-clamp-4 text-xs leading-relaxed font-light sm:text-sm md:text-base"
                                                dangerouslySetInnerHTML={{ __html: item.short_description }}
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {emblaApi && (
                <>
                    <button
                        onClick={() => emblaApi.scrollPrev()}
                        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft/>
                    </button>
                    <button
                        onClick={() => emblaApi.scrollNext()}
                        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                        aria-label="Next slide"
                    >
                        <ArrowRight/>
                    </button>
                </>
            )}
            {/* Dot Navigation */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2 sm:bottom-4">
                {images?.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${index === selectedIndex ? 'bg-[#e31c24]' : 'border-primary border'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
