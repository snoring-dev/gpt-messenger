import Image from "next/image";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-row items-center justify-between bg-smoke">
      <Sidebar />
      <div className="h-full w-full bg-transparent flex flex-col items-center justify-center">
        <h1>Content here</h1>
      </div>
    </div>
  );
}
