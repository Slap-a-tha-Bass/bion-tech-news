import Image from "next/image";

export default function NewsDataIoLogo() {
  return (
    <div className="flex opacity-90 ml-16 bg-white">
      <Image src="/newsdata-icon.png" height={50} width={75} />
      <div className="text-4xl text-black">
        <p className="m-2 mr-0 p-2 font-bold">NEWSDATA<span className="font-normal">.IO</span></p>
      </div>
    </div>
  );
}
