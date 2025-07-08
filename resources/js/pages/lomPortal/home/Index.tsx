
import { Link } from '@inertiajs/react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Layout from '../layout';
import MyHeroSection from '../components/my-hero-section';

const newsItems = [
    {
        id: 1,
        name: 'Bar Code Generator',
        short_decription: 'Tips and strategies to improve your reading skills effectively.',
        image: '/assets/rule-library/images/barcodegenerator.png',
    },
    {
        id: 2,
        name: 'Generate Classification',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/classification.png',
    },
    {
        id: 3,
        name: 'QR Code Generator',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/qrcode (1).png',
    },
    {
        id: 4,
        name: 'Reference Service Portal',
        short_decription: 'Tips and strategies to improve your reading skills effectively.',
        image: '/assets/rule-library/images/reference.png',
    },
    {
        id: 5,
        name: 'Patron Card Maker',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/cardmaker (1).png',
    },
    {
        id: 6,
        name: 'Patron Counter',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/counter (1).png',
    },
    {
        id: 7,
        name: 'Enter Load Library',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/enterloadlibrary.png',
    },
    {
        id: 8,
        name: 'Enter Load Library',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/enterloadlibrary.png',
    },
];
const Index = () => {
    return (
        <Layout>
            {/* Start */}
            <div className="container mx-auto my-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-stroke mt-3 rounded-full bg-white px-6 py-2 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:bg-black dark:text-white">
                        Welcome to LOM Portal
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg sm:text-xl">Your Trust Library Management System</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {newsItems?.map((item) => (
                        <Link href={`#`} key={item.id} className="flex justify-center">
                            <CardContainer className="inter-var h-full w-full">
                                <CardBody className="group/card relative flex h-full w-full flex-col justify-between rounded-xl border bg-gray-50 p-2 transition-transform duration-300 hover:scale-[1.02] hover:border-black/[0.1] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                                    <div>
                                        <CardItem translateZ="100" className="aspect-[16/9] w-full">
                                            <img
                                                src={item.image}
                                                height={350}
                                                width={350}
                                                className="aspect-[16/9] w-full rounded-xl bg-white/10 object-contain shadow-lg backdrop-blur-md group-hover/card:shadow-xl"
                                                alt={`News image: ${item.name}`}
                                            />
                                        </CardItem>
                                        <CardItem translateZ="50" className="mx-auto bg-white/10 backdrop-blur-md  group-hover/card:shadow-xl transition-transform duration-300 hover:scale-[1.02] mt-4 line-clamp-2 text-sm dark:text-white">
                                            {item.name}
                                        </CardItem>
                                        {/* Uncomment if needed */}
                                        {/* <CardItem as="p" translateZ="60" className="mt-2 line-clamp-2 text-[14px] text-neutral-600 dark:text-neutral-300">
              {item.short_decription}
            </CardItem> */}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </Link>
                    ))}
                </div>
            </div>
            {/* End */}
           {/* Hero */}
           <MyHeroSection/>
           {/*End Hero */}
        </Layout>
    );
};

export default Index;
