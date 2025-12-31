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
        <section className="relative w-full max-w-[350px] md:max-w-[422px] h-[320px] md:h-[400px] mx-auto flex items-center justify-center">
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[25px] md:h-[30px] bg-orangeorange-900 rounded-[122.66px/15.17px] opacity-40 blur-md" />

            <img
                className="relative z-10 w-[240px] md:w-[320px] h-auto object-contain animate-float"
                alt="Character illustration"
                src="/image-6.png"
            />

            <div className="absolute inset-0 z-20">
                {navigationItems.map((item, index) => (
                    <a
                        key={index}
                        href="/coming-soon"
                        className={`flex w-[70px] md:w-[96px] h-[28px] md:h-[34px] items-center justify-center p-2 absolute ${item.position} ${item.bgColor} rounded-full shadow-lg border-2 border-white/50 ${item.rotation} cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 group`}
                    >
                        <span
                            className={`font-h6-bold ${item.textColor} text-xs md:text-sm tracking-tight`}
                        >
                            {item.text}
                        </span>
                    </a>
                ))}

                {decorativeImages.map((image, index) => (
                    <img
                        key={index}
                        className={`absolute ${image.position} ${image.size} object-cover animate-pulse opacity-80`}
                        alt="Decorative icon"
                        src={image.src}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
