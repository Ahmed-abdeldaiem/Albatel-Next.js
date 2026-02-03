/**
 * Global font configuration.
 * Change the font here to apply it across the entire app.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
import { Cairo } from "next/font/google";

export const primaryFont = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-primary",
  display: "swap",
});
