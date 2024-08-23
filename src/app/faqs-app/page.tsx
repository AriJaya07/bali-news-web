import Footer from "@/components/@common/footer";
import Navbar from "@/components/@common/navBar";
import FaqsApp from "@/components/faqsApp/faqsApp";

export default function FaqsPage(): JSX.Element {
    return (
        <div className="">
            <Navbar />
            <FaqsApp />
            <Footer />
        </div>
    )
}