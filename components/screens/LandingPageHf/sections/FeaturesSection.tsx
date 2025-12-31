import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): React.JSX.Element => {
    return (
        <Card className="group flex flex-col items-center justify-center gap-2 p-8 rounded-[40px] border-2 border-solid border-orangeorange-100 w-full hover:scale-105 hover:shadow-2xl hover:border-orangeorange-300 transition-all duration-300 bg-white overflow-hidden">
            <CardContent className="flex flex-col items-center justify-center gap-6 p-0 w-full">
                <div className="relative w-full aspect-square max-w-[180px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-orangeorange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-50" />
                    <img
                        className="w-[160px] h-auto object-cover relative z-10 group-hover:rotate-3 transition-transform duration-300"
                        alt="Gamification"
                        src="/image-23.png"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-3 w-full text-center">
                    <h4 className="text-2xl font-h4-bold text-black group-hover:text-orangeorange-600 transition-colors">
                        مغامرة تلعيبية شيقة
                    </h4>

                    <p className="text-lg font-h5-medium text-orangeorange-900 leading-relaxed">
                        نوفر نظام تلعيب محفز يعتمد على جمع النقاط والنجوم والشارات التي تجعل التعلم متعة لا تنتهي.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
