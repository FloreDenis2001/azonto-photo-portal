"use client"
import React, { useState } from 'react';
import image1 from '../../assets/backgroundsSelected/background1.jpg'
import image2 from '../../assets/backgroundsSelected/background2.jpg'
import image3 from '../../assets/backgroundsSelected/background3.jpg'
import image4 from '../../assets/backgroundsSelected/background4.jpg'
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
const CarouselHero2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            src: image4,
            label: 'Frumusete si Eleganta, In Fiecare Cadru.',
            description: 'Fiecare fotografie surprinde esenta frumusetii si elegantei, intr-un mod unic si personal.'
        },
        {
            src: image1,
            label: 'Magia iubirii, capturata in fiecare cadru.',
            description: 'Incarcate de emotie si farmec, aceste cadre imortalizeaza momentele in care inima bate mai tare.'
        },
        {
            src: image2,
            label: 'Calatorii si amintiri, in cadre.',
            description: 'Fiecare fotografie este o fereastra catre aventuri trecute si amintiri pretioase.'
        },
        {
            src: image3,
            label: 'Emotii in cadre, Povesti Neimblanzite.',
            description: 'Povesti spuse prin imagini, unde fiecare zambet si fiecare lacrima prind viata.'
        }

    ];


    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div
            id="carouselExampleCaptions "
            className="relative"
            data-twe-carousel-init
            data-twe-carousel-slide>
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0 "
                data-twe-carousel-indicators>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-twe-target="#carouselExampleCaptions"
                        data-twe-slide-to={index}
                        onClick={() => setActiveIndex(index)}
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${activeIndex === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                        aria-current={activeIndex === index ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}></button>
                ))}
            </div>
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${activeIndex === index ? 'block' : 'hidden'}`}
                        data-twe-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <div
                            className="relative overflow-hidden bg-cover bg-no-repeat"
                            style={{ backgroundPosition: '50%' }}>
                            <Image
                                src={slide.src}
                                alt="slide"
                                className="block w-full h-[50vh] md:h-[60vh] lg:h-[90vh]"
                                priority={index < 4}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                objectFit="cover"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-55"></div>
                        </div>
                        <div
                            className="absolute md:gap-4 p-1  w-4/5 gap-2 flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white md:block">
                            <h5 className="text-[32px] md:text-5xl font-paris ">{slide.label}</h5>
                            <p className='text-[11px] md:text-lg font-manrope'>
                                {slide.description}
                            </p>

                            <Button className="mt-4 w-32  font-manrope text-white bg-orange-400 hover:scale-90 hover:bg-orange-400 transition-all ease-in-out  uppercase tracking-wider ">
                                <Link href="/gallery/all">
                                    Galerie
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="prev"
                onClick={handlePrev}>
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="next"
                onClick={handleNext}>
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
            </button>
        </div>
    );
}

export default CarouselHero2;
