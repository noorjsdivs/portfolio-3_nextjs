import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/images/Noor.jpg";

function HomePage() {
  return (
    <div>
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="rounded-full  cursor-pointer hidden md:block"
          />
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1 className="font-bold text-7xl text-left mb-5">
            Hello, I am <span className="text-indigo-900">Noor Mohammad</span>
          </h1>
          <p className="text-left font-normal mb-5 flex-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            necessitatibus vel, tenetur magni aperiam delectus. Iste accusantium
            impedit corporis odit in ex, quidem temporibus harum sint nulla.
            Exercitationem, minus quos. impedit corporis odit in ex, quidem
            temporibus harum sint nulla. Exercitationem, minus quos.
          </p>
          <a
            className="font-semibold, text-white md:mt-10 mt-5 pt-5 bg-indigo-600 rounded-md w-60 h-16 text-lg hover:bg-indigo-900 cursor-pointer"
            href="#"
          >
            See my Portfolio !
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
