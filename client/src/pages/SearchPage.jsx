import { useState } from "react"
function SearchPage() {
    const [searchState, setSearchState] = useState({
        recipeName: ""
    })

    const [recipeData, setRecipeData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setSearchState({
            ...searchState,
            [name]: value
        })

        console.log(searchState)
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
            const searchResults = data.searchResults.meals.map((recipe) => ({
                recipeTitle: recipe.strMeal,
                recipeImg: recipe.strMealThumb,
                recipeLink: recipe.strSource
            }))

            setRecipeData(searchResults)


        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="category-section">

            <span className="search-container">

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="recipeName">Search for your favourite recipes</label>
                    <input
                        type="text"
                        name="recipeName"
                        id="search"
                        onChange={handleChange}
                        aria-label="search recipes" />
                    <input type="submit" value="search" />

                </form>

            </span>
            {recipeData && recipeData.map((recipe, index) => (
                <article className="recipe-card" key={index}>
                    <p>{recipe.recipeTitle}</p>
                    <img src={recipe.recipeImg} className="recipe-img" alt={recipe.recipeTitle} />
                    <a target="_blank" href={recipe.recipeLink}>
                        <p>Check it out</p>
                    </a>
                </article>
            ))}
        </section>
    )
}

export default SearchPage