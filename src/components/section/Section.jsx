import ofice from "../../assets/image (1).svg";
import ofic from "../../assets/image (2).svg";
import ofi from "../../assets/image (3).svg";

export default function Section() {
  return (
    <div className="px-5">
      <h2 className="text-[48px]">
        We help more than 1500 <br /> companies from all sectors
      </h2>

      <p className="w-183 text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </p>

      <div className="grid grid-cols-3">
        <div className="w-100 h-111 py-10">
          <img src={ofice} alt="" />

          <h2 className="font-bold py-2">Business strategy</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,{" "}
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10">
          <img src={ofic} alt="" />

          <h2 className="font-bold py-2">Digitalization</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
        <div className="w-100 h-111 py-10">
          <img src={ofi} alt="" />

          <h2 className="font-bold py-2">Risk assessment</h2>

          <p className="w-100 text-[16px] py-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,
          </p>

          <h6 className="text-[#F58A07]">Learn More </h6>
        </div>
      </div>
    </div>
  );
}
