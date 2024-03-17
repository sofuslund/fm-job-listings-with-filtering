import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Job listings with filtering",
    description: "Frontendmentor app, job listings with filtering",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
