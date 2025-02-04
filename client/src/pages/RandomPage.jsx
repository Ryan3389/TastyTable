import { useEffect } from "react"
function RandomPage() {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/recipe/random')

                if (!response.ok) {
                    throw new Error("Network Error")
                }

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <h1>Random Recipe</h1>
    )
}
export default RandomPage
