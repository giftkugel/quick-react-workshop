import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoForm from '../src/todoform';

// https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md

// https://airbnb.io/enzyme/docs/api/shallow.html
// https://jestjs.io/docs/en/expect

configure({ adapter: new Adapter() });

describe('TodoForm tests', () => {

    const mockedFunction = jest.fn();
    let todoform;

    beforeEach(() => {
        todoform = shallow(<TodoForm onAdd={mockedFunction} />);
    });

    test('TodoItem rendering', () => {
        expect(todoform.exists()).toBe(true);
        expect(todoform.html()).toBe('<div><input name="todo" value=""/><button disabled="">Add todo</button></div>');
    });

    test('TodoForm handleClick with input call', () => {
        todoform.setState({ value: 'bar' });
        const spy = jest.spyOn(todoform.instance(), 'handleClick');
        todoform.instance().forceUpdate();

        todoform.find('button').simulate('click');
        expect(spy).toBeCalled();
        expect(mockedFunction).toBeCalledWith('bar');
        expect(todoform.state().value).toBe('');
        expect(todoform.state().disabled).toBe(true);
    });

    test('TodoForm handleClick without input call', () => {
        const spy = jest.spyOn(todoform.instance(), 'handleClick');
        todoform.instance().forceUpdate();

        todoform.find('button').simulate('click');
        expect(spy).toBeCalled();
    });

    test('TodoForm handleChange with input call', () => {
        const spy = jest.spyOn(todoform.instance(), 'handleChange');
        todoform.instance().forceUpdate();

        todoform.find('input').simulate('change', {
            currentTarget: {
                value: 'foo'
            }
        });
        expect(spy).toBeCalled();
        expect(todoform.state().value).toBe('foo');
        expect(todoform.state().disabled).toBe(false);
    });

    test('TodoForm handleChange without input call', () => {
        const spy = jest.spyOn(todoform.instance(), 'handleChange');
        todoform.instance().forceUpdate();

        todoform.find('input').simulate('change', {
            currentTarget: {
                value: ''
            }
        });
        expect(spy).toBeCalled();
        expect(todoform.state().value).toBe('');
        expect(todoform.state().disabled).toBe(true);
    });
});