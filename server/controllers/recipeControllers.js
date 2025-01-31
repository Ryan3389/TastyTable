// Breakfast
// Chicken 
// Beef
// Vegetarian 
// Dessert
async function recipeCategory(req, res) {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Error fetching category")
        }

        const data = await response.json()


        res.status(200).json({ category: data })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

async function randomRecipe(req, res) {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/random.php`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Error fetching recipe")
        }

        const data = await response.json()

        res.status(200).json({ recipe: data })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

async function searchRecipe(req, res) {
    try {
        const { recipeName } = req.body
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Error searching recipes")
        }

        const data = await response.json()
        res.status(200).json({ searchResults: data })
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

module.exports = { recipeCategory, randomRecipe, searchRecipe }