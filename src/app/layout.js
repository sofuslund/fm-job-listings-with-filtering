import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Frontend Mentor | Job Listings",
    description: "Frontendmentor app, job listings with filtering",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className + " text-base"}>{children}</body>
        </html>
    );
}
