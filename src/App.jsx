import {
  AddEntryModal,
  ViewEntryModal,
  Heading,
  DiaryList,
} from "./components";
import { DiaryProvider } from "./context/DiaryContext.jsx";

const App = () => {
  return (
    <DiaryProvider>
      <Heading />
      <AddEntryModal />
      <DiaryList />
      <ViewEntryModal />
    </DiaryProvider>
  );
};
export default App;
