import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <h4>HomePage</h4>
      <button onClick={notify}>Show Toastify</button>
    </div>
  );
}

export default HomePage;
