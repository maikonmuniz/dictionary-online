import PageColors from "../../components/PageColors"
import InputSearcher from "../../components/InputSearcher"
export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      
      <div className="flex flex-col items-center justify-between w-3/5 h-5/6 bg-red p-6 ">

        <PageColors />
        <InputSearcher />
        <div className="w-7/12">

          <p className="text-left text-2xl">Keyord</p>

        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="bold">noun</div>
          <div className="w-96 mt-10 pt-10 border-t border-zinc-400"></div>
        </div>

        <div className="text-zinc-400">Meanings</div>

        <div className="flex justify-between items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-fuchsia-400"></div>
          <div>Meanings</div>
        </div>

      </div>
      </div>
    )
}
