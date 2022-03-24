import Footer from "components/Layout/Footer";
import Navbar from "components/Layout/Navbar";
import { useTheme } from "helpers/hooks";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className={`--theme-${theme}`}>
      <div className="--themed-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
