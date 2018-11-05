import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from '../src/todoitem';

// https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md

// https://airbnb.io/enzyme/docs/api/shallow.html
// https://jestjs.io/docs/en/expect

configure({ adapter: new Adapter() });

describe('TodoItem tests', () => {

    const mockedFunction = jest.fn();
    const item = {value: "myItem", key: "myKey"};
    let todoitem;

    beforeEach(() => {
        todoitem = shallow(<TodoItem item={item} onRemove={mockedFunction} />);
    });

    test('TodoItem rendering', () => {
        expect(todoitem.exists()).toBe(true);
        expect(todoitem.html()).toBe('<li>myItem</li>'); 
        expect(todoitem.key()).toBe('myKey');
    });

    test('TodoItem handleClick call', () => {
        const spy = jest.spyOn(todoitem.instance(), 'handleClick');
        todoitem.instance().forceUpdate();

        todoitem.simulate('click');
        expect(spy).toBeCalled();
        expect(mockedFunction).toBeCalled();
    });
});