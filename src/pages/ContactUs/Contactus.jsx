import map from "../../assets/map.svg";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
            Have a question ? Let's get in touch with us.
          </h2>
          <p className="mt-5 text-sm text-slate-700">
            Fill up the Form and our team will get back to within 24 hrs
          </p>
        </div>

        <div className="flex gap-16 md:pt-1">
          <div>
            <h3 className="font-semibold text-slate-800">Location</h3>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed max-w-50">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Contact Us</h3>
            <p className="mt-3 text-xs text-slate-600">020 7893 2905</p>
            <p className="mt-2 text-xs text-slate-600">hi@finsweet.com</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-full bg-slate-50 px-5 py-3 text-xs text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-full bg-slate-50 px-5 py-3 text-xs text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full bg-slate-50 px-5 py-3 text-xs text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-500"
          />
          <textarea
            placeholder="Type message"
            className="w-full h-36 resize-none rounded-3xl bg-slate-50 px-5 py-4 text-xs text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-amber-500 px-6 py-2.5 text-xs font-semibold text-white hover:bg-amber-600"
          >
            Submit
          </button>
        </div>

        <img src={map} alt="Map" className="w-155 h-100  rounded-2xl " />
      </div>
    </section>
  );
}
