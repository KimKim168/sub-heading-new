import MyVideoGallery from '@/pages/rule-library/components/my-videos';
import MyApp from '../components/my-app';
import MyHeroBottom from '../components/my-hero-bottom';
import MyHeroTop from '../components/my-hero-top';
import MyMultiImage from '../components/my-multi-image';
import MyRelatedArticle from '../components/my-related-article';
import Layout from '../layout/MyLayout';
import MyVideoIndexGallery from '../components/my-videos-index';

const Index = () => {
    return (
        <Layout>
            <MyHeroTop />
            {/* <MyBanner /> */}
            <div className="mt-5">
                <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            <MyApp />
            <MyMultiImage />
            {/* <MyBanner />
            <MyApp /> */}
            <div className="mt-5">
                <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            <MyVideoIndexGallery/>
            
            <div className="mt-5">
                <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
        </Layout>
    );
};

export default Index;
