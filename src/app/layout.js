import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: 'Car Doctors Pro | %s',
    default: 'Car Doctors Pro'
  },
  description: 'Hello world'
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
        <Toaster />
      </body>
    </html>
  );
}
