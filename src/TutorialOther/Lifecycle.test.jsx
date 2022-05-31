import renderer, { act } from 'react-test-renderer';
import Lifecycle from './Lifecycle';

it('result', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2019-01-01T00:00:00.000Z'));

    let component = renderer.create(
        <Lifecycle></Lifecycle>
    );
    let tree = component.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();

    // expect(component.state('date')).toBe(0);  // Success!
    // jest.advanceTimersByTime(3000);
    jest.setSystemTime(new Date('2019-01-01T00:03:00.000Z'));
    // component.update();
    component = renderer.create(
        <Lifecycle></Lifecycle>
    );
    // expect(component.state('date')).toBe(3);  // Success!
    expect(component.toJSON()).toMatchSnapshot();

    // act(() => {
    //     jest.setSystemTime(new Date('2019-01-01T00:05:00.000Z'));
    //     component.update(<Lifecycle></Lifecycle>);
    // })

    let root;
    act(() => {
        root = renderer.create(
            <Lifecycle></Lifecycle>
        );
    });

    expect(root.toJSON()).toMatchSnapshot();


    jest.useFakeTimers();
    jest.setSystemTime(new Date('2019-01-01T00:05:00.000Z'));
    // renderer.update(component);
    // renderer.
    component.update(<Lifecycle></Lifecycle>);

    act(() => {
        root.update(<Lifecycle></Lifecycle>);
    })


    expect(root.toJSON()).toMatchSnapshot();

});

it('test use act', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2019-01-01T00:05:00.000Z'));
    // render the component
    let root;
    act(() => {
        root = renderer.create(<Lifecycle />)
    });

    // make assertions on root 
    expect(root.toJSON()).toMatchSnapshot();

    // update with some different props
    act(() => {
        jest.advanceTimersByTime(5000);
        root.update(<Lifecycle />);
    })

    // make assertions on root 
    expect(root.toJSON()).toMatchSnapshot();


});