import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
    title: string;
    description: string;
    image: string;
    imageWidth: string;
    imageClass?: string;
}

const features: Feature[] = [
    {
        title: "مغامرة تلعيبية شيقة",
        description: "نوفر نظام تلعيب محفز يعتمد على جمع النقاط والنجوم والشارات التي تجعل التعلم متعة لا تنتهي.",
        image: "/image-23.png",
        imageWidth: "w-[160px]",
        imageClass: "group-hover:rotate-3",
    },
    {
        title: "تعلم تكيفي",
        description: "نظامنا الذكي يحلل أداء طفلك ويعدل صعوبة التمارين والمحتوى لضمان أفضل مسار تعليمي مخصص.",
        image: "/image-18.png",
        imageWidth: "w-[180px]",
        imageClass: "group-hover:scale-110",
    }
];

export const FeaturesSection = (): React.JSX.Element => {
    return (
        <>
            {features.map((feature, index) => (
                <Card key={index} className="group flex flex-col items-center justify-center gap-2 p-8 rounded-[40px] border-2 border-solid border-orangeorange-100 w-full hover:scale-105 hover:shadow-2xl hover:border-orangeorange-300 transition-all duration-300 bg-white overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center gap-6 p-0 w-full">
                        <div className="relative w-full aspect-square max-w-[180px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-orangeorange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-50" />
                            <img
                                className={`${feature.imageWidth} h-auto object-cover relative z-10 transition-transform duration-300 ${feature.imageClass || ''}`}
                                alt={feature.title}
                                src={feature.image}
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 w-full text-center">
                            <h4 className="text-2xl font-h4-bold text-black group-hover:text-orangeorange-600 transition-colors">
                                {feature.title}
                            </h4>

                            <p className="text-lg font-h5-medium text-orangeorange-900 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};
