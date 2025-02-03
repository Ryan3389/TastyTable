import { useEffect } from "react"

function RandomPage() {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/recipe/random')

            if (!response.ok) {
                throw new Error("Network Error")
            }

            const data = await response.json()
            console.log(data)
        }
        fetchData()
    })
    return (
        <h1>Random Recipe Page</h1>
    )
}

export default RandomPage