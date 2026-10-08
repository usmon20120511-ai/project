import birbalo from "../../assets/birbalo.svg";
import "./section4.css";

export default function section4() {
  return (
    <div className="bg-[#EDF7FF] py-20 px-6">
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="rounded-3xl h-174 bg-[#EDF7FF] ">
            <div className="flex gap-7 px-8 py-5">
              <button className="border border-[#A8BCCC] rounded-[31px] w-48 bg-[#FFFFFF] text-[#F58A07]">
                Business strategy
              </button>
              <button className="border-[#FFFFFF] border text-[#0632554D] rounded-[31px] w-48 bg-[#EDF7FF]">
                Digitalization
              </button>
              <button className="border-[#FFFFFF] border  text-[#0632554D] rounded-[31px] w-48 bg-[#EDF7FF]">
                Risk assessment
              </button>
            </div>

            <h2 className="px-8 py-5 text-[48px] font-bold">
              Helping clients with research and strategy for their business
            </h2>

            <p className="px-8 py-5 text-[18px] text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque. <br /> <br /> Mattis
              purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit
              amet eros blan esque.
            </p>

            <button className="px-8 py-5 text-[#F58A07]">
              See all services
            </button>
          </div>

          <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
            <img src={birbalo} alt="man" className="w-full h-full " />
          </div>
        </div>
      </section>
    </div>
  );
}
