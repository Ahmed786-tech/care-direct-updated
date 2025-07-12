import { IBM_Plex_Sans,Poppins, Heebo, Andika, Roboto,Figtree,DM_Sans,Inter, Montserrat,Red_Hat_Display} from 'next/font/google';

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
  display: 'swap',
});

export const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heebo', 
  display: 'swap',
});

export const andika = Andika({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-andika',
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add or adjust weights as needed
  variable: '--font-figtree',
  display: 'swap',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can customize the weights you need
  variable: '--font-dmSans',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
  variable: '--font-red-hat-display',
  display: 'swap',
});
