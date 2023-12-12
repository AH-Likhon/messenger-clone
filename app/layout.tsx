import ToasterContext from "./context/ToasterContext";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Time Chat App",
  description: "Real Time Chat Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ToasterContext />
        {children}
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
