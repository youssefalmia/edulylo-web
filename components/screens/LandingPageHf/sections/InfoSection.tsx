import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const InfoSection = (): React.JSX.Element => {
    return (
        <Card className="group flex flex-col w-full items-center justify-center gap-2 rounded-[40px] border-2 border-solid border-orangeorange-100 hover:scale-105 hover:shadow-2xl hover:border-orangeorange-300 transition-all duration-300 bg-white overflow-hidden">
            <CardContent className="flex flex-col items-center gap-6 p-8 w-full">
                <div className="relative w-full aspect-square max-w-[180px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-orangeorange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-50" />
                    <img
                        className="w-[180px] h-auto object-cover relative z-10 group-hover:-rotate-3 transition-transform duration-300"
                        alt="Engaging Content"
                        src="/image-25.png"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-3 w-full text-center">
                    <h2 className="text-2xl font-h4-bold text-black group-hover:text-orangeorange-600 transition-colors">
                        محتوى ممتع
                    </h2>

                    <p className="text-lg font-h5-medium text-orangeorange-900 leading-relaxed">
                        فيديوهات قصيرة يقدمها معلمون متميزون يتبعها تمارين تفاعلية ذكية لترسيخ المفاهيم بشكل مبسط.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
