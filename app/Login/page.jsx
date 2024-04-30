// "use-client";
import TopNavbar from "../components/topNavbarWelcome";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 md:w-[60rem] h-[30rem]">
          <div className="bg-[#AD773D]"></div>
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-4 text-2xl">LOGIN</h1>
          <hr />
          <p className="text-[#171832] font-serif text-center mb-8">WELCOME BACK!</p>
          <form action="#" method="POST">
            <div className="mb-6">
              <input type="email" placeholder="Enter your email" className="w-72 p-3 rounded-2xl mx-72 bg-[#AD773D] backdrop-blur-md placeholder-slate-950"/>
            </div>
            <div className="mb-6">
              <input type="password" placeholder="Enter your password" className="w-72 p-3 rounded-2xl mx-72 bg-[#AD773D] backdrop-blur-md placeholder-slate-950"/>
            </div>
            <button
              type="submit"
              class="w-96 mx-64 bg-[#011145] hover:bg-[#01071b] text-[#AD773D] font-bold font-serif py-3 px-4 rounded-2xl transition duration-300"
            >
              Login
            </button>
          </form>
          <p class="text-center text-black mt-6">
            Not have an account? <a href="#" class="text-[#AD773D] hover:teks-[#AD773D]">Register</a>
          </p>
        </div>
      </div>
    </>
  );
}