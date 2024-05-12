import Card from "@/components/card";
import { atividadesLudicas, greetings } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{greetings()}</h1>
        <div  className="w-12 h-12 bg-orange-500 rounded-full flex justify-center items-center border border-black">
          <span className="text-xl text-white font-bold">A</span>
        </div>
      </div>
      <div className="w-full mt-8 flex gap-2">
        <div className="w-1/2 px-4 py-2 flex justify-center items-center border border-black shadow-md bg-yellow-500 rounded-md text-white font-semibold">
          <Link href={'/workshops'}>
            Workshops
          </Link>
        </div>
        <div className="w-1/2 px-4 py-2 flex justify-center items-center border border-black shadow-md bg-blue-500 rounded-md text-white font-semibold">
          <Link href={'/events'}>
            Workshops
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-lg font-semibold">Minhas Atividades</span>
      </div>
      <div>
        {atividadesLudicas.map(atividades => (
          <Card
            key={atividades.nome}
            name={atividades.nome}
            description={atividades.descricao}
          />
        ))}
      </div>
    </div>
  )
}
