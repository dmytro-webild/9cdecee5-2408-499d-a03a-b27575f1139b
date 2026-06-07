import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'L&Z Hair Salon | Genova GE | Parrucchiere Professionale',
  description: 'L&Z Hair Salon a Genova offre tagli, colorazioni e trattamenti personalizzati per uomini e donne. Scopri la nostra professionalità e prenota il tuo appuntamento.',
  keywords: ["parrucchiere Genova, salone di bellezza Genova, taglio capelli, colorazione, acconciature, trattamenti capelli"],
  openGraph: {
    "title": "L&Z Hair Salon | Trasforma il tuo Stile a Genova",
    "description": "L&Z Hair Salon a Genova offre tagli, colorazioni e trattamenti personalizzati per uomini e donne. Scopri la nostra professionalità e prenota il tuo appuntamento.",
    "url": "https://www.lz-hairsalon.it",
    "siteName": "L&Z Hair Salon",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/barbershop-washbasin-with-professional-chairs_23-2148298338.jpg",
        "alt": "Donna con acconciatura elegante in un salone di bellezza"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "L&Z Hair Salon | Trasforma il tuo Stile a Genova",
    "description": "L&Z Hair Salon a Genova offre tagli, colorazioni e trattamenti personalizzati per uomini e donne. Scopri la nostra professionalità e prenota il tuo appuntamento.",
    "images": [
      "http://img.b2bpic.net/free-photo/barbershop-washbasin-with-professional-chairs_23-2148298338.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
