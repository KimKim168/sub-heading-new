
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const DummyContent = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl pt-14">
      <main className="font-poppins-regular mx-auto min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DummyContent;
