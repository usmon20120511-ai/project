import human from "../../assets/Imag (6).svg";
import strategy from "../../assets/image (8).svg";
import digital from "../../assets/image (9).svg";
import risk from "../../assets/image (10).svg";
import ai from "../../assets/image (11).svg";
import contracts from "../../assets/image (12).svg";
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
            We serve clients with ground breaking solutions
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
      <div className="py-20 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <img
            src={strategy}
            alt=""
            className="w-full max-w-sm rounded-xl grayscale"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 py-2">
              Business strategy
            </h2>
            <p className="text-gray-600 text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio.
            </p>
            <ul className="text-gray-600 text-xs">
              <li>Core strategy</li>
              <li>Differentiated product or service strategy</li>
              <li>Focus on a niche strategy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-8">
          <img
            src={digital}
            alt=""
            className="w-full max-w-sm rounded-xl grayscale"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 py-2">
              Digitalization
            </h2>
            <p className="text-gray-600 text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <img
            src={risk}
            alt=""
            className="w-full max-w-sm rounded-xl grayscale"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 py-2">
              Risk assessment
            </h2>
            <p className="text-gray-600 text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio.
            </p>
            <ul className="text-gray-600 text-xs">
              <li>Individual risk assessment</li>
              <li>Systemic risk assessment</li>
              <li>Multimodal risk conceptualization</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-8">
          <img
            src={ai}
            alt=""
            className="w-full max-w-sm rounded-xl grayscale"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 py-2">
              Artificial intelligence
            </h2>
            <p className="text-gray-600 text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <img
            src={contracts}
            alt=""
            className="w-full max-w-sm rounded-xl grayscale"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 py-2">
              Smart Contracts
            </h2>
            <p className="text-gray-600 text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio.
            </p>
            <ul className="text-gray-600 text-xs">
              <li>Smart contract implementation</li>
              <li>Smart legal contracts</li>
              <li>Basic construction</li>
            </ul>
          </div>
        </div>
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
      <div className="grid grid-cols-3 bg-sky-100">
        <div className="w-100 h-111 py-10">
          <img src={ofice} alt="" />

          <h2 className="font-bold py-2">Why you have to digitalize in 2021</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et.
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10 ">
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
