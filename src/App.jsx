import AddEntryModal from "./AddEntryModal";
import DiaryCard from "./DiaryCard";
import ViewEntryModal from "./ViewEntryModal";
import { useState } from "react";

const App = () => {
  const [addFlag, setAddFlag] = useState(false);
  const [openDiary, setOpenDiary] = useState(false);
  const [diaries, setDiaries] = useState(
    JSON.parse(localStorage.getItem("diaries")) || []
  );

  const test = {
    date: "2025-07-22",
    title: "Gentle Nighttime Reflections",
    pic: "https://images.pexels.com/photos/416947/pexels-photo-416947.jpeg",
    text: "Tonight I took a slow walk through my neighborhood just as the street lamps flickered on. The air was cool, and houses glowed softly under the deepening twilight. I walked with my thoughts, noticing the stillness of empty roads and the comforting hush that comes as night falls. Passing by a cozy porch light, I felt a sense of quiet contentment. It was a simple, serene moment that made me appreciate the beauty of everyday life.",
  };
  return (
    <div data-theme="dim">
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
      <div>
        <DiaryCard diary={test} setOpenDiary={setOpenDiary} />
      </div>
      {openDiary && <ViewEntryModal diary={test} setOpenDiary={setOpenDiary} />}
    </div>
  );
};

export default App;
