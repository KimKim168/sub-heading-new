import MyApp from '../components/my-app';
import MyBanner from '../components/my-banner';
import MyHeroBottom from '../components/my-hero-bottom';
import MyHeroTop from '../components/my-hero-top';
import MyMultiImage from '../components/my-multi-image';
import MyRelatedArticle from '../components/my-related-article';
import Layout from '../layout/MyLayout';

const Index = () => {
    return (
        <Layout>
            <MyHeroTop />
            <MyBanner />
            <MyApp />
            <MyMultiImage />
            <MyBanner />
            <MyApp />
            <MyBanner />
            <MyMultiImage />
            <MyHeroBottom />
            <MyRelatedArticle />
            <MyBanner />
        </Layout>
    );
};

export default Index;
