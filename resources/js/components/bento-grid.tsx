import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  image,
  header,
  icon,
}: {
  id?: string;
  className?: string;
  title?: string | React.ReactNode;
  image?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <Link key={id} href={`/how_to/${id}`}>
       <img
        src={`/assets/images/items/${image}`}
        alt="Design"
        className="w-full h-46 object-cover rounded-lg"
      />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 text-sm line-clamp-2 mb-1 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs line-clamp-2 font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
      </Link>
    </div>
  );
};
