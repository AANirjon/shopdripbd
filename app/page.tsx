import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/home/hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeaturedCollections />
            <TestimonialsSection />
            <Footer />
        </main>
    );
}

