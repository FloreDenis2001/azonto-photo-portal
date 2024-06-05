"use client";
import React from 'react';
import Image from 'next/image';
import { CircleX } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ModalImage({ image, onClose ,onPrev, onNext}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
                <Image
                    src={image}
                    alt="Selected"
                    className="max-w-full h-[100vh] object-contain cursor-pointer"
                    priority={true}
                />
            </div>
            <CircleX onClick={onClose} className='absolute top-8 right-8 text-orange-500 z-40' />

            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={onPrev}
            >
                <ChevronLeft />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={onNext}
            >
                <ChevronRight />
            </button>
        </div>
    );
}
