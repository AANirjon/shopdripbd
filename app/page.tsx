import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/home/hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BestSellersSection } from "@/components/home/BestSellersSection";
import { FollowJourneySection } from "@/components/home/FollowJourneySection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeaturedCollections />
            <BestSellersSection />       
            <TestimonialsSection />
            <FollowJourneySection />
            <NewsletterSection />
            <Footer />
        </main>
    );
}

