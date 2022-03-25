import React from 'react';
import './Showmeal.css'

const Showmeal = (props) => {
	console.log(props)
	const { strMeal, strArea, strMealThumb, strSource } = props.meal
	return (
		<div className='food-container'>
			<img src={strMealThumb} alt="" />

			<h1>{strArea}</h1>

		</div>
	);
};

export default Showmeal;