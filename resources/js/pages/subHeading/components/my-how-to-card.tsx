import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import MySearch from "./my-search";
import FilterCategory from "./FilterCategory";
import { usePage } from "@inertiajs/react";
import { MySearchProducts } from "@/pages/nokor-tech/components/my-search-products";
import SearchInput from "./my-search-input";

export function MyHowToCard() {
  const { tableData } = usePage().props;
  const items = tableData;
  return (
    <>
   <div className="flex gap-2 items-center justify-end px-5 lg:px-0 mt-10">
    <MySearch/>
    <FilterCategory/>
   </div>
    <BentoGrid className="max-w-7xl mx-auto px-5 lg:px-0 mt-5 ">
      {items?.data?.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.name}
          image={item.images?.[0].image}
          description={item.short_description}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}

// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     image:'note5.jpg'
//   },
//   {
//     title: "The Digital Revolution",
//     description:
//       "Dive into the transformative power of technology. Dive into the transformative power of technology. Dive into the transformative power of technology.",
//       image:'note6.png'
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     image:'note3.png'
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives.",
//       image:'note4.png'
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     image:'note5.jpg'
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     image:'note6.png'
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     image:'note4.png'
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     image:'note5.jpg'
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives. Understand the impact of effective communication in our lives.",
//       image:'note6.png'
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     image:'note3.png'
//   },
  
  
// ];
