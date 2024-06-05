"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigUp } from 'lucide-react';
import Modal from '../_components/ModalImage';

const categories = [
    { name: 'All', slug: 'all', max: 100 },
    { name: 'Nunta', slug: 'nunta', folder: 'nunta', max: 50 },
    { name: 'Cununie', slug: 'cununie', folder: 'cununie', max: 19 },
    { name: 'Botez', slug: 'botez', folder: 'botez', max: 21 },
    { name: 'Familie', slug: 'familie', folder: 'familie', max: 12 },
];

export default function Gallery({ category }) {
    const [filteredImages, setFilteredImages] = useState([]);
    const [showScroll, setShowScroll] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const importImages = (folder, max) => {
        const images = [];
        for (let i = 1; i <= max; i++) {
            images.push(require(`@/assets/gallery/${folder}/${folder} (${i}).jpg`).default);
        }
        return images;
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    };

    const showPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };


    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    useEffect(() => {
        if (category === 'all') {
            const allImages = categories.slice(1).flatMap(cat => importImages(cat.folder, cat.max));
            setFilteredImages(shuffle(allImages));
        } else {
            const selectedCategory = categories.find(cat => cat.slug === category);
            if (selectedCategory) {
                setFilteredImages(importImages(selectedCategory.folder, selectedCategory.max));
            } else {
                setFilteredImages([]);
            }
        }
    }, [category]);

    return (
        <section className="bg-neutral-900 py-28 cursor-pointer relative">
            <h1 className="w-full text-6xl font-paris text-white text-center pt-6">Gallery</h1>
            <ul className="w-full flex text-white gap-2 p-4 items-center md:p-6 justify-center cursor-pointer uppercase mt-4">
                {categories.map((cat, index) => (
                    <li
                        key={index}
                        className={`hover:text-orange-500 md:text-medium hover:border-orange-500 border-[1px] ${cat.slug === category ? ' text-orange-500 border-orange-500' : 'border-transparent'
                            } p-1 rounded-lg`}
                    >
                        <Link href={`/gallery/${cat.slug}`}>
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex flex-row flex-wrap">
                {filteredImages.map((image, index) => (
                    <div className='w-full md:w-1/2 lg:w-1/3' key={index} onClick={() => openImage(index)}>
                        <Image
                            src={image}
                            priority={true}
                            alt={`img-${index}`}
                            className="object-cover h-full p-1 cursor-pointer opacity-0"
                            onLoadingComplete={(e) => e.target.classList.remove("opacity-0")}
                        />
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <Modal
                    image={filteredImages[selectedImageIndex]}
                    onClose={closeModal}
                    onNext={showNextImage}
                    onPrev={showPrevImage}
                />
            )}

            <button
                className={`fixed bottom-20 right-6 lg:right-8 xl:right-20 p-2 rounded-full bg-orange-500 text-white text-2xl ${showScroll ? 'flex' : 'hidden'} items-center justify-center`}
                onClick={scrollTop}
            >
                <ArrowBigUp />
            </button>
        </section>
    );
}

