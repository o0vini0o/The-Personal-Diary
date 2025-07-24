const ViewEntryModal = ({ diary, setOpenDiary }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* 背景遮罩层 */}
      <div
        className="absolute inset-0 "
        onClick={() => setOpenDiary(false)} // 点击背景关闭
      ></div>
      <div
        data-theme="light"
        className="fixed flex flex-col items-center gap-4 inset-0 z-1500 max-w-4/5 mx-auto my-10 overflow-auto p-4"
      >
        <div className="flex justify-between m-8 gap-8 ">
          <div>
            <img
              className="object-cover rounded-2xl"
              src={diary.pic}
              alt={diary.title}
            />
          </div>
          <div className="max-w-1/2 flex flex-col">
            <div className="flex justify-center items-center space-x-8">
              <h1 className="text-xl">{diary.title}</h1>
              <p className="text-sm underline bg-gray-200">
                <em>{diary.date}</em>
              </p>
            </div>
            <p>{diary.text}</p>
          </div>
        </div>
        <button onClick={() => setOpenDiary(false)} className="btn btn-accent">
          return
        </button>
      </div>
    </div>
  );
};

export default ViewEntryModal;
