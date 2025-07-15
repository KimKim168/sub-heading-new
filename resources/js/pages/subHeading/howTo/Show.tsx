import { Link, usePage } from '@inertiajs/react';
import Layout from '../layout/MyLayout';
import MyRelatedArticle from '../components/my-related-article';

const show = () => {
    const { showData } = usePage().props;
    // console.log(show);
    return (
        <Layout>
            {/* <div className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="text-2xl leading-snug font-bold text-gray-900 md:text-3xl">{show?.name}</h1>
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: show?.long_description }}></div>
            </div> */}
            <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Left: Image + Text */}
                <div className="flex flex-col lg:col-span-2">
                    <img src={`/assets/images/items/${showData?.images?.[0]?.image}`} alt="News" className="mb-4 aspect-video w-full object-cover" />
                    <div
                        className="dark:prose-invert px-5 max-w-none leading-relaxed prose prose-h1:font-kh-moul-regular prose-h2:font-kh-moul-regular prose-h3:font-kh-moul-regular prose-h4:font-kh-moul-regular prose-h5:font-kh-moul-regular prose-h6:font-kh-moul-regular prose-headings:font-kh-moul-regular prose-p:font-siemreap-regular lg:px-0"
                        dangerouslySetInnerHTML={{ __html: showData?.long_description }}
                    ></div>
                </div>

                {/* Right: Advertisement (match height) */}
                <div className="h-full">
                    <img src="/assets/demo-images/note-logo.png" alt="Ad" className="h-full w-full object-cover" />
                </div>
            </div>
            {/* <MyHeroBottom /> */}
            <MyRelatedArticle />
        </Layout>
    );
};

export default show;
