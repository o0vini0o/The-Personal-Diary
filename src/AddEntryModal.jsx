const AddEntryModal = (setAddFlag) => {
  return (
    <div className="">
      <form className="text-black" action="submit">
        <div className="flex justify-center gap-18">
          <button className="btn" type="submit">
            submit
          </button>
          <button className="btn" onClick={() => setAddFlag(false)}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddEntryModal;
