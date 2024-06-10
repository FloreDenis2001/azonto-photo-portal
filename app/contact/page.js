"use client"
import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Email sent successfully:', response);
                toast.success('Mesajul a fost trimis cu succes!');
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                toast.error('Trimiterea mesajului a eșuat.');
            });
    };
    return (
        <div className="flex justify-center items-center  pt-20 bg-neutral-900">
            <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                    <h1 className="pt-10 font-bold font-manrope uppercase text-5xl text-white">Trimite un <br /> <span className="text-orange-500">mesaj</span> </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 font-manrope">
                        <input className="w-full bg-neutral-800 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" name="firstName" value={formData.firstName} onChange={handleChange} />
                        <input className="w-full bg-neutral-800 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" name="lastName" value={formData.lastName} onChange={handleChange} />
                        <input className="w-full bg-neutral-800 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} />
                        <input className="w-full bg-neutral-800 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Phone*" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="my-4">
                        <textarea placeholder="Message*" className="font-manrope w-full h-32 bg-neutral-800 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-orange-500 rounded-2xl">
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-4xl my-4">Contactează-ne</h1>
                        <p className="text-gray-300">
                            Te așteptăm cu drag 
                             pentru a discuta despre cum putem imortaliza cele mai frumoase momente din viața ta. Fie că este vorba de portrete, evenimente speciale sau sesiuni foto creative, echipa noastră este pregătită să îți ofere servicii profesionale într-un mediu plăcut și relaxant.
                        </p>
                        <div className="flex my-4 w-2/3 lg:w-full">
                            <div className="flex flex-col">
                                <p className=" font-bold  text-gray-300">Tel: +40 754 179 369</p>
                                <p className="font-bold  text-gray-300">Email: cojo190875@yahoo.com</p>
                            </div>
                        </div>
                        <div className="flex my-4 w-2/3 lg:w-1/2 gap-4">
                            <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="text-white hover:scale-105 transition ease-in-out">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="text-white hover:scale-105 transition ease-in-out">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}