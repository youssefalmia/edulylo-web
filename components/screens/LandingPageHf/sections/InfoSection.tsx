import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const InfoSection = (): React.JSX.Element => {
    return (
        <Card className="flex flex-col w-full max-w-[400px] items-center justify-center gap-2 rounded-[32px] border border-solid border-black">
            <CardContent className="flex flex-col items-center gap-2 px-8 py-4">
                <div className="inline-flex items-center gap-2.5 p-2.5 flex-[0_0_auto]">
                    <img
                        className="w-[188px] h-[188px] object-cover"
                        alt="Image"
                        src="/image-25.png"
                    />
                </div>

                <h2 className="self-stretch h-[42px] font-h4-bold font-[number:var(--h4-bold-font-weight)] text-black text-[length:var(--h4-bold-font-size)] text-center tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [direction:rtl] [font-style:var(--h4-bold-font-style)]">
                    محتوى ممتع
                </h2>

                <p className="self-stretch font-h5-regular font-[number:var(--h5-regular-font-weight)] text-orangeorange-900 text-[length:var(--h5-regular-font-size)] text-center tracking-[var(--h5-regular-letter-spacing)] leading-[var(--h5-regular-line-height)] [direction:rtl] [font-style:var(--h5-regular-font-style)]">
                    فيديوهات قصيرة يقدمها معلمون يتبعها تمارين تفاعلية لترسيخ المفهوم.
                </p>
            </CardContent>
        </Card>
    );
};
