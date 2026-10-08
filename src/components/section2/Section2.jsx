import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon (1).svg";
import icon3 from "../../assets/icon (2).svg";

export default function Section2() {
  return (
    <div className="bg-[#EDF7FF] px-20">
      <div className="flex gap-2  py-10">
        <h2 className="w-158 text-[36px] font-bold">
          We are building software solution <br /> that solves your business{" "}
          <br /> challenges
        </h2>

        <h3 className="w-155 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </h3>
      </div>

      <div className="grid grid-cols-3 py-20">
        <div className="py-7 w-100 h-69 bg-[#FFFFFF] rounded-[20px]">
          <img className="px-7" src={icon} alt="" />

          <h3 className="py-7 px-5 text-[24px] font-bold">Invoicing</h3>

          <p className="px-5 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </p>
        </div>

        <div className="py-7 w-100 h-69 bg-[#FFFFFF] rounded-[20px]">
          <img className="px-7" src={icon2} alt="" />

          <h3 className="py-7 px-5 text-[24px] font-bold">Support</h3>

          <p className="px-5 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </p>
        </div>

        <div className="py-7 w-100 h-69 bg-[#FFFFFF] rounded-[20px]">
          <img className="px-7" src={icon3} alt="" />

          <h3 className="py-7 px-5 text-[24px] font-bold">Surveying</h3>

          <p className="px-5 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </p>
        </div>
      </div>
    </div>
  );
}
