import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function RecipePage() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const category = params.get('category')

    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/recipe/category?category=${category}`)

                if (!response.ok) {
                    throw new Error('Error fetching recipes')
                }

                const data = await response.json()
                const topRecipesData = data.category.meals.slice(0, 9)
                setRecipeData(topRecipesData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [category])
    return (
        <section className="category-section">
            <h2>{category}</h2>

            <div className="recipe-container">
                {recipeData.map((recipe, index) => (
                    <article className="recipe-card" key={index}>
                        <p>{recipe.strMeal}</p>
                        <img src={recipe.strMealThumb} className="recipe-img" alt={recipe.strMeal} />
                    </article>
                ))}
            </div>

        </section>
    )
}

export default RecipePage