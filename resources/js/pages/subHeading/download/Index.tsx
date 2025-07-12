import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { ArrowDown, Download } from 'lucide-react';
import Layout from '../layout/MyLayout';

const Index = () => {
    const { downloadTop, downloadBottom } = usePage().props;
    // console.log(downloadBottom);
    return (
        <Layout>
            <div className="flex flex-col items-center justify-start px-5 py-20 lg:px-0">
                {/* Hero Section */}
                <div className="mb-16 max-w-2xl text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">{downloadTop?.[0].title}</h1>
                    <div
                        className="prose dark:prose-invert mb-6 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: downloadTop?.[0].short_description }}
                    ></div>
                    <Button className="rounded-full px-0 py-2 text-base">
                        <ArrowDown className="h-4 w-4" /> Download Now
                    </Button>
                </div>

                {/* Platform Cards */}
                <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    {downloadBottom?.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col justify-between rounded-xl p-6 shadow ${
                                index === 0 ? 'bg-blue-600 text-white' : 'bg-primary-foreground text-gray-800 dark:text-gray-200'
                            }`}
                        >
                            <div>
                                <div className={`mb-2 ${index === 0 ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>{item?.title}</div>
                                <div
                                    className="prose prose-h3:text-2xl dark:prose-invert mb-2 text-base"
                                    dangerouslySetInnerHTML={{ __html: item?.short_description }}
                                ></div>
                            </div>

                            {index === 0 ? (
                                <Button asChild variant="outline" className="mt-6 w-fit bg-white text-blue-600 hover:bg-gray-100">
                                    <a href={item?.link}>
                                        <Download className="mr-2 h-4 w-4" /> Download
                                    </a>
                                </Button>
                            ) : (
                                <a
                                    href={item?.link}
                                    className="border-primary text-primary mt-6 inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium duration-700 hover:scale-105"
                                >
                                    <Download className="h-4 w-4" /> Download
                                </a>
                            )}
                        </div>
                    ))}

                    {/* <div className="bg-primary-foreground rounded-xl p-6 shadow flex flex-col justify-between">
          <div>
            <div className="mb-2 text-gray-600 dark:text-gray-400">Mobile Phone</div>
            <h3 className="text-xl font-semibold mb-2">iOS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay ahead with quick, adaptable communication strategies for evolving business landscapes.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 w-fit inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-md text-sm font-medium hover:scale-105 duration-700 text-primary"
          >
            <Apple className="w-4 h-4" /> App Store
          </a>
        </div>

        <div className="bg-primary-foreground rounded-xl p-6 shadow flex flex-col justify-between">
          <div>
            <div className="mb-2 text-gray-600 dark:text-gray-400">Mobile Phone / Tablet</div>
            <h3 className="text-xl font-semibold mb-2">Android</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay ahead with quick, adaptable communication strategies for evolving business landscapes.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 w-fit inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-md text-sm font-medium hover:scale-105 duration-700 text-primary"
          >
          <PlaySquare className="w-4 h-4"/>  Google Play
          </a>
        </div> */}
                </div>
            </div>
        </Layout>
    );
};

export default Index;
