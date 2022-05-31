import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import HOC from './Hoc';
import { findByAltText, getByText, screen, waitForElementToBeRemoved } from '@testing-library/react';

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

it('result', async () => {
    // TODO test useEffect
    const component = renderer.create(
        <HOC></HOC>
    );

    // const component = act(() => {
    //     ReactDOM.createRoot(container).render(<HOC />);
    // });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // jest.advanceTimersByTime(1000);
    // expect(tree).toMatchSnapshot();
    console.log(tree);

    // const hoc = act(() => {
    //     ReactDOM.createRoot(container).render(<HOC />);
    // });

    // console.log(hoc.JSON);

    // expect(container.querySelector('div.m-3 p:first-child').textContent).toMatch(/Leanne Graham/);
    const div = await screen.queryAllByRole('span');
    expect(div).toBeInTheDocument();

});
