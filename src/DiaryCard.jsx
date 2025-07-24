const DiaryCard = ({ diary, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(diary.date)}
      className="flex flex-col w-full h-96 shadow-sm bg-[#453143] rounded-xl overflow-hidden "
    >
      <div className="flex flex-col items-center px-2 m-2 w-full">
        <p className="text-sm underline">
          <em>{diary.date}</em>
        </p>
        <h2 className="">{diary.title}</h2>
      </div>
      <div className="flex-1 relative p-2">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={diary.pic}
          alt={diary.title}
        />
      </div>
    </div>
  );
};
export default DiaryCard;
