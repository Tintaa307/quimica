import { useState } from "react"

type FormProps = {
  setResults: React.Dispatch<React.SetStateAction<number>>
  setTrees: React.Dispatch<React.SetStateAction<number>>
}

const Form = ({ setResults, setTrees }: FormProps) => {
  const [vehiculo, setVehiculo] = useState('auto');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    // calculate the results
    let result = 0;
    if(data.transport === 'auto'){
      result = (0.214 * Number(data.numberkm)) / Number(data.pesonas);
    }
    else if(data.transport === 'avion'){
      let dist = 0;
      if((data.salida === 'ezeiza' && data.destino === 'mdp') || (data.salida === 'mdp' && data.destino === 'ezeiza')){
        dist = 365;
      }
      else if((data.salida === 'ezeiza' && data.destino === 'bariloche') || (data.salida === 'bariloche' && data.destino === 'ezieza')){
        dist = 1309
      }
      else if((data.salida === 'mdp' && data.destino === 'bariloche') || (data.salida === 'bariloche' && data.destino === 'mdp')){
        dist = 1228
      }
      if (data.tipo_avion === 'boeing737') {
      result = (6.591 * dist) / 170;
      }
      else if(data.tipo_avion === 'a320'){
        result = (8.932 * dist) / 180;
      }
    }
    else if(data.transport === 'micro'){
      let dist = 0;
      if((data.salida === 'retiro' && data.destino === 'mdp') || (data.salida === 'mdp' && data.destino === 'retiro')){
        dist = 415;
      }
      else if((data.salida === 'retiro' && data.destino === 'bariloche') || (data.salida === 'bariloche' && data.destino === 'retiro')){
        dist = 1584
      }
      else if((data.salida === 'mdp' && data.destino === 'bariloche') || (data.salida === 'bariloche' && data.destino === 'mdp')){
        dist = 1434
      }
      result = (0.748 * dist) / 60;
    }
    console.log(data);

    // set the results into the state "setResults"
    setResults(Math.ceil(result));
    let trees = result / 21;
    setTrees(Math.ceil(trees));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[422px] h-[383px] bg-white rounded-lg flex items-center justify-center flex-col gap-4 shadow-[0_0_8px_#808080] mb-3"
    >
      <select
        className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
        name="transport"
        onChange={(e) => {setVehiculo(e.target.value)}}
      >
        <option
          className="w-full h-12 flex items-start justify-start flex-row gap-8"
          value="auto"
        >
          Auto
        </option>
        <option className="h-12" value="avion">
          Avion
        </option>
        <option className="h-12" value="micro">
          Micro
        </option>
      </select>
      {vehiculo == 'auto' &&
      <>
        <input
        type="number"
        name="numberkm"
        className="w-[70%] h-12 rounded-sm border-[1px] border-[#47602E] outline-none text-black text-sm font-normal px-2"
        placeholder="Ingresa la cantidad de km recorridos"
        />
        <input
          type="number"
          name="pesonas"
          className="w-[70%] h-12 rounded-sm border-[1px] border-[#47602E] outline-none text-black text-sm font-normal px-2"
          placeholder="Ingresa la cantidad de personas"
        />
      </>
      }
      {vehiculo === 'avion' &&
        <>
          <select
            className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
            name="salida"
            >
            <option value="" disabled selected className="w-full h-12 flex items-start justify-start flex-row gap-8">Indique salida</option>
            <option
              className="w-full h-12 flex items-start justify-start flex-row gap-8"
              value="ezeiza"
              >
              Ezeiza
            </option>
            <option className="h-12" value="mdp">
              Mar del Plata
            </option>
            <option className="h-12" value="bariloche">
              Bariloche
            </option>
          </select>
          <select
            className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
            name="destino"
            >
            <option value="" disabled selected className="w-full h-12 flex items-start justify-start flex-row gap-8">Indique destino</option>
            <option
              className="w-full h-12 flex items-start justify-start flex-row gap-8"
              value="ezeiza"
              >
              Ezeiza
            </option>
            <option className="h-12" value="mdp">
              Mar del Plata
            </option>
            <option className="h-12" value="bariloche">
              Bariloche
            </option>
          </select>
          <select
          className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
          name="tipo_avion">
            <option value="" disabled selected className="w-full h-12 flex items-start justify-start flex-row gap-8">Tipo de avión</option>
            <option 
            className="w-full h-12 flex items-start justify-start flex-row gap-8" 
            value="boeing737">
              Boeing 737
            </option>
            <option className="h-12" value="a320">
              A320
            </option>
          </select>
        </>
      }
      {vehiculo === 'micro' &&
        <>
          <select
            className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
            name="salida"
            >
            <option value="" disabled selected className="w-full h-12 flex items-start justify-start flex-row gap-8">Indique salida</option>
            <option
              className="w-full h-12 flex items-start justify-start flex-row gap-8"
              value="retiro"
              >
              Retiro
            </option>
            <option className="h-12" value="mdp">
              Mar del Plata
            </option>
            <option className="h-12" value="bariloche">
              Bariloche
            </option>
          </select>
          <select
            className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm cursor-pointer"
            name="destino"
            >
            <option value="" disabled selected className="w-full h-12 flex items-start justify-start flex-row gap-8">Indique destino</option>
            <option
              className="w-full h-12 flex items-start justify-start flex-row gap-8"
              value="retiro"
              >
              Retiro
            </option>
            <option className="h-12" value="mdp">
              Mar del Plata
            </option>
            <option className="h-12" value="bariloche">
              Bariloche
            </option>
          </select>
        </>
      }
      <button
        type="submit"
        className="w-[70%] h-12 rounded-sm bg-[#47602E] outline-none text-white font-normal text-lg"
      >
        Calcular
      </button>
    </form>
  )
}

export default Form
