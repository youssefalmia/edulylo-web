import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-orangeorange-50 flex flex-col items-center justify-center p-4 text-center" dir="rtl">
            <div className="max-w-2xl bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-orangeorange-100 flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-orangeorange-100 rounded-full flex items-center justify-center animate-bounce">
                    <Rocket className="w-10 h-10 text-orangeorange-500" />
                </div>

                <h1 className="text-4xl md:text-5xl font-h1-semibold text-orangeorange-900 leading-tight">
                    edulylo يتم تحضيره حالياً
                </h1>

                <p className="text-xl text-gray-600 font-h5-medium max-w-lg">
                    نحن نعمل بجهد لنقدم لكم أفضل تجربة تعليمية. ترقبوا الإطلاق قريباً!
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-orangeorange-200 to-transparent" />

                <div className="flex flex-col items-center gap-4">
                    <p className="text-lg text-orangeorange-700 font-h6-semibold">
                        يمكنك الاستمتاع بتجربة مماثلة حالياً على edulysa.com
                    </p>

                    <a
                        href="https://edulysa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-orangeorange-500 hover:bg-orangeorange-600 text-white rounded-2xl font-h5-semibold transition-all hover:scale-105 active:scale-95 shadow-[0px_10px_20px_-10px_rgba(237,108,42,0.5)] flex items-center gap-3"
                    >
                        <span>زيارة edulysa.com</span>
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    </a>
                </div>

                <Link href="/" className="text-orangeorange-500 hover:underline font-h6-medium">
                    العودة إلى الرئيسية
                </Link>
            </div>
        </div>
    );
}
