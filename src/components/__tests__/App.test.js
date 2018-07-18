import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

//runs before each test
beforeEach(() => {
    wrapped = shallow(<App />);
});

//test that app component shows a comment box
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

//test that app component shows a comment list
it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});
