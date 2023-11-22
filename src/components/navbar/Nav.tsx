import { Logo } from "../icons/Icons"

const Nav = () => {
  return (
    <header className="relative w-full h-16">
      <nav className="w-full h-full flex items-center justify-center">
        <div className="flex flex-row gap-3">
          <Logo />
          <h1 className="text-black font-black text-3xl">CarbonSense</h1>
        </div>
      </nav>
    </header>
  )
}

export default Nav
