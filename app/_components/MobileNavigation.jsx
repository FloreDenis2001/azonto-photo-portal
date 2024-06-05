import React from 'react';
import { Images, LayoutGrid, BookUser, Building2 } from "lucide-react";
import Link from "next/link";

export default function MobileNavigation() {
    return (
        <div className="fixed z-30 bottom-0 flex flex-col items-center justify-between w-full  gap-2 md:hidden">
            <ul className="flex flex-row gap-2 bg-neutral-900  w-full p-2  px-6  justify-around border-orange-500 shadow-md border-t text-white uppercase text-[14px]">
                <li className="transition-all ease-in-out hover:text-orange-500 hover:bg-neutral-800 p-2 rounded-lg">
                    <Link href="/" passHref>
                        <LayoutGrid />
                    </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-orange-500 hover:bg-neutral-800 p-2 rounded-lg">
                    <Link href="/gallery/all" passHref>
                        <Images/>
                    </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-orange-500 hover:bg-neutral-800 p-2 rounded-lg" >
                    <Link href="/about" passHref>
                        <Building2  />
                    </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-orange-500 hover:bg-neutral-800 p-2 rounded-lg">
                    <Link href="/contact" passHref>
                        <BookUser  />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
