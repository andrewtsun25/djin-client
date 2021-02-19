import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('Initial render is on the homepage', async () => {
    const { getByLabelText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
    const homePageTitle = getByLabelText('Home Page Title');
    const homePageDescription = getByLabelText('Home Page Description');
    expect(homePageTitle).not.toBeNull();
    expect(homePageDescription).not.toBeNull();
});

describe('Navigation Drawer Open/Close State Management', () => {
    const OPEN_DRAWER_BTN_LABEL = 'Open Drawer Button';
    const CLOSE_DRAWER_BTN_LABEL = 'Close Drawer Button';

    test('Can open the navigation drawer', async () => {
        const { getByLabelText, findByLabelText, queryByLabelText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        const openDrawerButton = getByLabelText(OPEN_DRAWER_BTN_LABEL);
        fireEvent.click(openDrawerButton); // Open the drawer
        const closeDrawerButton = await findByLabelText(CLOSE_DRAWER_BTN_LABEL);
        expect(closeDrawerButton).not.toBeNull();
        const openDrawerButtonAfterOpening = queryByLabelText(OPEN_DRAWER_BTN_LABEL);
        expect(openDrawerButtonAfterOpening).toBeNull();
    });

    test('Can close the navigation drawer', async () => {
        const { getByLabelText, findByLabelText, queryByLabelText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        const openDrawerButton = getByLabelText(OPEN_DRAWER_BTN_LABEL);

        fireEvent.click(openDrawerButton); // Open the drawer
        const closeDrawerButton = await findByLabelText(CLOSE_DRAWER_BTN_LABEL);
        fireEvent.click(closeDrawerButton); // Close the drawer
        const openDrawerButtonAfterClosing = await findByLabelText(OPEN_DRAWER_BTN_LABEL);
        const closeDrawerButtonAfterClosing = queryByLabelText(CLOSE_DRAWER_BTN_LABEL);
        expect(openDrawerButtonAfterClosing).not.toBeNull();
        expect(closeDrawerButtonAfterClosing).toBeNull();
    });
});
