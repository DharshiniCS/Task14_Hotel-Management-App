import { useParams } from "react-router-dom";
import useFetchMenu from "../hooks/useFetchMenu";
import "../css/RecipeDetails.css";

export default function RecipeDetails() {

  const { id } = useParams();

  const { menu, loading, error } = useFetchMenu();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const recipe = menu.find((item) => item.id === Number(id));

  if (!recipe) {
    return <h2>Recipe not found.</h2>;
  }

  return (
    <div className="recipe-details">

      <img src={recipe.image} alt={recipe.name} />

      <div className="recipe-content">

        <h1>{recipe.name}</h1>

        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>

        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>

        <p>
          <strong>Calories:</strong> {recipe.caloriesPerServing}
        </p>

        <p>
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
        </p>

        <p>
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {recipe.rating}
        </p>

      </div>

    </div>
  );
}