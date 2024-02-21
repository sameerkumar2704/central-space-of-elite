import HomePageFooter from "../Components/HomePageFooter";
import NavBar from "../Components/NavBar";
import Summary from "../Components/Summary";

function Home() {
  return (
    <>
      <NavBar />
      <div className=" h-[94vh] relative  flex  ">
        <div className=" bg-orange-500/70 rounded-[100%] blur-[12rem] w-full h-[35%] self-center " />
        <div className=" absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center font-semibold gap-60 justify-center  h-full text-8xl text-white">
          <div>
            <p>
              Elevate your <span className=" text-orange-500">potential</span>,
            </p>
            <p>
              one mentor at a <span className=" text-orange-500">time</span>.
            </p>
          </div>

          <button className=" px-3 py-2 rounded-full bg-white text-xl  text-black">
            Learn More
          </button>
        </div>
      </div>
      <div className=" py-9">
        <Summary flexReverse={false} />
        <Summary flexReverse={true} />
      </div>

      <HomePageFooter />
    </>
  );
}
export default Home;
