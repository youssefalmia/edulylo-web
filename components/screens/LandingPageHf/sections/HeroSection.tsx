import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    { text: "محتوى اللغة الفرنسية" },
    { text: "تمارين تفاعلية" },
    { text: "فيديوهات شرح الدروس" },
    { text: "10 قلوب/اليوم" },
    { text: "2000 جوهرة/الشهر" },
    { text: "تقييمات تفاعلية" },
    { text: "اصلاح الانتاج بالذكاء الاصطناعي" },
    { text: "متابعة الولي" },
];

export const HeroSection = (): React.JSX.Element => {
    return (
        <Card className="flex flex-col items-end gap-8 px-4 py-8 bg-white rounded-[32px] border-[3px] border-solid border-[#f75808]">
            <CardContent className="flex flex-col w-full gap-8 p-0">
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] text-center tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [direction:rtl] [font-style:var(--h2-semibold-font-style)]">
                        عرض
                    </h2>

                    <img
                        className="w-[184px] h-[92px] object-cover"
                        alt="Image"
                        src="/image-26.png"
                    />

                    <h3 className="font-h3-light font-[number:var(--h3-light-font-weight)] text-black text-[length:var(--h3-light-font-size)] text-left tracking-[var(--h3-light-letter-spacing)] leading-[var(--h3-light-line-height)] [direction:rtl] [font-style:var(--h3-light-font-style)]">
                        مغامرة تعليمية
                    </h3>
                </div>

                <div className="font-[number:var(--h4-bold-font-weight)] text-[length:var(--h4-bold-font-size)] font-h4-bold text-black text-center tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [direction:rtl] [font-style:var(--h4-bold-font-style)]">
                    20 دينار/ الشهر
                </div>

                <div className="flex flex-col items-end gap-2 rounded-2xl">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex h-[46px] items-center justify-end gap-4 w-full"
                        >
                            <div className="font-h5-regular font-[number:var(--h5-regular-font-weight)] text-black text-[length:var(--h5-regular-font-size)] text-center tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                                {feature.text}
                            </div>

                            <CheckCircleIcon className="w-10 h-10 text-green-500" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
