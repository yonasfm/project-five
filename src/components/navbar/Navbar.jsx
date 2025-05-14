import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="nav-app">
        <Link to="/">Home</Link>
        <Link to="/edit-exercise">Edit Exercise List</Link>
        <Link to="/new-exercise">Add new Exercise</Link>
        <Link to="/workout-list">Workout List</Link>


        </nav>
    )
}

export default Navbar