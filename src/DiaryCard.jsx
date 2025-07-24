const DiaryCard = ({ diary, setOpenDiary }) => {
  return (
    <div onClick={() => setOpenDiary(true)}>
      <div className="card-xs bg-base-100 w-[140px] h-[140px] shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{diary.title}</h2>
          <p>
            <em>Date: {diary.date}</em>
          </p>
        </div>
        <figure>
          <img
            className="object-cover rounded"
            src={diary.pic}
            alt={diary.title}
          />
        </figure>
      </div>
    </div>
  );
};
export default DiaryCard;
