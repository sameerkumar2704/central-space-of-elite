import { twMerge } from "tailwind-merge";

function Summary({flexReverse}) {
  return (
    <div className= {twMerge(" flex w-screen   justify-center py-4 "  , flexReverse&&"flex-row-reverse" )}>
      <div className=" self-stretch bg-red-700 w-[50vw]" />
      <div className="w-[50vw] px-24 py-14  text-white flex flex-col gap-9 box-border">
        <h1 className=" text-white text-5xl font-bold ">Guidan</h1>
        <h2 className=" text-4xl font-semibold">Sub-Heading</h2>

        <p className=" w-fit   ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit totam
          ipsa aspernatur ullam eligendi quibusdam velit nemo cumque
          voluptatibus? Nemo nihil soluta, magni exercitationem laboriosam ad
          illo dolores pariatur qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur consequatur dolorem similique laborum
          suscipit, accusantium est hic repellat deleniti ad reprehenderit quasi
          commodi debitis ullam libero qui at necessitatibus reiciendis?
        </p>

        <button className=" self-start px-3 py-2 rounded-full bg-white text-xl  text-black">
            Learn More
          </button>
      </div>
    </div>
  );
}
export default Summary;
