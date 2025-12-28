"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const navigationItems = [
    { label: "الرئيسية" },
    { label: "مميزاتنا" },
    { label: "خدماتنا" },
    { label: "عروضنا" },
    { label: "اتصل بنا" },
];

export const HeaderSection = (): React.JSX.Element => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-orangeorange-50 border-b border-orangeorange-100">
            <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4">
                <img
                    className="w-[120px] md:w-[155px] h-auto object-cover"
                    alt="Edulylo Logo"
                    src="/image-1.png"
                />

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navigationItems.map((item, index) => (
                        <button
                            key={index}
                            className="p-2 cursor-pointer hover:text-orangeorange-500 transition-colors"
                        >
                            <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-[length:var(--h6-medium-font-size)] text-black tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="h-10 px-4 py-2 border-orangeorange-500 bg-transparent hover:bg-orangeorange-50"
                    >
                        <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-orangeorange-500 text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
                            تسجيل الدخول
                        </span>
                    </Button>

                    <Button className="px-4 py-2 bg-orangeorange-500 hover:bg-orangeorange-600">
                        <span className="font-paragraphe-p-medium font-[number:var(--paragraphe-p-medium-font-weight)] text-texticonprimary-white text-[length:var(--paragraphe-p-medium-font-size)] tracking-[var(--paragraphe-p-medium-letter-spacing)] leading-[var(--paragraphe-p-medium-line-height)] [font-style:var(--paragraphe-p-medium-font-style)]">
                            ابدأ الان مجانا
                        </span>
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
                <div className="lg:hidden bg-orangeorange-50 border-t border-orangeorange-100">
                    <nav className="flex flex-col px-4 py-4 space-y-2">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full text-right p-3 hover:bg-orangeorange-100 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-[length:var(--h6-medium-font-size)] text-black tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
                                    {item.label}
                                </span>
                            </button>
                        ))}

                        <div className="flex flex-col gap-2 pt-4 border-t border-orangeorange-100">
                            <Button
                                variant="outline"
                                className="w-full h-10 border-orangeorange-500 bg-transparent hover:bg-orangeorange-50"
                            >
                                <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-orangeorange-500 text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
                                    تسجيل الدخول
                                </span>
                            </Button>

                            <Button className="w-full bg-orangeorange-500 hover:bg-orangeorange-600">
                                <span className="font-paragraphe-p-medium font-[number:var(--paragraphe-p-medium-font-weight)] text-texticonprimary-white text-[length:var(--paragraphe-p-medium-font-size)] tracking-[var(--paragraphe-p-medium-letter-spacing)] leading-[var(--paragraphe-p-medium-line-height)] [font-style:var(--paragraphe-p-medium-font-style)]">
                                    ابدأ الان مجانا
                                </span>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
