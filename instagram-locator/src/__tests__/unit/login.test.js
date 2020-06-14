import React from 'react';
import Login from '../../login';
import Storage from '../../storage';
import { render, fireEvent } from '@testing-library/react';


let wrapper = null;

describe('Login component', () => {

	beforeEach(() => {

		wrapper = render(<Login win= { global }/>);

	});

	it('renders without throwing exceptions', () => {

		expect(wrapper).not.toBeNull();

	});

	it('logs in user', () => {
		
		fireEvent.click(wrapper.getByText('Login'));

		expect(wrapper.queryByText('And')).not.toBeNull();

	});

	it('sucessfuly registers user name and pass', () => {

		const nameElement = wrapper.getByTestId('user-name');

		fireEvent.change(nameElement, { target: { value: 'a' } });

		fireEvent.change(nameElement, { target: { value: 'an' } });

		fireEvent.change(nameElement, { target: { value: 'ans' } });

		expect(wrapper.queryByText('ans')).not.toBeNull();

		const passElement = wrapper.getByTestId('user-pass');

		fireEvent.change(passElement, { target: { value: 'o' } });

		fireEvent.change(passElement, { target: { value: 'oz' } });

		fireEvent.change(passElement, { target: { value: 'oza' } });


	});

	it('submits login form', () => {
		
		fireEvent.change(wrapper.getByTestId('user-name'), { target: { value: 'ans' } });

		fireEvent.change(wrapper.getByTestId('user-pass'), { target: { value: 'o' } });
		
		fireEvent.submit(wrapper.getByTestId('submit'));

		expect(wrapper.queryByText('And')).not.toBeNull();

	});


});

