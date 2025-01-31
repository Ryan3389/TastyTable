const router = require('express').Router()
const { recipeCategory, randomRecipe, searchRecipe } = require("../../controllers/recipeControllers")


router.route("/category").get(recipeCategory).get(randomRecipe)
// router.route("/random").get(randomRecipe)

router.route('/search').post(searchRecipe)



module.exports = router