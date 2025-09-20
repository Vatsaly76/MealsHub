import React, { useEffect } from 'react'

const Meal = ({ cuisine, mealData, setMealData }) => {

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
      )
      const data = await api.json();
      // console.log(data.meals);
      setMealData(data.meals || []) // Handle case where meals might be null
    }
    fetchDataFromAPI()
  }, [cuisine, setMealData]);

  return (
    <div>
      <h1 className='Header'>Welcome to <span>{cuisine}</span> Cuisine</h1>
      <div className='MealContainer'>
        {mealData.map((data) => (
            <div className='MealItem' key={data.idMeal}>
              <div>
                <img src={data.strMealThumb} alt={data.strMeal} className='img' />
              </div>
              <div>
                <h4>{data.strMeal}</h4>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Meal
