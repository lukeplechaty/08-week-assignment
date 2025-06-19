import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Luke's Blog",
  description: "Blogs by Luke Plechaty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
