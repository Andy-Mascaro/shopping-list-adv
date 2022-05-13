import { useLists } from "../../context/ListProvider";


export default function Header() {
    const { list } = useLists();

    return <div>Items add to list: {list.length}</div>;

}