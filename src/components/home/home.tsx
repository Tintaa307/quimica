import { useState } from "react"
import Form from "./Form"
import Results from "./Results"

const Home = () => {
  const [results, setResults] = useState<number>(0)
  const [trees, setTrees] = useState<number>(0)
  return (
    <main
      className={[
        "w-full bg-[url('/bg-image.png')] bg-no-repeat flex items-center justify-center",
        "special",
      ].join(" ")}
    >
      <div className="w-full h-full flex items-start justify-start flex-col gap-8">
        <div className="w-full h-max flex items-start justify-start flex-col gap-6 mt-8">
          <h1 className="text-white text-5xl font-semibold ml-24">
            Tu calculadora de CO2
          </h1>
          <p className="text-white text-sm font-thin ml-24">
            Descubrí cuanto dióxido de carbono producís cada vez que viajas{" "}
          </p>
        </div>
        <div className="w-full h-max flex items-center justify-center flex-row gap-12">
          <Form setResults={setResults} setTrees={setTrees} />
          <Results results={results} trees={trees}/>
        </div>
      </div>
    </main>
  )
}

export default Home
