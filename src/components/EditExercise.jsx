import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditExercise = () => {

    const { id } = useParams()
    const [ workout, newWorkout ] = useState('')
    const [ workoutChoice, setWorkoutChoice ] = useState('')
    const [ workoutType, setWorkoutType ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/${id}`)
            .then(res => res.json())
            .then(data => {
                setWorkoutChoice(data.workoutChoice)
            })
            .catch(err => console.error('Failed to load workout choice', err))
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(``, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ workoutChoice}),
        })
        navigate('/workout-list')
    }

    const handleDelete = async () => {
        await fetch(`/${id}`, {
            method: 'DELETE',
        })
        navigate('/workout-list')
    }


    return (
        <>
            <form>
                <label>
                    Workout Selection:
                    <input
                        type="text"
                        value={workoutChoice}
                        onChange={(event) => setWorkoutChoice(event.target.value)}    
                    />
                    </label>
                    <label>
                    Workout Type:
                    <input
                        type="text"
                        value={workoutType}
                        onChange={(event) => setWorkoutType(event.target.value)}
                    />
                    </label>
                    <button type="submit">Update</button>
                    </form>
                    <button onCLick={handleDelete}>Delete</button>
        </>
    )
}

export default EditExercise