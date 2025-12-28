import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): React.JSX.Element => {
    return (
        <Card className="flex flex-col items-center justify-center gap-2 p-8 rounded-[32px] border border-solid border-black w-full max-w-[400px]">
            <CardContent className="flex flex-col items-center justify-center gap-2 p-0 w-full">
                <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[302px]">
                    <img
                        className="w-[162px] h-[158px] object-cover"
                        alt="Image"
                        src="/image-23.png"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h4 className="self-stretch font-[number:var(--h4-bold-font-weight)] text-[length:var(--h4-bold-font-size)] text-center font-h4-bold text-black tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [direction:rtl] [font-style:var(--h4-bold-font-style)]">
                        مغامرة تلعيبية شيقة
                    </h4>

                    <p className="self-stretch font-h5-regular font-[number:var(--h5-regular-font-weight)] text-orangeorange-900 text-[length:var(--h5-regular-font-size)] text-justify tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                        نوفر نظام تلعيب محفز يعتمد على جمع النقاط والنجوم والشارات.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
