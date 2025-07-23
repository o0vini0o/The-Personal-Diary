const ViewEntryModal = ({ diary, setOpenDiary }) => {
  return (
    <div className="fixed flex flex-col items-center gap-4 inset-0 z-1500 max-w-2/3 mx-auto mt-10 shadow-lg  overflow-auto !gb-white">
      <div className="flex justify-center space-x-8">
        <h1>{diary.title}</h1>
        <p>{diary.date}</p>
      </div>

      <img src={diary.pic} alt={diary.title} />
      <p>{diary.text}</p>
      <button onClick={() => setOpenDiary(false)} className="btn btn-accent">
        return
      </button>
    </div>
  );
};

export default ViewEntryModal;
