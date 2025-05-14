import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const NewExercise = () => {
    const { id } = useParams()
    const [ workoutChoice, setWorkoutChoice ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await fetch(`/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ workoutChoice, })
        })

        navigate('/workout-list')
    }


   return (
    <div>
      <h2 style={style}>Add New Exercise List</h2>
      <form onSubmit={handleSubmit} style={style}>
        <input
          type="text"
          value={groceryItem}
          onChange={(e) => setWorkoutChoice(event.target.value)}
          placeholder="Enter exercise name"
          required
          style={style}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewExercise