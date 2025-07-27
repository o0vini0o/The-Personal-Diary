import AddEntryModal from "./AddEntryModal";
import DiaryCard from "./DiaryCard";
import ViewEntryModal from "./ViewEntryModal";
import { useState } from "react";

const App = () => {
  const [addFlag, setAddFlag] = useState(false);
  const [openDiary, setOpenDiary] = useState({ open: false, date: null });
  const [diaries, setDiaries] = useState(
    JSON.parse(localStorage.getItem("diaries")) || []
  );

  // let diary = {}
  const handleClick = (date) => {
    setOpenDiary({
      open: true,
      date: date,
    });
  };
  const selectedDiary = diaries.find((diary) => diary.date === openDiary.date);

  return (
    <div>
      <nav className="flex justify-center py-2">
        <button onClick={() => setAddFlag(true)} className="btn btn-primary">
          add a new diary
        </button>
      </nav>
      {addFlag && (
        <AddEntryModal
          setAddFlag={setAddFlag}
          setDiaries={setDiaries}
          diaries={diaries}
        />
      )}
      <div className="grid grid-cols-2 gap-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {diaries.map((diary) => (
          <DiaryCard
            key={diary.date}
            diary={diary}
            handleClick={handleClick}
            setOpenDiary={setOpenDiary}
          />
        ))}
      </div>
      {openDiary.open && (
        <ViewEntryModal
          diary={selectedDiary}
          setOpenDiary={setOpenDiary}
          setDiaries={setDiaries}
        />
      )}
    </div>
  );
};

export default App;
