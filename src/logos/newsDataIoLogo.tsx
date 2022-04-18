import Image from "next/image";

export default function NewsDataIoLogo() {
  return (
    <div className="flex opacity-90 bg-white p-1 border rounded-md">
      <Image src="/newsdata-icon.png" height={25} width={25} />
      <div className="text-xl text-black">
        <p className="font-bold">NEWSDATA<span className="font-normal">.IO</span></p>
      </div>
    </div>
  );
}
