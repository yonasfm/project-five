// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/Homepage/Home'
import NewExercise from './components/NewExercise/NewExercise'
import EditExercise from './components/EditExercise/EditExercise'
import WorkoutList from './components/WorkoutList/WorkoutList'




const App = () => {
 
  return (
    <>
      <Navbar />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/new" element={<NewExercise />} />
          <Route path="/exercise/:id/edit" element={<EditExercise />} />
          <Route path="/workout-list" element={<WorkoutList />} /> 
      </Routes>
    
    
    
    </>
  )
}

export default App
