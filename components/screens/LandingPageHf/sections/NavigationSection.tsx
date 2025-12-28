import React from "react";

const navigationItems = [
    {
        text: "العاب",
        bgColor: "bg-purple-300",
        rotation: "rotate-[-2.76deg]",
        position: "top-[5%] right-[2%]",
        textColor: "text-black",
    },
    {
        text: "تحديات",
        bgColor: "bg-orangeorange-200",
        rotation: "rotate-[8.43deg]",
        position: "top-[45%] right-[0%]",
        textColor: "text-black",
    },
    {
        text: "جوائز",
        bgColor: "bg-greengreen-300",
        rotation: "rotate-[-4.36deg]",
        position: "top-[70%] right-[2%]",
        textColor: "text-black",
    },
    {
        text: "تعلم",
        bgColor: "bg-roserose-500",
        rotation: "rotate-[-4.33deg]",
        position: "top-[48%] left-[0%]",
        textColor: "text-black",
    },
    {
        text: "نقاط",
        bgColor: "bg-bleusky-500",
        rotation: "rotate-[10.94deg]",
        position: "top-[17%] left-[8%]",
        textColor: "text-orangeorange-950",
    },
];

const decorativeImages = [
    {
        src: "/image-10.png",
        position: "top-[25%] right-[0%]",
        size: "w-[35px] h-[33px] md:w-[45px] md:h-[43px]",
    },
    {
        src: "/image-11.png",
        position: "top-[0%] left-[25%]",
        size: "w-5 h-5 md:w-6 md:h-6",
    },
    {
        src: "/image-18-1.png",
        position: "top-[72%] left-[3%]",
        size: "w-[35px] h-[32px] md:w-[43px] md:h-[39px]",
    },
];

export const NavigationSection = (): React.JSX.Element => {
    return (
        <section className="relative w-full max-w-[350px] md:max-w-[422px] h-[280px] md:h-[320px] mx-auto">
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[25px] md:h-[30px] bg-orangeorange-900 rounded-[122.66px/15.17px] opacity-40" />

            <img
                className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[200px] md:w-[255px] h-auto object-contain"
                alt="Character illustration"
                src="/image-6.png"
            />

            <div className="absolute inset-0">
                {navigationItems.map((item, index) => (
                    <button
                        key={index}
                        className={`flex w-[70px] md:w-[86px] h-[26px] md:h-[29px] items-center justify-center p-2 absolute ${item.position} ${item.bgColor} rounded-xl md:rounded-2xl ${item.rotation} cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                        <span
                            className={`font-paragraphe-p-medium font-[number:var(--paragraphe-p-medium-font-weight)] ${item.textColor} text-sm md:text-[length:var(--paragraphe-p-medium-font-size)] tracking-[var(--paragraphe-p-medium-letter-spacing)] leading-[var(--paragraphe-p-medium-line-height)] [font-style:var(--paragraphe-p-medium-font-style)]`}
                        >
                            {item.text}
                        </span>
                    </button>
                ))}

                {decorativeImages.map((image, index) => (
                    <img
                        key={index}
                        className={`absolute ${image.position} ${image.size} object-cover`}
                        alt="Decorative icon"
                        src={image.src}
                    />
                ))}
            </div>
        </section>
    );
};
