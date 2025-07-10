import { usePage } from '@inertiajs/react';
import Layout from '../layout/MyLayout';

const show = () => {
    const { show } = usePage().props;
    console.log(show);
    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="text-2xl leading-snug font-bold text-gray-900 md:text-3xl">
                    {show?.name}
                </h1>
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{__html:show?.long_description}}>
                   
                </div>
            </div>
        </Layout>
    );
};

export default show;
