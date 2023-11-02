import Image from "next/image";
import Footer from "../app/components/Footer"
import Sidebar from "../app/components/Sidebar"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-6 w-screen bg-[#121212]"> 
          <header className="flex justify-between h-20">
            <div>
              <button className="rounded-full h-8 w-8">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button className="rounded-full h-8 w-8 ">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="space-x-4">
              <button className="bg-white text-black rounded-md px-4">
                Ver planos Premium
              </button>
              <button className="px-4 space-x-1 bg-black rounded-full">
                <i class="fa-regular fa-circle-down"></i>
                <span>Instalar aplicativo</span>
              </button>
              <button className="h-9 w-9 bg-black rounded-full">
                <i class="fa-regular fa-bell"></i>
              </button>
              <button className="h-9 w-9 bg-black rounded-full">
                <i class="fa-regular fa-user"></i>
              </button>
            </div>
          </header>
          <section>
            <div>
              <div className="flex justify-between ">
                <h2 className="font-semibold text-xl">Spotify Podcast Festival, 4.NOV, SP</h2>               
                Mostrar tudo
              </div>
              <div className="grid grid-cols-7 gap-4 mt-5">
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                <Image src="/cafezinho.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">Cafezinho</h2>
                  <p className="text-sm p-2">Pegue seu café, ache um bom lugar para sentar, ajuste seu fone de ouvido e aproveite o momento.</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                  <Image src="/pop-leve.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">Pop Leve</h2>
                  <p className="text-sm p-2">Novidades e hits do pop nacional pra te deixar mais leve!</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">                  
                  <Image src="/o-melhor-dos-acusticos.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">O melhor dos Acústicos</h2>
                  <p className="text-sm p-2">Todos os sucessos dos melhores acústicos do mundo!</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                  <Image src="/hot-hits-brasil.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">Hot Hits Brasil</h2>
                  <p className="text-sm p-2">Os grandes hits do momento estão aqui!</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                  <Image src="/trapperz.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">trapperz</h2>
                  <p className="text-sm p-2">o melhor do trap dá o play e aumenta!</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                  <Image src="/pop-brasil.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">pop-brasil</h2>
                  <p className="text-sm p-2">Ouça todos as novidades e hits do pop br aqui e agora!</p>
                </a>
                <a href="#" className="bg-white/10 rounded overflow-hidden hover:bg-zinc-800">
                  <Image src="/coleção-pagode.jfif" className="w-full" width={300} height={300}/>
                  <h2 className="text-lg p-2">Coleção Pagode</h2>
                  <p className="text-sm p-2">Aqueles pagodes que te colocaram pra sorrir e pra chorar, às vezes ao mesmo tempo.</p>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />     
    </div>
  );
}
