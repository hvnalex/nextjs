
import '@styles/globals.css'; // or '@styles/globals.css' if alias is set
import nav from "@components/nav";
import provider from '@components/provider';
export const metadata = {
  title: "Promptopia",
  description: "AI SOLUTIONS",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}
        <nav/>
        <provider/>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
