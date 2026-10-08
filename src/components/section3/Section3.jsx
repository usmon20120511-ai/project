import woman from "../../assets/woman.svg";

export default function Section3() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            The energy of a start-up combined with 30 years of experience.
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-3xl md:text-4xl  text-amber-500 ">15+</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Awards received
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl  text-amber-500 ">500+</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Clients served
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center">
          <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={woman}
              alt="Woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


