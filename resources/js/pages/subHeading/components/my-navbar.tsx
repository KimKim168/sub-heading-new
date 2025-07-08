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
import { MyNewSlideBottom } from '@/pages/westernUniversityNew/components/my-new-slide-bottom';
import { useState } from 'react';
import MyApp from './my-app';
import MyMultiImage from './my-multi-image';
import Switch from './my-switch';

export function NavbarDemo() {
    const navItems = [
        {
            name: 'Home',
            link: '#home',
        },
        {
            name: 'How To',
            link: '#how_to',
        },
        {
            name: 'Videos',
            link: '#videos',
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                        <NavbarButton variant="primary">Download</NavbarButton>
                        <Switch />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton> */}
                            <NavbarButton variant="primary">Download</NavbarButton>
                            <Switch />
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <DummyContent />

            {/* Navbar */}
        </div>
    );
}
const deliveries = [
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
    {
        description:
            'Now that your eyes are open, make the sun jealous with your burning passion to start the day. Make the sun jealous or stay in bed.',
        status: 'MALAK EL HALABI',
    },
];

const DummyContent = () => {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl pt-14">
            {/* <h1 className="mb-4 text-center text-3xl font-bold">Check the navbar at the top of the container</h1>
            <p className="mb-10 text-center text-sm text-zinc-500">
                For demo purpose we have kept the position as <span className="font-medium">Sticky</span>. Keep in mind that this component is{' '}
                <span className="font-medium">fixed</span> and will not move when scrolling.
            </p> */}

            <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                    <MyNewSlideBottom />
                </div>
                <div className="aspect-[21/9]">
                    <img src="/assets/demo-images/note-tech/note3.png" className="h-full w-full object-cover" />
                </div>
            </div>
            <div className="mt-10">
                <img src="/assets/demo-images/note-tech/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            <MyApp />
            <MyMultiImage />
            {/*  */}
            <div className="mt-10">
                <img src="/assets/demo-images/note-tech/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            {/*  */}
            <MyApp />
            {/*  */}
            <div className="mt-10">
                <img src="/assets/demo-images/note-tech/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            {/*  */}
            {/*  */}
            <MyMultiImage />
            {/*  */}
            {/*  */}
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Left: Image + Text */}
                <div className="flex flex-col lg:col-span-2">
                    <img src="/assets/demo-images/note-tech/note4.png" alt="News" className="mb-4 w-full object-cover" />
                    <p className="text-lg leading-relaxed font-light text-black">
                        Now that your eyes are open, make the sun jealous with your burning passion to start the day. Embrace each moment with
                        purpose, energy, and the kind of focus that turns dreams into milestones. Success doesn't wait — and neither should you. Wake
                        up, show up, and make today count. <br />
                        <br />
                        Whether you're chasing goals, creating opportunities, or simply trying to be better than you were yesterday, remember that
                        your journey starts with action. <br />
                        Every step forward, no matter how small, brings you closer to the future you're building. Fuel your ambition. Believe in your
                        pace. Keep showing up. The results will follow.
                    </p>
                </div>

                {/* Right: Advertisement (match height) */}
                <div className="h-full">
                    <img src="/assets/demo-images/note-tech/note-logo.png" alt="Ad" className="h-full w-full object-cover" />
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="mt-10 px-4 xl:px-0">
                <p className="text-xl font-black">Related Article:</p>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {deliveries.map((item, index) => (
                        <div key={index} className="mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Top Section */}
                            <div className="relative rounded-t-2xl p-2">
                                <img
                                    src="/assets/demo-images/note-tech/note2.png"
                                    className="flex aspect-video w-full items-center justify-center rounded-sm"
                                ></img>
                            </div>

                            {/* Bottom Section */}
                            <div className="p-4">
                                {/* <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3> */}
                                <p className="text-lage mb-4 leading-relaxed text-gray-800">{item.description}</p>

                                <div className="border-t border-gray-200 pt-2">
                                    <p className="text-center text-sm text-gray-600">{item.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
              {/*  */}
            <div className="mt-10">
                <img src="/assets/demo-images/note-tech/note4.png" className="aspect-[21/4] w-full object-cover" />
            </div>
            {/*  */}
        </div>
    );
};
