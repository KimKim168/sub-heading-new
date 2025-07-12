import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const MyFooter = () => {
    const { links, application_info } = usePage().props;
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    const isActive = (path) => pathname === path ? "underline " : "";

    return (
        <footer className="w-full py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <a href="/" className="flex items-center justify-center gap-2">
                        <img
                            src={`/assets/images/application_info/${application_info.image}`}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </a>

                    <ul className="mb-5 grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 text-center text-lg transition-all duration-500 md:flex md:flex-row md:items-center md:justify-center md:gap-12 md:py-5">
                        <li><a href="/" className={`cursor-pointer text-primary ${isActive("/")}`}>Home</a></li>
                        <li><a href="/how_to" className={`cursor-pointer text-primary ${isActive("/how_to")}`}>How To</a></li>
                        <li><a href="/videos" className={`cursor-pointer text-primary ${isActive("/videos")}`}>Videos</a></li>
                        <li><a href="/download" className={`cursor-pointer text-primary ${isActive("/download")}`}>Download</a></li>
                    </ul>

                    <div className="mb-5 flex items-center justify-center space-x-2">
                        {links?.map((item) => (
                            <a
                                key={item.id}
                                href={item?.link}
                                className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
                            >
                                <img
                                    src={`/assets/images/links/${item.image}`}
                                    className="w-7 hover:scale-110 duration-500"
                                />
                            </a>
                        ))}
                    </div>

                    <span className="block text-center text-lg text-gray-500">
                        <a href="/">{application_info?.copyright}</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
