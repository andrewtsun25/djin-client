import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('renders', async () => {
    const { getAllByText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
    const homeTextElements = getAllByText('d.jin');
    expect(homeTextElements.length).toEqual(2);
    homeTextElements.forEach((element) => expect(element).toBeInTheDocument());
});
