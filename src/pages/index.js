import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 flex flex-col max-w-5xl w-full items-center items-start font-mono text-sm">
	  <p>Caspy</p>
      </div>
      <div>
          <p className="text-xl">The Spatial Video Repository</p>
	  <p>Store and search the most intuitive medium.</p> 
      </div>
      <div>
	  <p>App Store</p>
      </div>
    </main>
  );
}
