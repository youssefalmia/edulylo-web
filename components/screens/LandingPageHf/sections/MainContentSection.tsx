import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): React.JSX.Element => {
    return (
        <Card className="w-full max-w-[400px] rounded-[32px] border border-solid border-black">
            <CardContent className="flex flex-col items-center gap-2 pt-4 pb-[21px] px-8">
                <div className="flex w-full max-w-[324px] h-[220px] items-center justify-center">
                    <img
                        className="w-[194px] h-[198px] object-cover"
                        alt="Image"
                        src="/image-18.png"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h4 className="w-full font-h4-bold font-[number:var(--h4-bold-font-weight)] text-[length:var(--h4-bold-font-size)] text-center text-black tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [direction:rtl] [font-style:var(--h4-bold-font-style)]">
                        تعلم تكيفي
                    </h4>

                    <p className="w-full font-h5-regular font-[number:var(--h5-regular-font-weight)] text-orangeorange-900 text-[length:var(--h5-regular-font-size)] text-center tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                        محتوى وصعوبة التمارين تتغير حسب إجابات طفلك وتقدمه.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
