import { createContext, useState } from "react";

const DiaryContext = createContext();
export const DiaryProvider = ({ children }) => {
  const [addFlag, setAddFlag] = useState(false);
  const [openDiary, setOpenDiary] = useState({ open: false, date: null });
  const [diaries, setDiaries] = useState(
    JSON.parse(localStorage.getItem("diaries")) || []
  );

  return (
    <DiaryContext
      value={{
        addFlag,
        setAddFlag,
        openDiary,
        setOpenDiary,
        diaries,
        setDiaries,
      }}
    >
      {children}
    </DiaryContext>
  );
};
export default DiaryContext;
