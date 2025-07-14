'use client';

import { usePage } from '@inertiajs/react';
import Switch from './my-switch';

const SocialButtons = () => {
    const { links } = usePage().props;
    return (
        <div className="flex max-w-7xl items-center gap-2 ">
            <div className="flex items-center justify-center space-x-2">
                {links?.map((item) => (
                    <a key={item.id} href={item?.link} className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                        <img src={`/assets/images/links/${item.image}`} className="w-7 duration-500 hover:scale-110" />
                    </a>
                ))}
            </div>
            <div>
                <Switch />
            </div>
        </div>
    );
};

export default SocialButtons;
