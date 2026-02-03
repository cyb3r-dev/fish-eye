import "./globals.css";

export const metadata = {
  title: "Fish Eye",
  description: "Site de photographes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
