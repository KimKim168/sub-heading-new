import AdContainer from '../components/AdContainer';
import MyApp from '../components/my-app';
import MyHeroTop from '../components/my-hero-top';
import MyMultiImage from '../components/my-multi-image';
import MyVideoIndexGallery from '../components/my-videos-index';
import Layout from '../layout/MyLayout';

const Index = () => {
    return (
        <Layout>
            <MyHeroTop />
            {/* <MyBanner /> */}
                {/* <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" /> */}
                {/* <div id="container-a8be7b0270fa57d86b88228a046adb65"></div> */}
                <AdContainer/>
            {/* <AdContainer/> */}
            <MyApp />
            <MyMultiImage />
            {/* <MyBanner />
            <MyApp /> */}
            <div className="mt-5">
                <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>

            <MyVideoIndexGallery />

            <div className="mt-5">
                <img src="/assets/demo-images/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
        </Layout>
    );
};

export default Index;
