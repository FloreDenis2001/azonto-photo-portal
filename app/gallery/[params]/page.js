// pages/gallery/[slug]/page.js
import Gallery from "../Gallery";

export default function GalleryCategoryPage({ params }) {
    const { params: category } = params; 
    return <Gallery category={category} />;
}


