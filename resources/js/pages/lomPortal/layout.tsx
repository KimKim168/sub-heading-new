import { Separator } from '@/components/ui/separator';
import { UserCircle2 } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from '@inertiajs/react';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <nav className="sticky top-0 z-50 border-b bg-[#0097b2]/70 backdrop-blur-xs backdrop-saturate-150">
                <div className="mx-auto font-thin flex h-10 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex font-thin items-center text-white">
                        <a href="#">
                            Telegram Support: <span>@alphalib</span>
                        </a>
                    </div>
                    <div className="flex font-thin items-center gap-3">
                        <a href="user/login" className="flex gap-2 text-white">
                            <UserCircle2 /> Login
                        </a>
                    </div>
                </div>
            </nav>

            <main className="font-poppins-regular mx-auto min-h-screen">{children}</main>
            {/* start */}
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <Separator />
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 py-8 sm:flex-row">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{' '}
                        <Link href="/" target="_blank">
                            Alphalib
                        </Link>
                        . All rights reserved.
                    </span>
                    <div className="text-muted-foreground flex items-center gap-5">
                        <Link href="#" target="_blank">
                            <img src="/assets/rule-library/images/telegram.png" className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank">
                            <img src="/assets/rule-library/images/facebook.png" className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* End */}
        </div>
    );
};

export default Layout;
