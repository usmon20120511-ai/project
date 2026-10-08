import human from "../../assets/image (16).svg";
import ofice from "../../assets/image (1).svg";
import ofic from "../../assets/image (2).svg";
import ofi from "../../assets/image (3).svg";

export default function Careers() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl ">
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            We hired people who are very passionate about what they do
          </h1>

          <p className="text-gray-600 text-base py-2">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full">
              View Positions
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
          <img
            src={human}
            alt="man"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      <div>
        <h2 className="text-[48px] font-bold">See our open positions </h2>

        <div className="px-10 py-20 grid grid-cols-3">
          <div className="w-100 h-45 bg-[#C1E4FF4D] px-9 py-9 rounded-3xl">
            <h3 className="text-[24px] font-bold">Full Stack Developer</h3>

            <h5 className="py-2 text-[18px] text-[#394149]">
              Bengaluru · Full Time
            </h5>

            <h5 className="py-5 text-[18px] text-[#F58A07]">Apply Now</h5>
          </div>

          <div className="w-100 h-45 bg-[#C1E4FF4D] px-9 py-9 rounded-3xl">
            <h3 className="text-[24px] font-bold">Testing Engineer</h3>

            <h5 className="py-2 text-[18px] text-[#394149]">
              Bengaluru · Full Time
            </h5>

            <h5 className="py-5 text-[18px] text-[#F58A07]">Apply Now</h5>
          </div>

          <div className="w-100 h-45 bg-[#C1E4FF4D] px-9 py-9 rounded-3xl">
            <h3 className="text-[24px] font-bold">Hr Manager+</h3>

            <h5 className="py-2 text-[18px] text-[#394149]">
              Mumbai · Full Time
            </h5>

            <h5 className="py-5 text-[18px] text-[#F58A07]">Apply Now</h5>
          </div>
        </div>
      </div>

      <div className="flex gap-20 px-10 ">
        <div>
          <div className="w-100 h-45 bg-[#C1E4FF4D] px-9 py-9 rounded-3xl">
            <h3 className="text-[24px] font-bold">Full Stack Developer</h3>

            <h5 className="py-2 text-[18px] text-[#394149]">
              Bengaluru · Full Time
            </h5>

            <h3 className="py-5 text-[18px] text-[#F58A07] ">Apply Now</h3>
          </div>
        </div>

        <div className="w-100 h-45 bg-[#C1E4FF4D] px-9 py-9 rounded-3xl">
          <h3 className="text-[24px] font-bold">Testing Engineer</h3>

          <h5 className="py-2 text-[18px] text-[#394149]">
            Bengaluru · Full Time
          </h5>

          <h5 className="py-5 text-[18px] text-[#F58A07]">Apply Now</h5>
        </div>
      </div>

      <h2 className="text-[48px] px-10  ">Latest Blog & News</h2>
      <div className="grid grid-cols-3 px-10 bg-sky-100">
        <div className="w-100 h-111 py-10">
          <img src={ofice} alt="" />

          <h2 className="font-bold py-2">Why you have to digitalize in 2021</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et.
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10">
          <img src={ofic} alt="" />

          <h2 className="font-bold py-2">
            Our internal process and longerm vision
          </h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur sit amet eros blandit,
            hendrerit elit et.
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10">
          <img src={ofi} alt="" />

          <h2 className="font-bold py-2">
            Helping the next generation of leaders
          </h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et.
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
      </div>
    </div>
  );
}
