import renderer from 'react-test-renderer';
import Lifecycle from './Lifecycle';

it('result', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2019-01-01T00:00:00.000Z'));

    const component = renderer.create(
        <Lifecycle></Lifecycle>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // expect(component.state('date')).toBe(0);  // Success!
    jest.advanceTimersByTime(3000);
    // expect(component.state('date')).toBe(3);  // Success!
    expect(tree).toMatchSnapshot();

});