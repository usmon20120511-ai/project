import human from "../../assets/image (5).svg";
import Odam from "../../assets/image (7).svg";
import bir from "../../assets/image 1.svg";
import ikki from "../../assets/image 2.svg";
import uch from "../../assets/image 3.svg";
import tor from "../../assets/image 4.svg";
import k from "../../assets/mage (4).svg";
import p from "../../assets/p.svg";
import ofice from "../../assets/image (1).svg";
import ofic from "../../assets/image (2).svg";
import ofi from "../../assets/image (3).svg";

export default function Hero() {
  return (
    <div className=" py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl ">
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            We value human, organizational, and operational intelligence, not
            just artificial
          </h1>

          <p className="text-gray-600 text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full">
              Work With Us
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
          <img
            src={human}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="flex py-20 gap-20 ">
        <h2 className="font-bold text-[36px]">
          The energy of a start-up <br /> combined with 30 years of experience
        </h2>

        <p className="text-[18px] text-[#1D3444] w-155">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </div>
      <div className="flex justify-center gap-20">
        <div className="w-66">
          <h2 className="text-[#F58A07] text-[36px]">15+</h2>
          <p className="text-[24px] font-bold">Awards received</p>
          <p className="text-[#5B5B5B] text-[16px] w-66 ">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        <div className="w-66">
          <h2 className="text-[#F58A07] text-[36px]">500+</h2>
          <p className="text-[24px] font-bold"> Clients served</p>
          <p className="text-[#5B5B5B] text-[16px] w-66">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        <div className="w-66">
          <h2 className="text-[#F58A07] text-[36px]">34</h2>
          <p className="text-[24px] font-bold">Employees</p>
          <p className="text-[#5B5B5B] text-[16px] w-66">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        <div className="w-66">
          <h2 className="text-[#F58A07] text-[36px]">130+</h2>
          <p className="text-[24px] font-bold">Custom solutions</p>
          <p className="text-[#5B5B5B] text-[16px] w-66">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl ">
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h1>

          <p className="text-gray-600 text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
          <img
            src={Odam}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="py-20">
        <h2 className="font-bold w-xl text-[48px] ">
          Teamwork is the only way we work
        </h2>

        <p className="w-180 text-[#5B5B5B] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </div>
      <div className="flex gap-20">
        <img src={bir} alt="" />
        <img src={ikki} alt="" />
        <img src={uch} alt="" />
        <img src={tor} alt="" />
      </div>
      <div className="py-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl ">
            <h1 className="text-5xl  font-bold text-gray-900 py-2">
              Finsweet was a dream <br /> to work with
            </h1>

            <p className="text-gray-600 text-base py-2">
              Maecenas efficitur scelerisque lorem, et varius lacus tincidunt
              vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci.
              Vivamus eleifend nec felis vel auctor.
            </p>
          </div>

          <div className="w-full max-w-sm h-full bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
            <img
              src={k}
              alt=""
              className="w-full h-ful object-cover grayscale"
            />
          </div>
        </div>
        <div className="flex items-center text-center">
          <img src={p} alt="" />

          <h2 className="text-[#063255] text-[24px]">Chikelu Neo</h2>

          <div>
            <h3 className="text-[#F58A07] text-[18px]">
              <br />
              <br />
              CEO at MazeAI
            </h3>
          </div>
        </div>
      </div>
      <h2 className="text-[48px]">Latest Blog & News</h2>
      <div className="grid grid-cols-3">
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
