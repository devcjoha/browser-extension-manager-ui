import { useNavigate, useParams } from "react-router-dom";
import ExtensionDetailView from "../pages/ExtensionDetailView";

const ModalWrapper = ({ items }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="card-modal-container fixed inset-0 bg-opacity-10 bg-slate-100/10 backdrop-blur-xs dark:bg-black/50 flex justify-center items-center z-50">
      <div className="modal-child relative bg-[#fcfdff] dark:bg-[#212636] w-90 rounded-xl p-4 lg:p-6 lg:w-120 overflow-y-auto shadow-lg">
        <ExtensionDetailView items={items} id={id} />
        <button
          onClick={() => navigate("/")}
          className="x-modal absolute top-4 right-4 text-md font-bold px-2 py-1 rounded"
        >
          X
        </button>
      </div>
    </div>
  );
};
export default ModalWrapper;