"use client";

import { CheckIcon, Play } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const features = [
    { text: "مطابق للبرامج الرسمية التونسية" },
    { text: "آمن للأطفال" },
    { text: "متابعة للأولياء" },
    { text: "بدون إعلانات" },
];

export const CallToActionSection = (): React.JSX.Element => {
    return (
        <section className="flex flex-col items-center lg:items-end gap-6 md:gap-8 w-full text-center lg:text-right">
            <div className="flex flex-col items-center lg:items-end justify-center gap-4 w-full">
                <div className="relative flex flex-col items-center lg:items-end justify-end w-full">
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
                    Edulylo منصة تعليمية تفاعلية مخصصة لتعليم اللغة الفرنسية لتلاميذ السنة
                    السادسة ابتدائي. تعتمد على التعلم التكيفي، حيث يتغير محتوى التمارين
                    حسب مستوى كل تلميذ.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:justify-end">
                <Button asChild className="group relative h-16 px-10 bg-orangeorange-500 hover:bg-orangeorange-600 rounded-[20px] shadow-[0px_10px_20px_-10px_#ed6c2a] transition-all hover:scale-105 active:scale-95 cursor-pointer overflow-hidden">
                    <a href="/coming-soon" className="flex items-center gap-3">
                        <span className="text-xl font-h5-bold text-white relative z-10">
                            ابدأ الان مجانا
                        </span>
                        <Play className="w-5 h-5 fill-current relative z-10 group-hover:translate-x-1 transition-transform rotate-180" />
                    </a>
                </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 md:gap-6 mt-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm"
                    >
                        <span className="font-paragraphe-p-medium text-gray-700 whitespace-nowrap">
                            {feature.text}
                        </span>
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                ))}
            </div>
        </section>
    );
};
