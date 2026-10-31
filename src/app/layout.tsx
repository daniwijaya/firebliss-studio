import type {Metadata} from "next";import type {ReactNode} from "react";import "./globals.css";
export const metadata:Metadata={title:{default:"Firebliss Design Studio",template:"%s | Firebliss Design Studio"},description:"Independent design studio combining creativity, usability, and business understanding.",metadataBase:process.env.NEXT_PUBLIC_SITE_URL?new URL(process.env.NEXT_PUBLIC_SITE_URL):undefined};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
