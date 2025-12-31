import { CheckCircle2Icon, Crown } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
    { text: "تمارين تفاعلية" },
    { text: "فيديوهات شرح الدروس" },
    { text: "20 قلب/اليوم" },
    { text: "4000 جوهرة/الشهر" },
    { text: "تقييمات تفاعلية" },
    { text: "اصلاح الانتاج بالذكاء الاصطناعي" },
    { text: "متابعة الولي" },
];

interface ServicesSectionProps {
    billingPeriod: 1 | 3 | 6 | 12;
}

export const ServicesSection = ({ billingPeriod }: ServicesSectionProps): React.JSX.Element => {
    const basePrice = 35;
    const discountMap = { 1: 1, 3: 0.89, 6: 0.75, 12: 0.55 };
    const totalPrice = Math.round(basePrice * billingPeriod * discountMap[billingPeriod]);
    const monthlyEquivalent = Math.round(totalPrice / billingPeriod);

    return (
        <Card className="relative w-full max-w-[400px] bg-[#190901] rounded-[40px] border-2 border-solid border-[#190901] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group h-full">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black px-6 py-2 rounded-bl-[24px] font-h6-bold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                العرض الأسطوري
            </div>

            <CardContent className="flex flex-col items-center gap-6 p-8 h-full mt-4">
                <div className="flex flex-col items-center gap-2 w-full">
                    <h2 className="text-3xl font-h2-bold text-white text-center">
                        الأسطورة
                    </h2>

                    <p className="font-h5-medium text-gray-400 text-center">
                        أفضل تجربة تعليمية متكاملة
                    </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="text-4xl font-h1-bold text-white py-4">
                        {totalPrice} دينار
                    </div>
                    {billingPeriod > 1 && (
                        <div className="text-sm font-h6-medium text-gray-400">
                            (أي بمعدل {monthlyEquivalent} دينار / الشهر)
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between w-full border-b border-white/10 pb-2 last:border-0"
                        >
                            <CheckCircle2Icon className="w-6 h-6 text-yellow-500 shrink-0" />
                            <div className="font-paragraphe-p-medium text-right text-gray-200">
                                {feature.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto w-full pt-6">
                    <Button asChild className="w-full h-14 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-h5-bold transition-all shadow-xl hover:shadow-yellow-500/20 cursor-pointer">
                        <a href="/coming-soon">كن أسطورة</a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
