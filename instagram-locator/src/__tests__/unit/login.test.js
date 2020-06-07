import React from 'react';
import Login from '../../login';
import Storage from '../../storage';
import { render } from '@testing-library/react';

// import { localStorageMock } from '../utils/mocks';

// "Window" object mock
//let win = { localStorage : localStorageMock };

// let storage = new Storage(global);

it('renders without throwing exceptions', () => {

	// storage.addLoginInfo({name: 'Anderson'});

	let wrapper = render(<Login win= { global }/>)

	expect(wrapper).not.toBeNull();

});


