import About from "./manage/about";
import Content from "./manage/content";

export default function NewsApp(): JSX.Element {
    return (
        <div className="p-[5em]">
            <About />
            <Content />
        </div>
    )
}