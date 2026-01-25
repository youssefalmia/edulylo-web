"use client";

import { CheckIcon, Play } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { WaitingListSection } from "./WaitingListSection";

const features = [
    { text: "مطابق للبرامج الرسمية التونسية" },
    { text: "آمن للأطفال" },
    { text: "متابعة للأولياء" },
    { text: "بدون إعلانات" },
];

export const CallToActionSection = (): React.JSX.Element => {
    return (
        <section className="flex flex-col items-center lg:items-start gap-6 md:gap-8 w-full text-center lg:text-right">
            <div className="flex flex-col items-center lg:items-start justify-center gap-4 w-full">
                <div className="relative flex flex-col items-center lg:items-start justify-end w-full">
                    <h1 className="w-full font-h1-bold text-[40px] md:text-[56px] lg:text-[64px] text-black tracking-tight leading-[1.1]">
                        منصة ذكية{" "}
                        <span className="relative inline-block text-orangeorange-500">
                            تتأقلم
                            <img
                                className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-full max-w-[200px] h-auto scale-110"
                                alt="Underline decoration"
                                src="/underline-10.svg"
                            />
                        </span>
                        {" "}مع مستوى كل تلميذ تونسي
                    </h1>
                </div>

                <p className="w-full max-w-xl font-h5-medium text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
                    Edulylo منصة تعليمية تفاعلية تعاون تلامذة السنة السادسة ابتدائي على المراجعة للامتحانات بطريقة ممتعة
                    وتبني مسار شخصي يركز على اللي يلزمهم بالضبط قبل الامتحان.
                </p>
            </div>

            <WaitingListSection />

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <span className="font-paragraphe-p-medium text-gray-700 whitespace-nowrap text-sm md:text-base">
                            {feature.text}
                        </span>
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                ))}
            </div>
        </section>
    );
};
