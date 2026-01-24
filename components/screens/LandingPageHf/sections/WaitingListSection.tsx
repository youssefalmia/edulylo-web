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
        <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-purple-50/50 -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="p-3 bg-purple-100 rounded-2xl">
                        <Mail className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="font-h2-bold text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        انضم إلى قائمة الانتظار
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                        كن أول من يعلم عند الإطلاق واحصل على مكافآت ومزايا حصرية مخصصة للمشتركين الأوائل في منصتنا.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white p-2 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="أدخل بريدك الإلكتروني"
                                required
                                className="w-full px-6 py-4 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-gray-400 text-right"
                                dir="rtl"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl md:rounded-2xl transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "سجل الآن"
                            )}
                        </button>
                    </form>
                </div>

                {message && (
                    <div className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium animate-in fade-in slide-in-from-bottom-2 ${message.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                        {message.type === 'success' && <CheckCircle className="w-4 h-4" />}
                        {message.text}
                    </div>
                )}
            </div>
        </section>
    );
};
