import { children } from "kaioken"
import { Navbar } from "$/components/Navbar"

export function LayoutDefault() {
  return (
    <div className="flex flex-col items-center m-auto w-full min-h-screen">
      <Navbar />
      <div className="p-5 pb-10">{children()}</div>
    </div>
  )
}
