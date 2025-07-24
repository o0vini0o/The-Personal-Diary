import { useEffect, useState } from "react";
const AddEntryModal = ({ setAddFlag, diaries, setDiaries }) => {
  const [diary, setDiary] = useState({
    date: "",
    title: "",
    pic: "",
    text: "",
  });
  const [blockSubmit, setBlockSubmit] = useState(false);

  useEffect(() => {
    if (diary.title && diary.date && diary.pic && diary.text)
      setBlockSubmit(false);
    else setBlockSubmit(true);
  }, [diary.title, diary.date, diary.pic, diary.text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiary((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (diaries.some((prop) => prop.date === diary.date))
      return alert("Entry for today already exists. Try again tomorrow!");

    const updated = [diary, ...diaries];
    setDiaries(updated);
    localStorage.setItem("diaries", JSON.stringify(updated));
    setAddFlag(false);
    setDiary({
      date: "",
      title: "",
      pic: "",
      text: "",
    });
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        {/* 背景遮罩层 */}
        <div
          className="absolute inset-0 "
          onClick={() => setAddFlag(false)} // 点击背景关闭
        ></div>
        <div
          data-theme="caramellatte"
          className="relative flex justify-center items-center w-full max-w-2xl h-2/3 m-4 z-50"
        >
          <form
            className="flex flex-col w-full overflow-auto p-8 gap-4"
            action="submit"
          >
            <label className="flex justify-center items-center gap-2">
              <span className="w-24">Title:</span>
              <input
                name="title"
                type="text"
                placeholder="title"
                value={diary.title}
                onChange={handleChange}
                className="input input-md input-secondary"
              />
            </label>
            <label className="flex justify-center items-center gap-2">
              <span className="w-24">Date:</span>
              <input
                name="date"
                type="date"
                value={diary.date}
                onChange={handleChange}
                className="input input-secondary"
              />
            </label>
            <label className="flex justify-center items-center gap-2">
              <span className="w-24">Picture:</span>
              <input
                name="pic"
                type="text"
                placeholder="URL"
                value={diary.pic}
                onChange={handleChange}
                className="input input-md input-secondary"
              />
            </label>
            <label className="flex justify-center items-center gap-2">
              <span className="w-24"> Content:</span>
              <textarea
                name="text"
                placeholder="Secondary"
                value={diary.text}
                onChange={handleChange}
                className="textarea textarea-secondary"
              ></textarea>
            </label>

            <div className="flex justify-center gap-18 mt-10">
              <button
                onClick={handleSubmit}
                className="btn btn-accent"
                type="submit"
                disabled={blockSubmit}
              >
                {blockSubmit ? "Entering..." : "submit"}
              </button>

              <button
                className="btn btn-accent"
                onClick={() => setAddFlag(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddEntryModal;
