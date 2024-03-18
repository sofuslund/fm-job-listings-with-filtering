import "./globals.css";
import {League_Spartan} from "next/font/google";

const league_spartan = League_Spartan({subsets: ["latin"], variable: "--font-league-spartan"});

export const metadata = {
    title: "Frontend Mentor | Job Listings",
    description: "Frontendmentor app, job listings with filtering",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${league_spartan.variable}`} >
            <body className="text-base">{children}</body>
        </html>
    );
}
