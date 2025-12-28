import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    { text: "تمارين تفاعلية" },
    { text: "فيديوهات شرح الدروس" },
    { text: "20 قلب/اليوم" },
    { text: "4000 جوهرة/الشهر" },
    { text: "تقييمات تفاعلية" },
    { text: "اصلاح الانتاج بالذكاء الاصطناعي" },
    { text: "متابعة الولي" },
];

export const ServicesSection = (): React.JSX.Element => {
    return (
        <Card className="w-full max-w-[400px] bg-white rounded-[32px] border border-solid border-[#190901]">
            <CardContent className="flex flex-col items-end gap-8 p-8">
                <div className="flex flex-col items-end justify-center gap-2 w-full">
                    <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [direction:rtl] [font-style:var(--h2-semibold-font-style)]">
                        العرض الأسطوري
                    </h2>

                    <p className="font-h3-light font-[number:var(--h3-light-font-weight)] text-black text-[length:var(--h3-light-font-size)] tracking-[var(--h3-light-letter-spacing)] leading-[var(--h3-light-line-height)] [direction:rtl] [font-style:var(--h3-light-font-style)]">
                        لتجربة تلعيبية أكثر
                    </p>
                </div>

                <div className="font-h4-bold font-[number:var(--h4-bold-font-weight)] text-[length:var(--h4-bold-font-size)] text-black text-center tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [direction:rtl] [font-style:var(--h4-bold-font-style)]">
                    35 دينار/ الشهر
                </div>

                <div className="flex flex-col items-end gap-2 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex h-[46px] items-center justify-end gap-4 w-full"
                        >
                            <div className="font-h5-regular font-[number:var(--h5-regular-font-weight)] text-black text-[length:var(--h5-regular-font-size)] text-center tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                                {feature.text}
                            </div>

                            <CheckCircle2Icon className="w-10 h-10 text-black" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
