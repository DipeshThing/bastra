import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h2 className="text-red-500">Welcome to Next.Js
    <Link href="/about-us">About Us</Link>
    </h2>
    
  </div>
  );
}
