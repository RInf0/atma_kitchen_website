import Navbar from "../components/adminComp/Navbar";
import Sidebar from "../components/adminComp/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-900 min-h-svh">
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </div>
  );
}
