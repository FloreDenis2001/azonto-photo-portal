"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import ModalImage from './ModalImage';

import image1 from '../../assets/backgroundsSelected/background3.jpg';
import image2 from '../../assets/backgroundsSelected/background4.jpg';
import image4 from '../../assets/recentwork/recent1.jpg';
import image5 from '../../assets/recentwork/recent2.jpg';
import image6 from '../../assets/recentwork/recent3.jpg';
import image7 from '../../assets/recentwork/recent4.jpg';
import image8 from '../../assets/recentwork/recent5.jpg';
import image9 from '../../assets/recentwork/recent6.jpg';
import image10 from '../../assets/recentwork/recent7.jpg';
import image11 from '../../assets/recentwork/recent8.jpg';
import image13 from '../../assets/recentwork/recent10.jpg';

export default function RecentWork() {
    const images = [image1, image2, image4, image5, image6, image7, image8, image9, image10, image11, image13];
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="w-full py-8 grid">
            <h2 className='mx-4 mt-8 md:text-4xl md:w-4/5 font-bold text-white text-2xl tracking-wider pb-2 border-b border-orange-500 font-manrope'>
                Portofoliu
            </h2>

            <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {images.map((image, index) => (
                    <div key={index} className="relative" onClick={() => openImage(index)}>
                        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] cursor-pointer">
                            <Image
                                src={image}
                                alt={`img-${index}`}
                                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-75"
                                priority={index < 4} 
                                layout="fill"
                                sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/gallery/all" className='w-full flex flex-row items-center justify-center'>
                <Button
                    className="mt-8 border border-orange-500 text-orange-500 bg-transparent gap-1 hover:bg-orange-500 transition-all ease hover:scale-95 rounded px-5 py-3 text-xs font-medium uppercase tracking-wide hover:text-white"
                >
                    <span>Vezi mai mult </span>
                    <MoveRight className='w-[12px]' />
                </Button>
            </Link>

            {selectedImageIndex !== null && (
                <ModalImage
                    image={images[selectedImageIndex]}
                    onClose={closeModal}
                    onNext={showNextImage}
                    onPrev={showPrevImage}
                />
            )}
        </section>
    );
}
