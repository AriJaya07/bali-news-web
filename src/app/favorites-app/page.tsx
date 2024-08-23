import Footer from "@/components/@common/footer";
import Navbar from "@/components/@common/navBar";
import Favorites from "@/components/favorites/favorites";

export default function FavoritesPage(): JSX.Element {
  return (
    <div className="">
      <Navbar />
      <Favorites />
      <Footer />
    </div>
  );
}
