// "use-client";
import TopNavbar from "../components/topNavbarWelcome";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 mt-40 md:w-[50rem] h-[24rem] bg-opacity-70">
          <div className="bg-[#AD773D]"></div>
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl">REGISTER</h1>
          <hr style={{ borderWidth: '1.5px' }} />
          <p className="text-[#171832] font-serif text-center mt-1" style={{ fontSize: '16px' }}>
            WELCOME</p>
          <p className="text-[#171832] font-serif text-center mb-6" style={{ fontSize: '12px' }}>Help us fill in your undefined</p>
          <form action="#" method="POST">
            <div className="mb-4 grid grid-cols-3 gap-4" >
              <input type="name" placeholder="Enter your full name" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
              <input type="email" placeholder="Enter your email" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
              <input type="num" placeholder="Enter your number" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <input type="createPass" placeholder="Create your password" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
              <input type="confirmPass" placeholder="Confirm your password" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
            </div>
            <button
              style={{ marginLeft: '20%' }}
              type="submit"
              className="bg-[#171832] text-white  py-2 px-4 rounded-full w-full md:w-[27rem] ">
              Register
            </button>
          </form>
          <p className="text-center text-black mt-3" style={{ fontSize: '14px' }}>
            Already have an account? <a href="#" className="text-[#AD773D] hover:teks-[#AD773D] " style={{ fontSize: '14px' }}>Login</a>
          </p>
        </div>
      </div>
    </>
  );
}