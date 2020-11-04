import React from 'react'

function Result ({ result }) {
	return (
		<div className="result">
			<img src={result.poster_path} alt={result.title} />
			<h3>{result.title}</h3>
		</div>
	)
}

export default Result