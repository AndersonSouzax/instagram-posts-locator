import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Storage from './storage';


export default function Login( { win = window } ){

	let storage = new Storage(win);

	const history = useHistory();

	let log = storage.getLoginInformation();

	// No exception, user logged in
	if(log !== false && log !== null){
		history.push('/friends-posts');
	}

	return (
		<div>
			<p> Logiinnnn </p>
		</div>
	);

}