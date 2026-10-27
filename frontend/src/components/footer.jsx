import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-background w-full md:rounded-none flex flex-col items-center pt-4! pb-8!">
      <div className="flex justify-between p-4 w-full max-w-300 flex-col md:flex-row gap-4">
        <div className="flex flex-col justify-center items-center md:items-start gap-2">
          <img
            src="/imgs/logo.png"
            alt="site-seguro"
            className="max-w-22.5"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-1!">
          <h2 className="text-amber-200 text-sm lg:text-base">
            Links Importantes
          </h2>
          <Link className="text-base md:text-lg" to={"/"}>Homepage</Link>
          <Link className="text-base md:text-lg" to={"/plates"}>Plates</Link>
          <Link className="text-base md:text-lg" to={"/profile"}>Profile</Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-amber-200 text-sm lg:text-base">
            Segurança
          </h2>
          <img
            src="/imgs/site-seguro.png"
            alt="site-seguro"
            className="max-w-50 mt-2!"
          />
        </div>
      </div>
    </div>
  );
}
