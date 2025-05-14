// models/workout-list.js

import mongoose from 'mongoose'

const exerciseListSchema = new mongoose.Schema({
    exerciseChoice : String,
    exerciseType : String
})

const ExerciseList = mongoose.model("WorkoutList", exerciseListSchema)

export default ExerciseList