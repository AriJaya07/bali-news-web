
import Category from "./manage/category";
import Destinations from "./manage/destinations";
import ListFaqs from "./manage/listFaqs";
import Recommends from "./manage/recommends";

export default function Home(): JSX.Element {
    return (
        <div className="">
            <Recommends />
            <Destinations />
            <Category />
            <ListFaqs />
        </div>
    )
}