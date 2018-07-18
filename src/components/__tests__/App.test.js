import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

//test that app component shows a comment box
it('shows a comment box', () => {
    //render react component but none of its children
    const wrapped = shallow(<App />);

    //expect 1 CommentBox inside app
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

//test that app component shows a comment list
it('shows a comment list', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
});