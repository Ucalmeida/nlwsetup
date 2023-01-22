interface HabitProps {
    completed: number
}

export function Habits(props: HabitProps) {
    return(
        <div className="bg-pink-600 w-20 h-10 rounded m-2 text-center flex items-center justify-center">Habit {props.completed}</div>
    )
}