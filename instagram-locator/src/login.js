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

	const [login, setLogin] = useState(false);
	const [user, setUser] = useState({ name : '', password : '' });

	useEffect(() => {

		if(login){

			setUser({ ...user, name : 'And' });

		}

	}, [login]);

  const handleUser = (event, type) => {

  	switch(type){

  		case 1:

  			setUser( { ...user, name : event.target.value } );

  		break;

  		case 2:

  			setUser( { ...user, password : event.target.value } );

  		break;

  	}

  };

  const handleSubmit = (e) => {

  	e.preventDefault();

  	if(user != null && user.name && user.password){

  		setLogin(true);

  	}
  	// else{

  	// }
  };

	return (
		<div>
			<p> Logiinnnn </p>
			<button onClick={ e => setLogin(true) }>Login</button>
			<p>{user.name}</p>
			<p>{user.password}</p>

			<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input data-testid="user-name" type="text" value={user.name} onChange={e  => handleUser(e,1) } />
        </label>
        <label>
          Password:
          <input data-testid="user-pass" type="text" value={user.password} onChange={e  => handleUser(e,2) } />
        </label>
        <input data-testid="submit" type="submit" value="Enviar" />
      </form>

		</div>
	);

}