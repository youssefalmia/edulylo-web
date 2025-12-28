import React from "react";
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

export const LandingPageHf = (): React.JSX.Element => {
    return (
        <div className="bg-white w-full min-h-screen" dir="rtl">
            <HeaderSection />

            <section className="relative bg-gradient-to-b from-orangeorange-50 to-white py-8 md:py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <NavigationSection />
                        </div>
                        <div className="order-1 lg:order-2">
                            <CallToActionSection />
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

            <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
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

            <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16">
                <div className="absolute inset-0 bg-orangeorange-200 transform -rotate-1 -z-10" />
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
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl" />
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl" />
                        <div className="w-full aspect-video bg-gray-300 rounded-2xl" />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)] text-center mb-6">
                        عروضنا
                    </h2>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-2xl overflow-hidden border border-black">
                            <button className="px-6 py-3 bg-roserose-500 text-white font-h6-medium">
                                شهر
                            </button>
                            <button className="px-6 py-3 bg-white border-r border-black font-h6-medium">
                                <span className="text-black">3 أشهر </span>
                                <span className="text-roserose-500 font-extrabold">(-11%)</span>
                            </button>
                            <button className="px-6 py-3 bg-white border-r border-black font-h6-medium">
                                <span className="text-black">6 أشهر </span>
                                <span className="text-roserose-500 font-extrabold">(-25%)</span>
                            </button>
                            <button className="px-6 py-3 bg-white font-h6-medium">
                                <span className="text-black">سنة </span>
                                <span className="text-roserose-500 font-extrabold">(-45%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <FooterSection />
                        <HeroSection />
                        <ServicesSection />
                    </div>
                </div>
            </section>

            <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
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
                            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
                                <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-orangeorange-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)] text-center lg:text-right">
                                    مستعد لتبدأ رحلة تعليمية مشوقة؟
                                </h2>
                                <button className="px-6 py-3 bg-orangeorange-500 hover:bg-orangeorange-600 shadow-[0px_0px_10px_#ed6c2a] text-white rounded-lg font-h6-semibold font-[number:var(--h6-semibold-font-weight)] text-[length:var(--h6-semibold-font-size)] tracking-[var(--h6-semibold-letter-spacing)] leading-[var(--h6-semibold-line-height)] [font-style:var(--h6-semibold-font-style)] transition-colors">
                                    ابدأ الان مجانا
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <img
                        className="w-[199px] h-52"
                        alt="Footer decoration"
                        src="/group-3.png"
                    />
                </div>
            </section>
        </div>
    );
};
