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
    console.log(diary);

    const updated = [diary, ...diaries];
    setDiaries(updated);
    localStorage.setItem("diaries", JSON.stringify(updated));
    setDiary({
      date: "",
      title: "",
      pic: "",
      text: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 max-w-md mx-auto mt-20 shadow-lg max-h-[80vh] overflow-auto gb-white">
      <form className="flex flex-col item p-2 gap-4" action="submit">
        <label className="grid grid-cols-[100px_1fr] items-center gap-2">
          <span className="mr-8">Title:</span>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={diary.title}
            onChange={handleChange}
            className="input input-md input-secondary"
          />
        </label>
        <label className="grid grid-cols-[100px_1fr] items-center gap-2">
          <span className="mr-6">Date:</span>
          <input
            name="date"
            type="date"
            value={diary.date}
            onChange={handleChange}
            className="input input-secondary"
          />
        </label>
        <label className="grid grid-cols-[100px_1fr] items-center gap-2">
          <span className="mr-4">Picture:</span>
          <input
            name="pic"
            type="text"
            placeholder="URL"
            value={diary.pic}
            onChange={handleChange}
            className="input input-md input-secondary"
          />
        </label>
        <label className="grid grid-cols-[100px_1fr] items-center gap-2">
          <span className="mr-2">Content:</span>
          <textarea
            name="text"
            placeholder="Secondary"
            value={diary.text}
            onChange={handleChange}
            className="textarea textarea-secondary"
          ></textarea>
        </label>

        <div className="flex justify-center gap-18">
          <button
            onClick={handleSubmit}
            className="btn btn-accent"
            type="submit"
            disabled={blockSubmit}
          >
            {blockSubmit ? "Entering..." : "submit"}
          </button>

          <button className="btn btn-accent" onClick={() => setAddFlag(false)}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddEntryModal;
