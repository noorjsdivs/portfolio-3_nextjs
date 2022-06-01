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
    <Element id="work" name="work">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Portfolio</p>
        <h2 className="text-indigo-900 text-6xl font-bold text-center">
          All Creative Works
        </h2>
      </div>
    </Element>
  );
}

export default Project;
