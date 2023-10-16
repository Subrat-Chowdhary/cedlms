import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={160}
      width={160}
      alt="logo"
      src="/smallLogo.png"
      className="rounded-lg shadow-black shadow-2xl"
    />
  )
}