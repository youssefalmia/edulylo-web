import { CheckCircleIcon, Sparkles } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface HeroSectionProps {
    billingPeriod: 1 | 3 | 6 | 12;
}

export const HeroSection = ({ billingPeriod }: HeroSectionProps): React.JSX.Element => {
    const basePrice = 20;
    const discountMap = { 1: 1, 3: 0.89, 6: 0.75, 12: 0.55 };
    const totalPrice = Math.round(basePrice * billingPeriod * discountMap[billingPeriod]);
    const monthlyEquivalent = Math.round(totalPrice / billingPeriod);

    return (
        <Card className="relative flex flex-col items-center gap-8 px-4 py-8 bg-white rounded-[40px] border-[4px] border-solid border-orangeorange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orangeorange-200 overflow-hidden group h-full">
            <div className="absolute top-0 right-0 bg-orangeorange-500 text-white px-6 py-2 rounded-bl-[24px] font-h6-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                الأكثر طلباً
            </div>

            <CardContent className="flex flex-col w-full gap-6 p-0 h-full mt-4">
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h2 className="text-3xl font-h2-bold text-black text-center">
                        عرض مغامرة
                    </h2>

                    <img
                        className="w-[160px] h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                        alt="Image"
                        src="/image-26.png"
                    />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="text-4xl font-h1-bold text-orangeorange-600">
                        {totalPrice} دينار
                    </div>
                    {billingPeriod > 1 && (
                        <div className="text-sm font-h6-medium text-gray-500">
                            (أي بمعدل {monthlyEquivalent} دينار / الشهر)
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between w-full border-b border-orange-50 pb-2 last:border-0"
                        >
                            <CheckCircleIcon className="w-6 h-6 text-orangeorange-500 shrink-0" />
                            <div className="font-paragraphe-p-medium text-right text-black">
                                {feature.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto w-full pt-6">
                    <Button asChild className="w-full h-14 rounded-2xl bg-orangeorange-500 hover:bg-orangeorange-600 text-white font-h5-bold transition-all shadow-xl shadow-orangeorange-200 cursor-pointer">
                        <a href="/coming-soon">اشترك الآن</a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
