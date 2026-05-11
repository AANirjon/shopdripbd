import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "Shopdrip | Premium Minimalist Fashion",
    description: "Shopdrip delivers elevated Korean-Japanese inspired luxury fashion for modern wardrobes.",
    icons: {
        icon: "/favicon.ico"
    },
    metadataBase: new URL("https://shopdripbd.com"),
    openGraph: {
        title: "Shopdrip | Premium Minimalist Fashion",
        description: "Luxury minimalist fashion with a cinematic shopping experience.",
        url: "https://shopdripbd.com",
        siteName: "Shopdrip",
        images: [
            {
                url: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Shopdrip premium fashion"
            }
        ],
        locale: "en_US",
        type: "website"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
