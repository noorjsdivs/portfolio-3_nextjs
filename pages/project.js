import { Element } from "react-scroll";
import Image from "next/image";
import imgOne from "../public/assets/images/projects/amazon.png";
import imgTwo from "../public/assets/images/projects/blog.png";
import imgThree from "../public/assets/images/projects/twitter.png";
import imgFour from "../public/assets/images/projects/profile.png";
import imgFive from "../public/assets/images/projects/sahara.png";
import imgSix from "../public/assets/images/projects/group.png";

function Project() {
  return (
    <Element id="projects" name="projects">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Portfolio</p>
        <h2 className="text-indigo-900 text-6xl font-bold text-center">
          All Creative Works
        </h2>
        <div className="md:flex sm:flex-col md:flex-row flex-wrap justify-center items-center gap-10 mt-10">
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgOne}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgTwo}
              alt="Two"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgThree}
              alt="three"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
        </div>
        <div className="md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 flex-wrap sm:pb-10 md:mt-10">
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgFour}
              alt="four"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgFive}
              alt="five"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded w-80 h-60 shadow-xl relative mb-7 md:mb-0">
            <Image
              src={imgSix}
              alt="six"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Project;
