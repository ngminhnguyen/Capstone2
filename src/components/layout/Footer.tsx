import { Handlee, Nunito } from "next/font/google";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export default function Footer() {
    const menu1 = [
        "About Us",
        "For Brands",
        "For Partners",
        "Marketing Partners",
    ];

    const menu2 = ["Technology", "Case Studies", "News", "Careers"];

    const menu3 = ["Contact", "Privacy Policy", "Cookie Policy"];

    return (
        <footer
            className={`${nunito.className} w-full mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8`}
        >
            <div className="bg-pink-500 text-white rounded-2xl px-8 lg:px-14 py-8 lg:py-14 flex flex-col gap-10">
                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-yellow-400">
                    <div className="flex shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="/images/logo.png"
                            className="w-10 sm:w-5 lg:w-20 -rotate-20"
                        />
                        <span
                            className={`ml-2 text-5xl font-bold ${handlee.className} `}
                        >
                            BabyNutri
                        </span>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-3xl lg:text-5xl uppercase font-bold leading-[0.9]">
                            A life long love of food starts here!
                        </h2>
                    </div>
                </div>

                <div className="border-t border-white/20" />

                {/* Middle */}
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Newsletter */}
                    <div className="w-full lg:max-w-sm">
                        <p className="font-bold mb-3">
                            Subscribe to our newsletter
                        </p>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="flex-1 px-4 py-3 border border-amber-900 rounded-l-lg outline-none"
                            />
                            <button className="px-4 bg-white text-orange-800 rounded-r-lg hover:bg-yellow-400 border border-amber-900 transition">
                                →
                            </button>
                        </div>

                        <p className="text-xs text-white/50 mt-3">
                            By subscribing you agree to our privacy policy and
                            its terms.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
                        <FooterMenu items={menu1} />
                        <FooterMenu items={menu2} />
                        <FooterMenu items={menu3} />
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© Sessions 2026</p>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition"
                        >
                            IG
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition"
                        >
                            FB
                        </a>
                    </div>

                    <p>
                        Website by{" "}
                        <a href="#" className="hover:text-white transition">
                            Nguyen
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterMenu({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3 uppercase text-lg font-semibold">
            {items.map((item) => (
                <li key={item}>
                    <a href="#" className="hover:text-yellow-400 transition">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}
