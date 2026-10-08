import l from "../../assets/image-1.svg";

export default function Section() {
  return (
    <div className=" w-full h-129 bg-[#F58A07] flex text-center">
      <div className="w-[50%]">
        <img className="w-240 h-129 " src={l} alt="" />
      </div>

      <div className="w-[50%]">
        <h2 className="py-9 text-white text-[48px]">
          Energy of a start-up combined with 30 years of experience.
        </h2>
        <button className="rounded-[31px] bg-[#FFFFFF] text-[#F58A07] w-54 h-13s">
          See Job Vacancies
        </button>
      </div>
    </div>
  );  
}
