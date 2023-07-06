import Button from "./button";

export default function Landing({
  blackText,
  orangeText,
  desc,
  buttonLink,
  buttonText,
}: {
  blackText: string;
  orangeText: string;
  desc: string;
  buttonLink: string;
  buttonText: string;
}) {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <div className="m-auto text-center">
          <h1 className="lg:text-7xl text-5xl  font-bold text-center font-heading">
            {blackText} <span className="text-logo-orange">{orangeText}</span>
          </h1>

          <p className="text-center text-lg text-gray-500 italic mt-8 font-para dark:text-slate-200">
            {desc}
          </p>

          {buttonText && buttonLink && (
            <div className="mt-8">
              <Button text={buttonText} to={buttonLink} dark={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
