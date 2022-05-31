import { act, create } from 'react-test-renderer';
import { BoilingVerdict } from './LiftStateUp';

describe("BoilingVerdict", () => {
    let root;

    it('not boils', () => {
        // render the component
        let root;
        act(() => {
            root = create(<BoilingVerdict celsius={1} />)
        });

        expect(root.toJSON()).toMatchSnapshot();
    });

    it('boils', () => {
        // render the component
        let root;
        act(() => {
            root = create(<BoilingVerdict celsius={101} />)
        });

        expect(root.toJSON()).toMatchSnapshot();
    });
});
