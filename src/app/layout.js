import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-base-200" data-theme="darkTheme">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
