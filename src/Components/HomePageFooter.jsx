import LinkedIn from "../SvgIcon/LinkedIn";


export default function HomePageFooter() {
  return (
    <div className=" px-24 py-6 flex flex-col gap-14">
      <h1 className=" text-white font-semibold text-5xl ">CO-Founders</h1>
      <div className=" text-white flex justify-center gap-52 ">
        <div className=" flex flex-col items-center gap-10">
          <div className=" flex flex-col items-center gap-2">
            <div className=" w-56 h-56 rounded-full bg-green-600" />
            <h1 className=" text-2xl font-semibold">Sameer Kumar</h1>
          </div>

          <LinkedIn />
        </div>
        <div className=" flex flex-col items-center gap-10">
          <div className=" flex flex-col items-center gap-2">
            <div className=" w-56 h-56 rounded-full bg-green-600" />
            <h1 className=" text-2xl font-semibold">Sameer Kumar</h1>
          </div>

          <LinkedIn />
        </div>
      </div>
    </div>
  );
}
