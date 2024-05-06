/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

export default function Clients({ bahasa }) {
  const clients = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
    "client-7.png",
    "client-8.png",
  ];
  return (
    <div className="w-full py-12 px-4 lg:px-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-center">
        {!bahasa ? "Our Clients" : "Klien Kami"}
      </h1>

      <div className="items-center py-12">
        <Marquee
          pauseOnHover
          autoFill
          speed={30}
          gradient
          gradientColor="black"
        >
          {clients.map((item, index) => (
            <div key={index}>
              <img
                src={`/images/${item}`}
                alt=""
                sizes="30"
                className="h-12 px-4 lg:h-16 lg:px-8"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col items-center py-12 px-8">
        <p className="max-w-[700px] text-2xl lg:text-3xl text-center font-bold pb-2">
          {!bahasa
            ? `"Creativity Is Seeing What Others See And Thinking What No One Else Ever Thought"`
            : `"Kreativitas adalah melihat apa yang dilihat orang lain dan memikirkan apa yang tidak pernah dipikirkan orang lain"`}
        </p>
        <h2 className="text-2xl">Albert Einstein</h2>
      </div>
    </div>
  );
}
