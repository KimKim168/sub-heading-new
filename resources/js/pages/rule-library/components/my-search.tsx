import { usePage } from '@inertiajs/react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const MySearch = () => {

    return (
        <div>
            <div className="md:min-w-xl flex items-center justify-center gap-4">
                <form
                    action="#"
                    method="GET"
                    className="flex-1 flex flex-row items-center gap-2 rounded-full border bg-gray-200 py-0 pr-0 pl-3 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <label htmlFor="search-bar" className="sr-only">
                        Search
                    </label>
                    <input
                        id="search-bar"
                        name="search"
                        placeholder="Search Videos"
                        className="w-full rounded-full dark:text-gray-800 px-4 py-2 text-sm outline-none sm:text-base"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-gray-100 dark:bg-neutral-800 border px-3 py-2 font-semibold text-black transition-all dark:text-gray-100 duration-200 active:scale-95"
                    >
                        <Search/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MySearch;
