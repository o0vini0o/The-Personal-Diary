import AddEntryModal from "./AddEntryModal";
import { useState } from "react";

const App = () => {
  const [addFlag, setAddFlag] = useState(false);

  return (
    <div>
      <button onClick={() => setAddFlag(true)}>add a new diary</button>
      {addFlag && <AddEntryModal setAddFlag={setAddFlag} />}
    </div>
  );
};

export default App;
