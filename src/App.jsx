import List from "./components/List/List";
import { ListProvider } from "./context/ListProvider";

export default function App() {
  return (
    <ListProvider>
      <List />
    </ListProvider>

  )
  }