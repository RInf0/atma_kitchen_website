// "use-client";
import TopNavbar from "../components/topNavbarWelcome";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 md:w-[60rem] h-[30rem]">
          <div className="bg-[#AD773D]"></div>
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-4 text-2xl">REGISTER</h1>
          <hr />
          <p className="text-[#171832] font-normal font-serif text-center mb-8">WELCOME<br/>Help us fill in your undefined</p>
          <form action="#" method="POST">
            <div className="mb-4 grid grid-cols-3 gap-4">
                <input type="name" placeholder="Enter your full name" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"/>
                <input type="email" placeholder="Enter your email" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"/>
                <input type="num" placeholder="Enter your number" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"/>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <input type="createPass" placeholder="Create your password" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"/>
                <input type="confirmPass" placeholder="Confirm your password" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"/>
            </div>
            <button
              type="submit"
              class="w-96 mx-64 bg-[#011145] hover:bg-[#01071b] text-[#AD773D] font-bold font-serif py-3 px-4 rounded-2xl transition duration-300"
            >
              Register
            </button>
          </form>
          <p class="text-center text-black mt-6">
            Already have an account? <a href="#" class="text-[#AD773D] hover:teks-[#AD773D]">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}