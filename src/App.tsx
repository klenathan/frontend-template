import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="h-screen w-screen flex flex-col gap-5 justify-center items-center">
			<h1 className="text-5xl font-bold">Nam Thai's FE template</h1>
			<p className="text-xl">
				w/ React, Vite, TailwindCSS & React-router-dom
			</p>
			<p>Test state: {count}</p>
			<div className="flex flex-row gap-3">
				<button
					className="bg-gray-200 p-4 rounded-xl border-grab-500 border-4 hover:border-red-500 transition-all"
					onClick={() => {
						setCount(count + 1)
					}}
				>
					Count
				</button>
				<button
					className="bg-gray-200 p-4 rounded-xl border-grab-500 border-4 hover:border-red-500 transition-all"
					onClick={() => {
						setCount(0)
					}}
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
