import React, { useState } from 'react'
import Navbar from './Food_Recipe/Navbar'
import Cuisines from './Food_Recipe/Cusines'
import Meal from './Food_Recipe/Meal'

const App = () => {
  const [cuisine, setCuisine] = useState('Canadian');
  const [mealData, setMealData] = useState([]);

  return (
    <div>
      <Navbar setMealData={setMealData} />
      <Cuisines cuisine={cuisine} setCuisine={setCuisine} />
      <Meal cuisine={cuisine} mealData={mealData} setMealData={setMealData} />
    </div>
  )
}

export default App

