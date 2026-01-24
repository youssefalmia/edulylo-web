import type { Metadata } from "next";
import { Playpen_Sans, Inter } from "next/font/google";
import "./globals.css";

const playpenSans = Playpen_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-playpen-sans",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Edulylo - منصة تعليمية",
    description: "منصة تعليمية مشوقة للأطفال",
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl">
            <body className={`${playpenSans.variable} ${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
