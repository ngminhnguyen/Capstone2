import PublicNavbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/PublicFooter";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PublicNavbar />
            {children}
            <Footer />
        </>
    );
}
