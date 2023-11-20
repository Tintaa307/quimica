import { Heart } from "../icons/Icons"

const Results = () => {
  return (
    <section className="w-[705px] h-[383px] bg-white rounded-lg flex items-center justify-center flex-col mb-3 shadow-[0_0_8px_#808080]">
      <div className="w-full h-max flex items-center justify-evenly flex-row gap-12">
        <div className="w-1/6 flex items-center justify-center">
          <span className="w-16 h-[1px] bg-gradient-to-r from-40% from-[#47602e27] to-100% to-[#47602E] mt-16"></span>
        </div>
        <div className="flex items-center justify-center flex-col gap-6">
          <Heart />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[#47602E] text-5xl font-bold">19 kg de CO2</h2>
            <small className="text-[#47602E] text-base font-normal">
              se produjeron por tu viaje
            </small>
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center">
          <span className="w-16 h-[1px] bg-gradient-to-r from-10% from-[#47602E] to-50% to-[#47602e27] mt-16"></span>
        </div>
      </div>
    </section>
  )
}

export default Results
