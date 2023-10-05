import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl">Login With</h2>
        <div className="mb-3 mt-3">
          <Link>
            <button className="btn btn-outline w-full">
              <FaGoogle className="text-2xl"></FaGoogle>
              Login With Google
            </button>
          </Link>
        </div>
        <div>
          <Link>
            <button className="btn btn-outline w-full ">
              <FaGithub className="text-2xl"></FaGithub>
              Login With github
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-3xl">Find Us On</h2>

        <a
          className="flex text-lg border p-4 items-center rounded-t-lg gap-1"
          href=""
        >
          <FaFacebook></FaFacebook>
          FaceBook
        </a>
        <a className="flex text-lg border p-4 items-center  gap-1" href="">
          <FaTwitter></FaTwitter>
          Tweeter
        </a>
        <a
          className="flex text-lg border p-4 items-center rounded-b-lg gap-1"
          href=""
        >
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6">
        {/* Q-Zone */}
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
