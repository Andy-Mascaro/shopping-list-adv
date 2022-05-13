import { useLists } from '../../context/ListProvider';

export default function Header() {
  const { list } = useLists();

  return <div>Items In List: {list.length}</div>;
}
