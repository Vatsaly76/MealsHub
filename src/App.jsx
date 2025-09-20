import React, { useState } from 'react'
import Navbar from './Food_Recipe/Navbar'
import Cuisines from './Food_Recipe/Cusines'
import Meal from './Food_Recipe/Meal'

const App = () => {
  const [cuisine, setCuisine] = useState('Canadian');

  return (
    <div>
      <Navbar />
      <Cuisines cuisine={cuisine} setCuisine={setCuisine} />
      <Meal cuisine={cuisine} />
    </div>
  )
}

export default App

