import Navbar from "../components/MOComp/Navbar";
import Sidebar from "../components/MOComp/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-900 h-svh">
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </div>
  );
}
