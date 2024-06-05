import Gallery from "../Gallery";
export async function generateStaticParams() {
    const categories = [
      { name: 'All', slug: 'all' },
      { name: 'Nunta', slug: 'nunta' },
      { name: 'Cununie', slug: 'cununie' },
      { name: 'Botez', slug: 'botez' },
      { name: 'Familie', slug: 'familie' },
    ];
  
    return categories.map((category) => ({
      params: category.slug, 
    }));
  }
export default function GalleryCategoryPage({ params }) {
    const { params: category } = params; 
    return <Gallery category={category} />;
}

