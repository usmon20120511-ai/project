import logo from "./assets/Group 21.svg";
import phone from "./assets/Group 30.svg";
import financesIcon from "./assets/Group 17.svg";
import bankingIcon from "./assets/Group 18.svg";
import paymentsIcon from "./assets/Group 19.svg";
import tree from "./assets/Group 24.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEF3FB] font-sans text-[#2F4A66]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 md:px-10 lg:px-8">
        <img src={logo} alt="PayAPI" className="h-6 md:h-7" />

        <nav className="hidden items-center gap-6 text-xs font-medium md:flex lg:gap-8">
          <a href="#" className="hover:opacity-70">
            Pricing
          </a>
          <a href="#" className="hover:opacity-70">
            About
          </a>
          <a href="#" className="hover:opacity-70">
            Contact
          </a>
          <a
            href="#"
            className="rounded-full bg-[#B8416B] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#9E3559]"
          >
            Schedule a Demo
          </a>
        </nav>

        <button className="md:hidden" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </header>

      <main>
        <section className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-6 pt-10 md:px-10 lg:flex-row lg:justify-between lg:gap-0 lg:px-8 lg:pt-4">
          <h1 className="max-w-md text-center font-serif text-3xl font-bold leading-tight md:max-w-xl md:text-4xl lg:text-left lg:text-5xl">
            Start building with our APIs for absolutely free.
          </h1>

          <img
            src={phone}
            alt="Phone showing a payment notification"
            className="w-32 drop-shadow-2xl md:w-44 lg:mr-16 lg:w-56"
          />
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-16 md:px-10 lg:flex-row lg:justify-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="w-full max-w-sm overflow-hidden rounded-md bg-[#1E2A38] shadow-2xl lg:max-w-md">
            <div className="flex gap-1.5 bg-[#2E3E52] px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#B8416B]" />
              <span className="h-2 w-2 rounded-full bg-[#4A7FA8]" />
              <span className="h-2 w-2 rounded-full bg-[#3B5068]" />
            </div>
            <pre className="overflow-x-auto px-4 py-5 font-mono text-[10px] leading-relaxed text-white md:text-xs">
              {`<form id="form-id" method="GET"> </form>
<script
  src="https://js.payapi.com/api.js"
  data-client-name="Your Company's Name"
  data-form-id="form-id"
  data-key="test_key"
  data-product="transactions"
  data-env="sandbox">
</script>`}
            </pre>
          </div>

          <div className="max-w-md text-center lg:text-left">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              Easy to implement
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#6B819A] md:text-sm">
              Our API comes with just a few lines of code. You'll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-20 md:grid-cols-3 md:gap-6 md:px-10 lg:px-8 lg:pb-28">
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5068] lg:h-16 lg:w-16">
              <img src={financesIcon} alt="" className="h-6 w-6" />
            </div>
            <h3 className="text-xs font-bold md:text-sm">Personal Finances</h3>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5068] lg:h-16 lg:w-16">
              <img src={bankingIcon} alt="" className="h-6 w-6" />
            </div>
            <h3 className="text-xs font-bold md:text-sm">Banking & Coverage</h3>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5068] lg:h-16 lg:w-16">
              <img src={paymentsIcon} alt="" className="h-6 w-6" />
            </div>
            <h3 className="text-xs font-bold md:text-sm">Consumer Payments</h3>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E2A38] text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-10 md:flex-row md:justify-between md:px-10 md:py-8 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
            <img src={logo} alt="PayAPI" className="h-6 brightness-0 invert" />
            <nav className="flex flex-col items-center gap-6 text-xs md:flex-row md:gap-8">
              <a href="#" className="hover:opacity-70">
                Pricing
              </a>
              <a href="#" className="hover:opacity-70">
                About
              </a>
              <a href="#" className="hover:opacity-70">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex gap-5">
            <a href="#" aria-label="Facebook">
              <img src={tree} alt="" className="h-4 w-4" />
            </a>
            s
          </div>
        </div>
      </footer>
    </div>
  );
}
