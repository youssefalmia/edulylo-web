import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): React.JSX.Element => {
    return (
        <Card className="group flex flex-col w-full items-center justify-center gap-2 rounded-[40px] border-2 border-solid border-orangeorange-100 hover:scale-105 hover:shadow-2xl hover:border-orangeorange-300 transition-all duration-300 bg-white overflow-hidden">
            <CardContent className="flex flex-col items-center gap-6 p-8 w-full">
                <div className="relative w-full aspect-square max-w-[180px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-orangeorange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-50" />
                    <img
                        className="w-[180px] h-auto object-cover relative z-10 transition-transform duration-300 group-hover:scale-110"
                        alt="Adaptive Learning"
                        src="/image-18.png"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-3 w-full text-center">
                    <h4 className="text-2xl font-h4-bold text-black group-hover:text-orangeorange-600 transition-colors">
                        تعلم تكيفي
                    </h4>

                    <p className="text-lg font-h5-medium text-orangeorange-900 leading-relaxed">
                        نظامنا الذكي يحلل أداء طفلك ويعدل صعوبة التمارين والمحتوى لضمان أفضل مسار تعليمي مخصص.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
