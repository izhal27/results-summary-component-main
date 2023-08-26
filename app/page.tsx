import Score from "./components/score";

import data from "../data.json";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="mx-auto flex flex-col justify-center max-w-lg min-h-screen">
        <div className="flex rounded-3xl bg-white">
          <section className="basis-1/2 text-center p-6 bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-3xl">
            <h4 className="text-light-lavender">Your Result</h4>
            <div className="flex flex-col justify-center rounded-full w-32 h-32 mx-auto bg-gradient-to-b  from-violet-blue to-persian-blue text-white  shrink-0 grow-0 my-5">
              <p className="text-5xl font-bold">76</p>
              <p className="text-xs text-light-lavender text-opacity-70">
                of 100
              </p>
            </div>
            <h5 className=" text-xl text-pale-blue">Great</h5>
            <div className="w-10/12 mx-auto m-5">
              <p className="text-xs text-pale-blue text-opacity-50 font-medium">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </section>
          <section className="flex flex-col basis-1/2 px-8 py-6">
            <h4 className="font-bold text-dark-gray-blue">Summary</h4>
            <Score scores={data} />
            <button className="bg-dark-gray-blue rounded-full px-3 py-2 text-white mt-7 hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
              Continue
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
