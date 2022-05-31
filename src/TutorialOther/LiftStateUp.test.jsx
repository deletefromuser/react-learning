import { act, create } from 'react-test-renderer';
import { BoilingVerdict } from './LiftStateUp';

it('BoilingVerdict boils', () => {
    // render the component
    let root;
    act(() => {
        root = create(<BoilingVerdict celsius={1} />)
    });

    // make assertions on root 
    expect(root.toJSON()).toMatchSnapshot();

    // update with some different props
    act(() => {
        root.update(<BoilingVerdict celsius={100} />);
    })

    // make assertions on root 
    expect(root.toJSON()).toMatchSnapshot();

});