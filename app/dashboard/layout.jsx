import Navbar from "../components/adminComp/Navbar";
import Sidebar from "../components/adminComp/Sidebar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class="p-4 mt-14">{children}</div>
      </div>
    </div>
  );
};

export default layout;
