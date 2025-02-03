import { useEffect, useState } from "react"

function RecipeCategory({ category }) {


    const [recipeData, setRecipeData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/recipe/category?category=${category}`)

                if (!response.ok) {
                    throw new Error('Network Error')
                }

                const data = await response.json()
                setRecipeData(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <section className="category-section">
            <h2>{category}</h2>
            <article className="recipe-card">
                <p>Recipe Title</p>
                <p>Prep time</p>
                <p>Recipe button</p>
            </article>
        </section>
    )
}

export default RecipeCategory