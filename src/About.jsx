import { RxDividerHorizontal } from "react-icons/rx";

function About() {
  return (
    <div className="bg-[#F7F7F7] my-10">
      <div className="md:flex justify-between px-4 py-10 w-5/6 mx-auto">
        <div>
          <img className="h-[450px]" src="about-image2.png" alt="" />
        </div>
        <div className="md:w-[700px]">
          <p className="text-xl text-[#898A9B] py-2 flex items-center">
            <RxDividerHorizontal className="text-6xl pr-4" />
            Sazzad Bashar Rakib
          </p>
          <h3 className="text-black font-bold text-4xl py-4">
            Full Stack Web Developer based in <br /> DHAKA, BANGLADESHs since
            2023
          </h3>
          <p className="text-[#898A9B] text-lg py-2">
            My name is Sazzad Bashar Rakib and I am a Full Stack Web Developer,
            and I’m very passionate and dedicated to my work.
            <br />
            <p className="pt-2">
              I have completed my BSc in Computer Science from
              <span className="text-[#446c94] font-medium px-2">
                Asia Pacific University Of Technology and Innovation
              </span>
              (Kuala Lumpur, MALAYSIA).
            </p>
          </p>
          <div className="py-2">
            <button className=" bg-slate-500 hover:bg-black text-white p-6">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
