import { useState } from "react"
function SearchPage() {
    const [searchState, setSearchState] = useState({
        recipeName: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setSearchState({
            ...searchState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/recipe/search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(searchState),
            })

            if (!response.ok) {
                throw new Error("Network Error")
            }

            const data = await response.json()

            console.log(data)

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="category-section">
            <span className="search-container">

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="search">Search for your favourite recipes</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={handleChange}
                        aria-label="search recipes" />
                    <input type="submit" value="search" />

                </form>
            </span>
        </section>
    )
}

export default SearchPage