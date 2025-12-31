"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const navigationItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "مميزاتنا", href: "#features" },
    { label: "خدماتنا", href: "#services" },
    { label: "عروضنا", href: "#offers" },
    { label: "اتصل بنا", href: "#contact" },
];

export const HeaderSection = (): React.JSX.Element => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-orangeorange-50/80 backdrop-blur-md border-b border-orangeorange-100">
            <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4">
                <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
                    <img
                        className="w-[120px] md:w-[155px] h-auto object-cover cursor-pointer hover:scale-105 transition-transform"
                        alt="Edulylo Logo"
                        src="/image-1.png"
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="p-2 cursor-pointer hover:text-orangeorange-500 transition-colors font-h6-medium text-black"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Button
                        asChild
                        variant="outline"
                        className="h-10 px-4 py-2 border-orangeorange-500 bg-transparent hover:bg-orangeorange-50 text-orangeorange-500 hover:scale-105 transition-all cursor-pointer"
                    >
                        <a href="/coming-soon">تسجيل الدخول</a>
                    </Button>

                    <Button asChild className="px-6 py-2 bg-orangeorange-500 hover:bg-orangeorange-600 hover:scale-105 transition-all shadow-[0px_5px_15px_-5px_#ed6c2a] cursor-pointer">
                        <a href="/coming-soon">ابدأ الان مجانا</a>
                    </Button>
                </div>

                <button
                    className="lg:hidden p-2 text-black hover:text-orangeorange-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <XIcon className="w-6 h-6" />
                    ) : (
                        <MenuIcon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-orangeorange-50 border-t border-orangeorange-100 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col px-4 py-4 space-y-2">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="w-full text-right p-3 hover:bg-orangeorange-100 rounded-lg transition-colors font-h6-medium text-black"
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex flex-col gap-2 pt-4 border-t border-orangeorange-100">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full h-12 border-orangeorange-500 bg-transparent hover:bg-orangeorange-50 text-orangeorange-500"
                            >
                                <a href="/coming-soon">تسجيل الدخول</a>
                            </Button>

                            <Button asChild className="w-full h-12 bg-orangeorange-500 hover:bg-orangeorange-600">
                                <a href="/coming-soon">ابدأ الان مجانا</a>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
