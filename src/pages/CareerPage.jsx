import positionsData from "../positionsData.json";
import PositionPage from "./PositionPage";

export default function CareerPage() {
  return (
    <div className="-mt-2">
      <h3 className="text-xl mb-1 text-semibold">We are Hiring ...!</h3>
      <p className="">
        We are always looking out for great talent to join our family
      </p>
      <p className="text-sm w-3/4 m-auto">
        If you would like to work with us, please send your resume at
        <span className="text-blue-500"> hr@getpeppermint.co</span>. Our team
        will get back to you. Also below are the current openings at Peppermint
        Robotics.
      </p>
      <div className="mt-10">
        {positionsData.map((position, index) => {
          return (
            <PositionPage
              key={`pos-${index}`}
              title={position.title}
              description={position.description}
              qualification={position.qualification}
              skills={position.skills}
              experience={position.experience}
            />
          );
        })}
      </div>
    </div>
  );
}
