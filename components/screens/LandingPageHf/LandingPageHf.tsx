"use client";

import React, { useState } from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoSection } from "./sections/InfoSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WaitingListSection } from "./sections/WaitingListSection";

export const LandingPageHf = (): React.JSX.Element => {
    const [billingPeriod, setBillingPeriod] = useState<1 | 3 | 6 | 12>(1);

    const billingOptions = [
        { value: 1, label: "شهر", discount: "" },
        { value: 3, label: "3 أشهر", discount: "(-11%)" },
        { value: 6, label: "6 أشهر", discount: "(-25%)" },
        { value: 12, label: "سنة", discount: "(-45%)" },
    ];

    return (
        <div className="bg-white w-full min-h-screen" dir="rtl">
            <HeaderSection />

            <section id="home" className="relative bg-gradient-to-b from-orangeorange-50 to-white py-8 md:py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <CallToActionSection />
                        </div>
                        <div className="order-1 lg:order-2">
                            <NavigationSection />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-purple-50 py-4 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
                    <img
                        className="w-8 h-9 object-cover"
                        alt="Image"
                        src="/image-12.png"
                    />
                    <p className="font-h5-semibold font-[number:var(--h5-semibold-font-weight)] text-purple-200 text-[length:var(--h5-semibold-font-size)] tracking-[var(--h5-semibold-letter-spacing)] leading-[var(--h5-semibold-line-height)] [font-style:var(--h5-semibold-font-style)] text-center">
                        قريبا: مواد أخرى ومستويات إضافية
                    </p>
                </div>
            </section>

            <section id="features" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
                        <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
                            مميزاتنا
                        </h2>
                        <img
                            className="w-7 h-[54px] object-cover"
                            alt="Diamond"
                            src="/image-9.png"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <FeaturesSection />
                        <InfoSection />
                        <MainContentSection />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-5xl mx-auto flex justify-center">
                    <TestimonialsSection />
                </div>
            </section>

            <section id="services" className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
                        <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
                            لمحة على محتوانا
                        </h2>
                        <img
                            className="w-[38px] h-[34px] object-cover"
                            alt="Gem"
                            src="/image-18-1.png"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl animate-pulse" />
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl animate-pulse" />
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl animate-pulse" />
                    </div>
                </div>
            </section>

            <section id="offers" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)] text-center mb-6">
                        عروضنا
                    </h2>

                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-[20px] p-1 bg-orangeorange-100 border border-orangeorange-200">
                            {billingOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setBillingPeriod(option.value as any)}
                                    className={`px-4 md:px-8 py-3 rounded-[16px] font-h6-bold transition-all duration-300 flex flex-col md:flex-row items-center gap-1 ${billingPeriod === option.value
                                        ? "bg-roserose-500 text-white shadow-lg scale-105"
                                        : "bg-transparent text-black hover:bg-orangeorange-200"
                                        }`}
                                >
                                    <span>{option.label}</span>
                                    {option.discount && (
                                        <span className={`text-[10px] md:text-xs ${billingPeriod === option.value ? "text-roserose-100" : "text-roserose-500"}`}>
                                            {option.discount}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        <FooterSection billingPeriod={billingPeriod} />
                        <HeroSection billingPeriod={billingPeriod} />
                        <ServicesSection billingPeriod={billingPeriod} />
                    </div>
                </div>
            </section>

            <WaitingListSection />

            <section id="contact" className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-orangeorange-200 rounded-[80px] p-8 md:p-12 lg:p-16 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-2 lg:order-1 flex justify-center">
                                <img
                                    className="w-full max-w-[300px] lg:max-w-[401px] h-auto object-cover"
                                    alt="Mascot"
                                    src="/image-17.png"
                                />
                            </div>
                            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6 text-right">
                                <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-orangeorange-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)] text-center lg:text-right">
                                    مستعد لتبدأ رحلة تعليمية مشوقة؟
                                </h2>
                                <a href="/coming-soon" className="px-10 py-4 bg-orangeorange-500 hover:bg-orangeorange-600 shadow-[0px_10px_20px_-5px_#ed6c2a] text-white rounded-2xl font-h5-bold transition-all hover:scale-105 active:scale-95 cursor-pointer">
                                    ابدأ الان مجانا
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <img
                        className=""
                        alt="Footer decoration"
                        src="/group-3.png"
                    />
                </div>
            </section>
        </div>
    );
};
