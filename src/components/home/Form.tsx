import { Car } from "../icons/Icons"

type FormProps = {
  setResults: React.Dispatch<React.SetStateAction<number>>
}

const Form = ({ setResults }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    // cuentas

    // set the results into the state "setResults"
    setResults(0)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[422px] h-[383px] bg-white rounded-lg flex items-center justify-center flex-col gap-4 shadow-[0_0_8px_#808080] mb-3"
    >
      <select
        className="w-[70%] h-12 bg-[#47602E] text-white outline-none rounded-sm"
        name="transport"
      >
        <option
          className="w-full h-12 flex items-start justify-start flex-row gap-8"
          value="auto"
        >
          <Car /> Auto
        </option>
        <option className="h-12" value="avion">
          Avion
        </option>
        <option className="h-12" value="colectivo">
          Colectivo
        </option>
      </select>
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
