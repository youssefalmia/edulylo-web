import { CheckCircle2Icon, XIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface FooterSectionProps {
    billingPeriod: 1 | 3 | 6 | 12;
}

export const FooterSection = ({ billingPeriod }: FooterSectionProps): React.JSX.Element => {
    return (
        <Card className="w-full max-w-[400px] bg-white rounded-[40px] border-2 border-solid border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300 flex flex-col h-full group">
            <CardContent className="flex flex-col items-center gap-6 p-8 h-full">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-3xl font-h2-bold text-black border-b-4 border-roserose-500 pb-1">
                        مجاني
                    </h2>

                    <p className="font-h5-medium text-gray-500 text-center">
                        استمتع بتمارين تفاعلية أساسية
                    </p>
                </div>

                <div className="text-4xl font-h1-bold text-black py-4">
                    0 دينار
                </div>

                <div className="flex flex-col items-center gap-4 w-full">
                    {allFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between w-full border-b border-gray-50 pb-2 last:border-0"
                        >
                            {feature.included ? (
                                <CheckCircle2Icon className="w-6 h-6 text-green-500 shrink-0" />
                            ) : (
                                <XIcon className="w-6 h-6 text-gray-300 shrink-0" />
                            )}
                            <div
                                className={`font-paragraphe-p-medium text-right ${feature.included ? "text-black" : "text-gray-400"
                                    }`}
                            >
                                {feature.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto w-full pt-6">
                    <Button asChild className="w-full h-14 rounded-2xl bg-black hover:bg-gray-800 text-white font-h5-bold transition-all shadow-xl hover:shadow-black/20 cursor-pointer">
                        <a href="/coming-soon">ابدأ الان</a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
