import { CheckCircle2Icon, XIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const includedFeatures = [
    { text: "تمارين تفاعلية مجانية", included: true },
    { text: "5 قلوب/اليوم", included: true },
    { text: "400 جوهرة/الشهر", included: true },
    { text: "متابعة الولي", included: true },
];

const excludedFeatures = [
    { text: "تقييمات تفاعلية", included: false },
    { text: "دروس وفيديوهات", included: false },
    { text: "اصلاح الانتاج بالذكاء الاصطناعي", included: false },
];

const allFeatures = [...includedFeatures, ...excludedFeatures];

export const FooterSection = (): React.JSX.Element => {
    return (
        <Card className="w-full max-w-[400px] bg-white rounded-[32px] border border-solid border-[#190901]">
            <CardContent className="flex flex-col items-end gap-4 p-8">
                <div className="inline-flex flex-col items-end gap-2">
                    <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-black text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [direction:rtl] [font-style:var(--h2-semibold-font-style)]">
                        مجاني
                    </h2>

                    <p className="font-h5-regular font-[number:var(--h5-regular-font-weight)] text-black text-[length:var(--h5-regular-font-size)] text-left tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                        استمتع بتمارين تفاعلية
                    </p>
                </div>

                <div className="font-h5-semibold font-[number:var(--h5-semibold-font-weight)] text-black text-[length:var(--h5-semibold-font-size)] text-center tracking-[var(--h5-semibold-letter-spacing)] leading-[var(--h5-semibold-line-height)] [direction:rtl] [font-style:var(--h5-semibold-font-style)]">
                    0دينار/ الشهر
                </div>

                <div className="inline-flex flex-col items-end gap-2 rounded-2xl">
                    {allFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-end gap-4"
                        >
                            <div
                                className={`font-paragraphe-p-medium font-[number:var(--paragraphe-p-medium-font-weight)] text-[length:var(--paragraphe-p-medium-font-size)] text-center tracking-[var(--paragraphe-p-medium-letter-spacing)] leading-[var(--paragraphe-p-medium-line-height)] [direction:rtl] [font-style:var(--paragraphe-p-medium-font-style)] ${feature.included ? "text-black" : "text-[#c7c7cc]"
                                    }`}
                            >
                                {feature.text}
                            </div>

                            {feature.included ? (
                                <CheckCircle2Icon className="w-5 h-5 text-green-500" />
                            ) : (
                                <XIcon className="w-5 h-5 text-[#c7c7cc]" />
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
