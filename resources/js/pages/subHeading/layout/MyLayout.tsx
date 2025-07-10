'use client';
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from '@/components/ui/resizable-navbar';
import { ReactNode, useState } from 'react';
import Switch from '../components/my-switch';
import MyFooter from '../components/my-footer';
import { Download } from 'lucide-react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'How To', link: '/how_to' },
        { name: 'Videos', link: '/videos' },
        // { name: 'Contact', link: '/contact' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="primary" className='flex items-center' > <Download className="w-4 h-4 mr-2"/><a href='/download'>Download</a> </NavbarButton>
                        <Switch />
                    </div>
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
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton variant="primary">Download</NavbarButton>
                            <Switch />
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <main className="mx-auto max-w-screen-xl min-h-screen">
                {children}
            </main>
            <MyFooter/>
        </div>
    );
}
