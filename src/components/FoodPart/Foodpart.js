import React, { useEffect, useState } from 'react';
import Showmeal from '../Showmeal/Showmeal';
import './Foodpart.css'

const Foodpart = () => {
	const [foodNames, setFoodName] = useState([]);
	useEffect(() => {
		fetch('fakedata.json')
			.then(res => res.json())
			.then(data => setFoodName(data.meals))
	}, [])
	return (
		<div className='food-container'>
			<div className="left-item">

				{
					foodNames.map(foodName => <Showmeal meal={foodName} key={foodName.idMeal}></Showmeal>)
				}

			</div>
			<div className="right-item-cart">
				<h2>Hello right</h2>
			</div>

		</div>
	);
};

export default Foodpart;