import { useContext } from "react";
import { DiaryContext } from "../context";
import DiaryCard from "./DiaryCard";

const DiaryList = () => {
  const { diaries, setOpenDiary } = useContext(DiaryContext);
  const handleClick = (date) => {
    setOpenDiary({
      open: true,
      date: date,
    });
  };
  return (
    <div className="grid grid-cols-2 gap-8 p-4 md:grid-cols-3 lg:grid-cols-4">
      {diaries.map((diary) => (
        <DiaryCard key={diary.date} diary={diary} handleClick={handleClick} />
      ))}
    </div>
  );
};
export default DiaryList;
