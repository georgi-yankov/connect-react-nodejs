import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
	const [ name, setName ] = useState("")
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("/home").then(function(response) {
			setHome(response.data)
		})
	}, [])

	async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="App">
			<form onSubmit={postName}>
				<input type="text" value={name} onChange={({ target }) => setName(target.value)} />
				<button type="submit">Send Name</button>
			</form>
			{home}
		</div>
	)
}

export default App
