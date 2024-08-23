import Footer from "@/components/@common/footer";
import Navbar from "@/components/@common/navBar";
import NewsApp from "@/components/newsApp/newsApp";

export default function NewsAppPage(): JSX.Element {
    return (
        <div className="">
            <Navbar />
            <NewsApp />
            <Footer />
        </div>
    )
}