import React from "react";

const motivationalElements = [
    {
        title: "القلوب",
        description:
            "تنظم عدد المحاولات وتساعد الطفل على التركيز والتعلم من الخطأ دون ضغط.",
        icon: "/image-7.png",
    },
    {
        title: "الجواهر",
        description:
            "مكافآت تحفيزية تشجع الطفل على التقدم، دون أن تؤثر على مساره التعليمي.",
        icon: "/image-18-1.png",
    },
];

export const TestimonialsSection = (): React.JSX.Element => {
    return (
        <section className="flex flex-col w-full max-w-[820px] items-center justify-center gap-4 md:gap-6 px-5 md:px-10 py-8 md:py-12 bg-bleusky-100 rounded-[32px]">
            <h2 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-black text-[length:var(--h5-bold-font-size)] text-center tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
                كيف نحفز الطفل على التعلم؟
            </h2>

            <p className="font-h6-light font-[number:var(--h6-light-font-weight)] text-black text-[length:var(--h6-light-font-size)] text-center tracking-[var(--h6-light-letter-spacing)] leading-[var(--h6-light-line-height)] [font-style:var(--h6-light-font-style)] px-4">
                نستخدم عناصر تحفيزية بسيطة لمساعدة الأطفال على حب التعلم والاستمرار فيه.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full mt-4">
                {motivationalElements.map((element, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-3 text-center"
                    >
                        <img
                            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                            alt={element.title}
                            src={element.icon}
                        />
                        <div className="space-y-2">
                            <h3 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-black text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
                                {element.title}
                            </h3>
                            <p className="font-h6-light font-[number:var(--h6-light-font-weight)] text-black text-[length:var(--h6-light-font-size)] tracking-[var(--h6-light-letter-spacing)] leading-[var(--h6-light-line-height)] [font-style:var(--h6-light-font-style)]">
                                {element.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
