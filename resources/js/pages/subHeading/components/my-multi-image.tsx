import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
'use client';
import { useState } from 'react';

const MyMultiImage = () => {
 const images = [
     {
       src: "/assets/demo-images/note1.png",
     },
      {
       src: "/assets/demo-images/note2.png",
     },
     {
       src: "/assets/demo-images/note3.png",
     },
     {
       src: "/assets/demo-images/note2.png",
     },
   ];
 
   const [currentIndex, setCurrentIndex] = useState(null);
 
   const handleClose = () => setCurrentIndex(null);
   const showPrev = () =>
     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
   const showNext = () =>
     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
 
   return (
     <div className="max-w-screen-xl mx-auto px-5 xl:px-0 mt-5">
       <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {images.map((img, index) => (
           <div
             key={index}
             className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
             onClick={() => setCurrentIndex(index)}
           >
             <img
               className="w-full h-full object-cover"
               src={img.src}
               alt='image'
             />
           </div>
         ))}
       </div>
 
       {currentIndex !== null && (
         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
           {/* Overlay to close */}
           <div className="absolute inset-0 backdrop-blur-sm" onClick={handleClose} />
 
           {/* Close button */}
           <button
             onClick={handleClose}
             className="absolute top-5 right-6 text-white text-4xl z-50 hover:text-red-400 transition"
           >
             ✕
           </button>
 
           {/* Prev button */}
           <button
             onClick={showPrev}
             className="absolute left-4 top-1/2 -translate-y-5/2 text-white text-5xl z-50 hover:text-blue-400 transition"
           >
             <ArrowLeftCircle size={30}/>
           </button>
 
           {/* Main image and title */}
           <div className="relative z-40 max-w-4xl w-full px-4 text-center">
             <img
               src={images[currentIndex].src}
               alt={images[currentIndex].title}
               className="w-full aspect-video object-cover rounded-xl shadow-xl border-4 border-white"
             />
           </div>
 
           {/* Next button */}
           <button
             onClick={showNext}
             className="absolute right-4 top-1/2 -translate-y-5/2 text-white text-5xl z-50 hover:text-blue-400 transition"
           >
             <ArrowRightCircle size={30}/>
           </button>
 
           {/* Thumbnails */}
           <div className="mt-6 flex gap-4 overflow-x-auto px-6 pb-4 z-50">
             {images.map((thumb, index) => (
               <img
                 key={index}
                 src={thumb.src}
                 onClick={() => setCurrentIndex(index)}
                 className={`h-20 w-32 object-cover rounded-md cursor-pointer border-2 ${
                   index === currentIndex
                     ? 'border-blue-400'
                     : 'border-transparent hover:border-white'
                 } transition`}
                 alt={thumb.title}
               />
             ))}
           </div>
         </div>
       )}
     </div>
   );
};

export default MyMultiImage;
