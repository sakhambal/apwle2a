import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="px-4 py-20 bg-tertiary sm:px-8">
    <div className="flex flex-col gap-4 items-center mx-auto max-lg:items-start max-w-8xl">
      <h2 className=" h2-text text-accent tracking-[-0.01em]">
      Let's Build a Strong Financial Foundation.
      </h2>
      <p className="mb-2 text-lg text-white/75">
      Whether you're launching a startup or managing an established business, we're here to simplify compliance, taxation, and financial planning.
      </p>
      <Link to="/contactus"
      className="flex gap-2 justify-center items-center px-4 py-2 font-semibold rounded-md text-primary bg-accent">
        Talk to an Expert <ArrowRight size={22} />
      </Link>
    </div>
  </section>
  )
}

export default CTA