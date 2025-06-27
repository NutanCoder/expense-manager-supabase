import { RingLoader } from "react-spinners";

function MasterLoading() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-[70vh]">
        <RingLoader />
      </div>
    </div>
  );
}

export default MasterLoading;
