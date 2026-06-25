import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/PublicFooter";
import { BannerColorProvider } from "@/components/layout/ui/BannerColorContext";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <BannerColorProvider>
                    {/* <Navbar /> */}
                    {children}
                    {/* <Footer /> */}
                </BannerColorProvider>
            </body>
        </html>
    );
}
