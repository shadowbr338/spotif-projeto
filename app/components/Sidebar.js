import Image from "next/image";

export default function Sidebar() {
    return (
        <aside class="w-[420px] bg-[#000] p-2 ">          
          <nav className="flex flex-col space-y-3 bg-[#121212] rounded-lg px-2 py-3">
            <a href="" className="text-1x1 font-semibold space-x-6 text-[#b3b3b3]">
              <span className="text-xl"><i class="fa-solid fa-house"></i></span>
              <span>Inicio</span>
            </a>
            <a href="" className="text-1x1 font-semibold space-x-6 text-[#b3b3b3]">
              <span className="text-xl"><i class="fa-solid fa-search"></i>
              </span><span>Buscar</span>
            </a>            
          </nav>
          <nav className="flex flex-col mt-2 gap-2 bg-[#121212] h-full rounded-lg px-2">
            <div className="flex justify-between px-2 py-4">
              <div className="space-x-3">
                <i class="fa-solid fa-book-open"></i>
                <span className="text-[#b3b3b3]">Sua Biblioteca</span>
              </div>
              <div className="space-x-2">
                <a href=""><i class="fa-solid fa-add"></i></a>
                <a href=""><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="flex justify-between px-2">
              <a href="#"><i class="fa-solid fa-search"></i></a>
              <a href="#" className="flex flex-row-reverse items-center gap-2">
                <i class="fa-solid fa-bars"></i>
                <span className="text-[#b3b3b3]">Recentes</span>
              </a>
            </div>
            <section className="space-y-3 mt-4">
              <div className="flex gap-2 items-center">
                <Image src="/neffex-life.jfif" className=" rounded-full h-14 w-14" width={300} height={300}/>
                <div>
                  <h2 className="text-lg">Neffex</h2>
                  <p className="text-[#b3b3b3] text-sm">Artista</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/neffex-life.jfif" className="rounded-full h-14 w-14" width={300} height={300}/>
                <div>
                  <h2 className="text-lg">Neffex</h2>
                  <p className="text-[#b3b3b3] text-sm">Artista</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/neffex-life.jfif" className="rounded-full h-14 w-14" width={300} height={300}/>
                <div>
                  <h2 className="text-lg">Neffex</h2>
                  <p className="text-[#b3b3b3] text-sm">Artista</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/neffex-life.jfif" className="rounded-full h-14 w-14" width={300} height={300}/>
                <div>
                  <h2 className="text-lg">Neffex</h2>
                  <p className="text-[#b3b3b3] text-sm">Artista</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/neffex-life.jfif" className="rounded-full h-14 w-14" width={300} height={300}/>
                <div>
                  <h2 className="text-lg">Neffex</h2>
                  <p className="text-[#b3b3b3] text-sm">Artista</p>
                </div>
              </div>
            </section>
          </nav>
        </aside>
    )
}