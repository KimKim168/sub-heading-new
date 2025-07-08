const MyFooter = () => {
    return (
        <footer className="w-full py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <a href="#" className="flex items-center justify-center gap-2">
                        <img src="/assets/demo-images/note-tech/note-logo-no-bg.png" alt="logo" width={200} height={200} />
                        {/* <span className="font-medium text-black dark:text-white">Note tech</span> */}
                    </a>
                    <ul className="mb-10 grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 text-center text-lg transition-all duration-500 md:flex md:flex-row md:items-center md:justify-center md:gap-12 md:py-5">
                        <li>
                            <a href="#" className="cursor-pointer text-gray-800 hover:text-gray-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer text-gray-800 hover:text-gray-900">
                                How To
                            </a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer text-gray-800 hover:text-gray-900">
                                Videos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="cursor-pointer text-gray-800 hover:text-gray-900">
                                Download
                            </a>
                        </li>
                        <li className="col-span-2 justify-self-center md:col-span-1 md:justify-self-auto">
                            <a href="#" className="cursor-pointer text-gray-800 hover:text-gray-900">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="mb-5 flex items-center justify-center space-x-10">
                        <a href="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                            <svg className="h-[1.625rem] w-[1.625rem]" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="120" cy="120" r="120" fill="currentColor" />
                                <path
                                    d="M179.5 76.5L155.9 175.4C154 183.2 149.3 185.4 142.5 181.6L114.5 160.5L100.6 173.7C98.5 175.8 96.9 177.4 93.4 177.4L95.6 148.9L154.4 94.5C157.1 92 153.8 90.8 150.2 93.2L84.4 136.1L57.7 127.8C50.3 125.5 50.2 120.3 59.1 116.8L171.1 73.6C177.1 71.2 182.3 75.1 179.5 76.5Z"
                                    fill="#fff"
                                />
                            </svg>
                        </a>

                        <a href="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                            <svg className="h-[1.625rem] w-[0.938rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a href="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                            <svg className="h-[1.375rem] w-[1.875rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <span className="block text-center text-lg text-gray-500">
                        ©<a href="/">Alphalib</a> 2025, All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
