import "./globals.css";
import {League_Spartan} from "next/font/google";
import Image from "next/image";

const league_spartan = League_Spartan({
    subsets: ["latin"],
    variable: "--font-league-spartan",
});

export const metadata = {
    title: "Frontend Mentor | Job Listings",
    description: "Frontendmentor app, job listings with filtering",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${league_spartan.variable} min-h-full bg-light-gray-bg`}>
            <body className="text-base">
                <div className="bg-cyan">
                    <Image
                        className="w-full h-[156px] aspect-auto md:hidden"
                        src="/bg-header-mobile.svg"
                        width={375}
                        height={156}
                    ></Image>
                    <Image
                        className="w-full h-[156px] aspect-auto hidden md:block"
                        src="/bg-header-desktop.svg"
                        width={1440}
                        height={156}
                    ></Image>
                </div>
               
                {children}
            </body>
        </html>
    );
}
