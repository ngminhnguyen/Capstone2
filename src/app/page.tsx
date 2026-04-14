import { Nunito, Handlee, EB_Garamond } from "next/font/google";
import styles from "./page.module.css";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

const garamond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function HomePage() {
    return (
        <div
            className={`min-h-screen flex items-center justify-center gap-1.5 ${baloo.className}`}
        >
            <a
                href="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                Go to Login
            </a>
            <a
                href="/check"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                Go to Check
            </a>
            <a
                href="/home"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                Go to Home
            </a>
        </div>
    );
}
