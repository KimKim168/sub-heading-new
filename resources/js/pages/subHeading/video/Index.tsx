import MyHeadingStyle1 from '@/pages/rule-library/components/my-heading-style-1';
import MyVideoGallery from '@/pages/rule-library/components/my-videos';
import MySearch from '../components/my-search';
import Layout from '../layout/MyLayout';

const Index = () => {
    return (
        <Layout>
            <div className="mt-5 md:hidden px-6 lg:px-0">
                <MySearch />
            </div>
            <div className="flex items-center justify-between px-6 lg:px-0">
                <MyHeadingStyle1 title="Videos" />
                <div className="flex items-center gap-2">
                    <div className="hidden md:block">
                        <MySearch />
                    </div>
                </div>
            </div>
            <MyVideoGallery />
        </Layout>
    );
};

export default Index;
