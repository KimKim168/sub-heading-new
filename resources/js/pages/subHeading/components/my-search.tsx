import useTranslation from '@/hooks/use-translation';
import { router } from '@inertiajs/react';
import debounce from 'debounce';
import { useCallback, useState } from 'react';

const MySearch = ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    const initialQueryParams = new URLSearchParams(window.location.search);
    const [search, setSearch] = useState(initialQueryParams.get('search') || '');
    const currentPath = window.location.pathname;

    const handleSearch = useCallback(
        debounce((searchTerm: string) => {
            const queryParams = new URLSearchParams(window.location.search);
            queryParams.set('search', searchTerm);
            queryParams.set('page', '1');

            router.get(currentPath + '?' + queryParams.toString(), {}, { preserveState: true });
        }, 500),
        [currentPath],
    );

    return (
        <div>
            <div className="flex items-center justify-center gap-4 md:min-w-xl">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch(search);
                    }}
                    className="flex flex-1 flex-row items-center gap-2 rounded-full border bg-gray-200 py-0 pr-0 pl-3 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        id="search-bar"
                        value={search}
                        type="search"
                        autoComplete="search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSearch(e.currentTarget.value);
                            }
                        }}
                        placeholder={`${t('Search')}...`}
                        className="right-0 w-full py-0 pr-0 pl-3 focus-within:ring-0 outline-0"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-[#7e4fd4] px-3 py-3 font-semibold text-gray-100 transition-all duration-200 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                stroke="#fff"
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                            />
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M22 22L20 20" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MySearch;
