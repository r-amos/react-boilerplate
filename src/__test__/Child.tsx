import * as React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import Child from '../Child';

const testChildProps = {
    title: 'Test Title'
};

let wrapper: ShallowWrapper<undefined, undefined>;

describe('<Child />', () => {

    beforeEach(() => {
        wrapper = shallow(<Child {...testChildProps} />);
    });
    
    test("Should render without error", () => {
        expect(wrapper.length).toBe(1);
    });

});



