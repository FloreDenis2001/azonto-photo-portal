import React from 'react';
import image from '../../assets/about/about1.jpg';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
const About = () => {



    return (
        <section className="bg-blueGray-200 -mt-24 py-28">
            <div className="container px-4 items-center">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                            <div className="px-4 flex-auto"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-16 text-white pb-4">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-8">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            Despre Noi
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Suntem o echipă de fotografi pasionați, dedicați captării celor mai prețioase momente din viața ta. Cu o experiență vastă în diverse tipuri de fotografie, de la nunți și botezuri, până la sesiuni foto de familie și evenimente corporate, ne străduim să oferim imagini de calitate superioară care să spună o poveste.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            Folosim echipamente de ultimă generație și tehnici inovatoare pentru a ne asigura că fiecare fotografie reflectă autenticitatea și emoția momentului. Indiferent de ocazie, suntem aici pentru a transforma amintirile tale în opere de artă vizuale care vor dura o viață întreagă.
                        </p>

                        <Button className="bg-orange-500 hover:bg-orange-500 hover:scale-90 transition-all ease-in-out">
                            <Link href="/contact">Contactează-ne</Link>
                        </Button>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg rounded-lg bg-orange-500">
                            <Image className="w-full align-middle rounded-t-lg h-72" src={image} alt="icon" priority
                    />
                            <blockquote className="relative p-8 mb-4">

                                <h4 className="text-xl font-bold text-white">
                                    Misiunea Noastra
                                </h4>
                                <p className="text-md font-light mt-2 text-white">
                                    Misiunea noastră este de a captura momentele speciale din viața ta și de a le transforma în amintiri de neuitat. Ne dedicăm să oferim servicii fotografice de cea mai înaltă calitate, prin creativitate, profesionalism și atenție la detalii, astfel încât fiecare imagine să reflecte emoțiile și poveștile unice ale fiecărui client.
                                </p>
                            </blockquote>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
};
export default About;
