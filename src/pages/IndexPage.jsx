import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="">
      <p className="text-2xl mb-5">Welcome to the Peppermint Robotics..!</p>
      <p className="w-3/4 m-auto text-gray-600">
        Peppermint is an award-winning robotics company, supported by SINE
        IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and
        Enterprise robots and platforms for mobility-led services. The
        Engineering team has 50+ years of experience in building deep-tech and
        robotics products. Robots built on the Peppermint Platform are deployed
        across 13 cities in 4 countries!
      </p>
      <p className="my-5 text-lg text-gray-700">
        Click below to explore career at Peppermint Robotics
      </p>
      <Link
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl"
        to="/careers"
      >
        Explore Career
      </Link>
    </div>
  );
}
