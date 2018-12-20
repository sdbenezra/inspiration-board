import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('New Card Form', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow(
       <NewCardForm
          message = 'message'
          emoji = 'emoji'
          />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
