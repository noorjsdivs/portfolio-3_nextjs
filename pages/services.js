import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";

function Services() {
  return (
    <Element id="services" name="services">
      <div className="w-full my-40 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">My Skills</p>
        <h1 className="text-indigo-900 text-6xl font-bold text-center">
          My Expertise
        </h1>
        {/* First Block */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Strategy & Direction
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a
              corrupti. Aspernatur incidunt iure numquam vero sapiente enim
              distinctio, mollitia nemo impedit doloribus quas sit consequuntur
              aliquam optio dicta ad?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Branding & Logo
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left  sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a
              corrupti. Aspernatur incidunt iure numquam vero sapiente enim
              distinctio, mollitia nemo impedit doloribus quas sit consequuntur
              aliquam optio dicta ad?
            </p>
          </div>
        </div>
        {/* Second Block */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <AiOutlineBlock className="w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Motion & Animation
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a
              corrupti. Aspernatur incidunt iure numquam vero sapiente enim
              distinctio, mollitia nemo impedit doloribus quas sit consequuntur
              aliquam optio dicta ad?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Design and Development
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a
              corrupti. Aspernatur incidunt iure numquam vero sapiente enim
              distinctio, mollitia nemo impedit doloribus quas sit consequuntur
              aliquam optio dicta ad?
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Services;
