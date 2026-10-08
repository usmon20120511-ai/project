import human from "../../assets/image (17).svg";
import odamus from "../../assets/image (18).svg";
import ofice from "../../assets/image (1).svg";
import ofic from "../../assets/image (2).svg";
import ofi from "../../assets/image (3).svg";

export default function Blog() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl px-10">
          <div className="flex gap-3 items-center text-center">
            <img src={odamus} alt="" />

            <h6>Andrew Jonson</h6>

            <p>Posted on 27th January 2021</p>
          </div>
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            Our internal process and longerm vision
          </h1>

          <p className="text-gray-600 text-base py-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the
          </p>

          <div className="flex items-center gap-4">
            <h3 className="text-[#F58A07]  font-medium  rounded-full">
              Read Moren
            </h3>
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

      <h2 className="text-[48px]">All posts</h2>
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
      <div className="grid grid-cols-3 bg-sky-100">
        <div className="w-100 h-111 py-10">
          <img src={ofi} alt="" />

          <h2 className="font-bold py-2">Why you have to digitalize in 2021</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et.
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10">
          <img src={ofice} alt="" />

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
          <img src={ofic} alt="" />

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
