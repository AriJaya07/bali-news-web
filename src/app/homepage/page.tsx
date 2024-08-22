import Footer from "@/components/@common/footer";
import Navbar from "@/components/@common/header";
import Home from "@/components/home/home";

export default function Homepage(): JSX.Element {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
