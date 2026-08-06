import { useEffect, useState, useRef } from "react"
import { useInView, motion} from "motion/react"


const Scrambledig = ({ value, duration = 1500, suffix = "", className=""}) => {

    const ref = useRef(null);
    const inView = useInView(ref, {once: true}) 

    const  [display, setDisplay] = useState("000")

    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * value)
            setDisplay(random.toString())
        }, 60); 

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setDisplay(`${value}${suffix}`)
        }, duration)

        return() => {
            clearInterval(interval)
            clearTimeout(timeout)
        }

    }, [inView, value, duration, suffix])
  return (
    <motion.h2
    initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    ref={ref} 
    className={`${className}`}>
        {display}
    </motion.h2>
  )
}

export default Scrambledig