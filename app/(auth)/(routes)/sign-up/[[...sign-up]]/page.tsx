import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import loginSide from "@/public/VnilaLogo.svg"
 
export default function Page() {
  return (
    <>
    <div className="flex">
      <div className="flex flex-grow">
        <Image 
          src={loginSide}
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex">
        <SignUp />
      </div>
    </div>
  </>
  );
}