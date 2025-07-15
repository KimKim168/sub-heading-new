'use client';
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarLogo, NavBody } from '@/components/ui/resizable-navbar';
import { ReactNode, useEffect, useState } from 'react';
import MyFooter from '../components/my-footer';
import SocialButtons from '../components/social';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'How To', link: '/how_to' },
        { name: 'Videos', link: '/videos' },
        { name: 'Download', link: '/download' },
        // { name: 'Contact', link: '/contact' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    const isActive = (path: string) => (pathname === path ? 'text-primary underline font-semibold' : '');

    return (
        <>
            <div className="p-2 bg-[#00bef2] lg:mb-4 xl:px-4">
                <SocialButtons />
            </div>
            <div className="relative w-full">
                <Navbar>
                    <NavBody>
                        <NavbarLogo />
                        <div className="hidden h-[72px] items-center gap-6 rounded-xl bg-[#00bef2] px-6 md:flex">
                            {navItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className={`border-r border-white pr-4 text-white transition last:border-none hover:underline dark:text-neutral-200 ${isActive(item.link)}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* <div className="flex items-center gap-4">
                        <NavbarButton variant="primary" className='flex items-center' > <Download className="w-4 h-4 mr-2"/><a href='/download'>Download</a> </NavbarButton>
                        <Switch />
                    </div> */}
                    </NavBody>
                    <MobileNav>
                        <MobileNavHeader>
                            <NavbarLogo />
                            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        </MobileNavHeader>
                        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                            {navItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-neutral-600 dark:text-neutral-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                            {/* <div className="flex w-full flex-col gap-4">
                            <NavbarButton variant="primary">Download</NavbarButton>
                            <Switch />
                        </div> */}
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>

                <main className="mx-auto min-h-screen max-w-screen-xl">{children}</main>
                <MyFooter />
            </div>
        </>
    );
}
