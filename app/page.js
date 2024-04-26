import Login from "./page/login";
import TopNavbar from "./components/topNavbar";

export default function Home() {
  return (
  <div className="container">
    <TopNavbar></TopNavbar>
    <Login></Login>
  </div>
  );
}
