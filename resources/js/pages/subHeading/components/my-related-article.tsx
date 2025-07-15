import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const MyRelatedArticle = () => {
    const { relatedPosts } = usePage().props;

    return (
        <section className="mt-10 px-4 xl:px-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedPosts.map((item, index) => (
                    <Link
                        href={`/how_to/${item.id}`}
                        key={index}
                        className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-video overflow-hidden">
                            <img
                                src={`/assets/images/items/${item.images?.[0]?.image ?? 'placeholder.jpg'}`}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                                {item.name}
                            </h3>
                            <div
                                className="text-sm text-gray-700 leading-relaxed line-clamp-4"
                                dangerouslySetInnerHTML={{ __html: item.short_description }}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MyRelatedArticle;
