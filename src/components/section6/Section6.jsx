import k from "../../assets/mage (4).svg";
import p from "../../assets/p.svg";

export default function Section6() {
  return (
    <div>
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
    </div>
  );
}
