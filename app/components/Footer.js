import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black p-2 flex justify-between px-4">
          <div className="flex space-x-3">
            <Image src="/neffex.jfif" className="" width={80} height={80}/>
            <div>
              <h2 className="text-xl block">Neffex - Grateful</h2>
              <p className="text-sm">Neffex</p>
            </div>
            <div className="mt-7"><i class="fa-regular fa-heart"></i></div>
          </div>
          <div className="">
            <div className="flex space-x-4 justify-center">
              <button className="text-xl"><i class="fa-solid fa-shuffle"></i></button>
              <button className="text-xl"><i class="fa-solid fa-backward-step"></i></button>
              <button className="text-3xl"><i class="fa-solid fa-circle-play"></i></button>
              <button className="text-xl"><i class="fa-solid fa-forward-step"></i></button>
              <button className="text-xl"><i class="fa-solid fa-repeat"></i></button>
            </div>
            <div className="flex space-x-2 space-y-2 items-center">
              <span className="text-xs text-zinc-400">0:24</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-zinc-400">2:42</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <button><i class="fa-solid fa-microphone"></i></button>
            <button><i class="fa-solid fa-bars"></i></button>
            <button><i class="fa-solid fa-computer"></i></button>
            <button><i class="fa-solid fa-volume-high"></i></button>
            <div className="h-1 rounded-full w-32 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
            <button><i class="fa-solid fa-display"></i></button>
          </div>
      </footer>
    )
}