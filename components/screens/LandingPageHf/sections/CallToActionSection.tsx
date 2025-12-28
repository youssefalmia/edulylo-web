"use client";

import { CheckIcon } from "lucide-react";
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
        <section className="flex flex-col items-end gap-4 md:gap-6 w-full">
            <div className="flex flex-col items-end justify-center gap-3 w-full">
                <div className="relative flex flex-col items-end justify-end w-full">
                    <h1 className="w-full font-h1-semiblod font-[number:var(--h1-semiblod-font-weight)] text-black text-[length:var(--h1-semiblod-font-size)] tracking-[var(--h1-semiblod-letter-spacing)] leading-[var(--h1-semiblod-line-height)] [font-style:var(--h1-semiblod-font-style)] text-right">
                        منصة ذكية{" "}
                        <span className="relative inline-block">
                            تتأقلم
                            <img
                                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[180px] md:w-[220px] h-auto scale-150 md:scale-[1.7]"
                                alt="Underline decoration"
                                src="/underline-10.svg"
                            />
                        </span>
                        {" "}مع مستوى كل تلميذ تونسي
                    </h1>
                </div>

                <p className="w-full font-h6-medium font-[number:var(--h6-medium-font-weight)] text-black text-[length:var(--h6-medium-font-size)] text-justify tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
                    Edulylo منصة تعليمية تفاعلية مخصصة لتعليم اللغة الفرنسية لتلاميذ السنة
                    السادسة ابتدائي. تعتمد على التعلم التكيفي، حيث يتغير محتوى التمارين
                    حسب مستوى كل تلميذ، من خلال فيديوهات قصيرة، تمارين تفاعلية، وألعاب
                    تعليمية ممتعة.
                </p>
            </div>

            <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orangeorange-500 hover:bg-orangeorange-600 rounded-lg shadow-md transition-all">
                <span className="font-h6-semibold font-[number:var(--h6-semibold-font-weight)] text-texticonprimary-white text-[length:var(--h6-semibold-font-size)] text-center tracking-[var(--h6-semibold-letter-spacing)] leading-[var(--h6-semibold-line-height)] [font-style:var(--h6-semibold-font-style)]">
                    ابدأ الان مجانا
                </span>
            </Button>

            <div className="flex flex-wrap items-center justify-end gap-2 md:gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-2"
                    >
                        <span className="font-paragraphe-p-regular font-[number:var(--paragraphe-p-regular-font-weight)] text-black text-[length:var(--paragraphe-p-regular-font-size)] tracking-[var(--paragraphe-p-regular-letter-spacing)] leading-[var(--paragraphe-p-regular-line-height)] [font-style:var(--paragraphe-p-regular-font-style)] whitespace-nowrap">
                            {feature.text}
                        </span>
                        <CheckIcon className="w-5 h-5 text-greengreen-300 flex-shrink-0" />
                    </div>
                ))}
            </div>
        </section>
    );
};
