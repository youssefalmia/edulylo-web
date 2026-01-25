"use client";

import React, { useState } from "react";
import { Loader2, Mail, CheckCircle } from "lucide-react";

export const WaitingListSection = (): React.JSX.Element => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch('/api/waiting-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: data.message });
                setEmail("");
            } else {
                setMessage({ type: 'error', text: data.error || 'حدث خطأ ما' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'فشل الاتصال بالخادم' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="w-full">
            <div className="flex flex-col items-center lg:items-start gap-6 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <h2 className="font-h3-bold text-2xl md:text-3xl font-black text-black">
                        انضم إلى قائمة الانتظار
                        واحصل على
                    </h2>
                    <span className="bg-purple-600 text-white px-6 py-2 rounded-[20px] text-base font-bold animate-wiggle-periodic">
                        الشهر الأول بلاش
                    </span>
                </div>

                <div className="w-full max-w-xl">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="أدخل بريدك الإلكتروني"
                                required
                                className="w-full px-6 py-3 rounded-[14px] bg-white border border-orangeorange-200 shadow-sm focus:border-orangeorange-300 focus:ring-4 focus:ring-orangeorange-100 outline-none transition-all placeholder:text-gray-500 text-right text-gray-700 h-full"
                                dir="rtl"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-8 py-3 bg-orangeorange-500 hover:bg-orangeorange-600 text-white font-h5-bold text-lg rounded-[14px] transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] flex items-center justify-center gap-2 shadow-[0px_4px_10px_rgba(237,108,42,0.3)]"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "سجل الان"
                            )}
                        </button>
                    </form>
                </div>

                {message && (
                    <div className={`mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium animate-in fade-in slide-in-from-bottom-2 ${message.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                        {message.type === 'success' && <CheckCircle className="w-4 h-4" />}
                        {message.text}
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-2deg) scale(1); }
                    2% { transform: rotate(2deg) scale(1.1); }
                    4% { transform: rotate(-6deg) scale(1.1); }
                    6% { transform: rotate(2deg) scale(1.1); }
                    8% { transform: rotate(-6deg) scale(1.1); }
                    10% { transform: rotate(-2deg) scale(1); }
                }
                .animate-wiggle-periodic {
                    animation: wiggle 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
