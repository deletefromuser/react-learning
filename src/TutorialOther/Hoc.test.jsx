import { act, render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom'
import HOC from './Hoc';

let container;

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);

    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    jest.restoreAllMocks();

    document.body.removeChild(container);
    container = null;
});

// https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library#step-3-mocking-the-fetch-method
async function mockFetch(url) {
    switch (url) {
        case "https://jsonplaceholder.typicode.com/users": {
            return {
                ok: true,
                status: 200,
                json: async () => JSON.parse(`[{
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                      "street": "Kulas Light",
                      "suite": "Apt. 556",
                      "city": "Gwenborough",
                      "zipcode": "92998-3874",
                      "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                      }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                      "name": "Romaguera-Crona",
                      "catchPhrase": "Multi-layered client-server neural-net",
                      "bs": "harness real-time e-markets"
                    }
                  }]`),
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}

it('test useEffect', async () => {
    const root = createRoot(container);
    await act(async () => {
        root.render(<HOC />);
    });

    expect(screen.getAllByText('Leanne Graham').pop()).toBeInTheDocument();
});

it('test jest dom findby', async () => {
    render(<HOC />);

    expect((await screen.findAllByText('Leanne Graham')).pop()).toBeInTheDocument();
});
