import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/PublicFooter";
import { BannerColorProvider } from "@/components/layout/ui/BannerColorContext";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BannerColorProvider>
            <Navbar />
            {children}
            <Footer />
        </BannerColorProvider>
    );
}
