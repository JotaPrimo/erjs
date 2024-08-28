import { useEffect, useState } from "react"

export default function useCounter(initialNumber: number = 1) {

    const [number, setNumber] = useState(initialNumber)


    useEffect(() => {
        setTimeout(() => {
            setNumber(number + 1)
        }, 1000)
    }, [number])

    return number
}