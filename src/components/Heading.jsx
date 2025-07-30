import { useContext } from "react";
import { DiaryContext } from "../context";

const Heading = () => {
  const { setAddFlag } = useContext(DiaryContext);
  return (
    <nav className="flex justify-center py-2">
      <button onClick={() => setAddFlag(true)} className="btn btn-primary">
        add a new diary
      </button>
    </nav>
  );
};
export default Heading;
