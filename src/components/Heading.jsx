import { useContext } from "react";
import { DiaryContext } from "../context";

const Heading = () => {
  const { setAddFlag } = useContext(DiaryContext);
  return (
    <nav className="flex justify-center mt-10">
      <button
        onClick={() => setAddFlag(true)}
        className="btn btn-primary btn-lg"
      >
        add a new diary
      </button>
    </nav>
  );
};
export default Heading;
