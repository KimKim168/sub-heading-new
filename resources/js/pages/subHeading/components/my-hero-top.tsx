import { MyNewSlideBottom } from '@/pages/westernUniversityNew/components/my-new-slide-bottom';

const MyHeroTop = () => {
    return (
        <div className="flex flex-col md:mt-10 justify-between gap-4 md:flex-row">
            <div>
                <MyNewSlideBottom />
            </div>
            <div className="aspect-[21/9]">
                <img src="/assets/demo-images/note3.png" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default MyHeroTop;
