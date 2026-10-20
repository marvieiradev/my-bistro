import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white">
      <h2 className="text-md text-center">Links Importantes</h2>
      <div className="flex flex-col md:flex-row w-full max-w-300">
        <img src="/imgs/logo.png" alt="Logo" className="w-15" />
        <div className="flex w-full justify-around items-center">
          <div className="flex items-center justify-center bg-black text-white text-md gap-8">
            <Link to={"/"}>Homepage</Link>
            <Link to={"/plates"}>Plates</Link>
            <Link to={"/profile"}>Profile</Link>
          </div>
        </div>
      </div>
      <div className="text-sm m-4!">My Bistrô 2026</div>
    </footer>
  );
}
