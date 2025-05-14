import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WorkoutList = () => {

    const [ workoutChoice, setWorkoutChoice] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchWorkoutList = async () => {
            try {
                const response = await fetch('/api/workoutlist')
                if (!response.ok) {
                    throw new Error('Failed to load Workout Choices available')
                }
                const data = await response.json()
                setWorkoutChoice(data)
            }   catch (error) {
                setError(error.message)
            }   finally {
                setLoading(false)
            }
        }

        fetchWorkoutList()
    }, [])
    
    return (
        <>
        {
        workoutChoice.length === 0 ? (
          <p>No exercise choices were found.</p>
        ) : (
          <ul>
            {workoutChoice.map((exercise) => (
              <li key={exercise._id}>
                <strong>{exercise.exerciseType}</strong> – {exercise.exerciseChoice}
                &nbsp;|&nbsp;
                <Link to={`/exercise/${exercise._id}/edit`}>Edit</Link>
              </li>
            ))}
          </ul>
        )
      }
      
        </>
    )

}
export default WorkoutList