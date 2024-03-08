import {anirrudha, ashish, shubham, vishal} from "./assets"

export default function App() {
  return (
    <section>
      <div className="grid grid-cols-4 grid-rows-1 min-w-full min-h-screen">
        <div className="bg-black border-gray-400 border-4 hover:bg-rose-700">
          <h1 className="font-bold text-5xl pt-7 pl-7 text-white font-serif">
            Vishal
          </h1>
          <p className="text-white pl-7 pt-2 pr-2 text-sm">
            a mysterious boy of a almost unlimited amount of mana in himself. 
          </p>
          <p className="pl-7 pt-2 pr-2 font-bold text-pink-400">
            Ability: Adaptation 
          </p>
          <img src={vishal} alt="pfp" height={500} width={250} className="hover:-translate-y-12 transition ease-in-out delay-200 duration-1000 ml-24 mt-32 opacity-0 hover:opacity-100 hover:scale-110"/>
        </div>
        <div className="bg-black border-gray-400 border-4 hover:bg-purple-700">
        <h1 className="font-bold text-5xl pt-7 pl-7 text-white font-serif">
            Ashish
          </h1>
          <p className="text-white pl-7 pt-2 pr-2 text-sm">
            a high iq boy who comes from a advanced district where knowledge is everything. 
          </p>
          <p className="pl-7 pt-2 pr-2 font-bold text-purple-400">
            Ability: Knowledge 
          </p>
          <img src={ashish} alt="pfp" height={600} width={300} className="hover:-translate-y-12 transition ease-in-out delay-200 duration-1000 ml-24 mt-36 opacity-0 hover:opacity-100 hover:scale-110"/>
          </div>
        <div className="bg-black border-gray-400 border-4 hover:bg-fuchsia-700 ">
        <h1 className="font-bold text-5xl pt-7 pl-7 text-white font-serif">
            Shubham
          </h1>
          <p className="text-white pl-7 pt-2 pr-2 text-sm">
            a boy who knows all kind of languages of the world and communicates with nature through his ability. 
          </p>
          <p className="pl-7 pt-2 pr-2 font-bold text-fuchsia-300">
            Ability: literature 
          </p>
          <img src={shubham} alt="pfp" height={600} width={300} className="hover:-translate-y-12 transition ease-in-out delay-200 duration-1000 ml-24 mt-40 opacity-0 hover:opacity-100 hover:scale-110"/>
          </div>
        <div className="bg-black border-gray-400 border-4 hover:bg-emerald-300">
        <h1 className="font-bold text-5xl pt-7 pl-7 text-white font-serif">
            Anirrudha
          </h1>
          <p className="text-white pl-7 pt-2 pr-2 text-sm">
            a nice stylish boy who is well known for his creativity and his 100+ girlfriends. 
          </p>
          <p className="pl-7 pt-2 pr-2 font-bold text-emerald-300">
            Ability: Charm 
          </p>
          <img src={anirrudha} alt="pfp" height={1200} width={1200} className="hover:-translate-y-12 transition ease-in-out delay-200 duration-1000 ml-4 mt-40 opacity-0 hover:opacity-100 hover:scale-110"/>
          </div>
      </div>
    </section>
  )
}