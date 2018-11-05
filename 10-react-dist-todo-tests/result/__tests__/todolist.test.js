import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../src/todolist';

// https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md

// https://airbnb.io/enzyme/docs/api/shallow.html
// https://jestjs.io/docs/en/expect

configure({ adapter: new Adapter() });

describe('TodoList tests', () => {

    test('TodoList rendering two items', () => {
        const itemA = {value: "myItemA", key: "myKeyA"};
        const itemB = {value: "myItemB", key: "myKeyB"};

        const todolist = shallow(<TodoList todos={[itemA, itemB]} />);
        expect(todolist.html()).toBe('<div><ul><li>myItemA</li><li>myItemB</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>'); 
    });

    test('TodoList rendering zero items', () => {
        const todolist = shallow(<TodoList todos={[]} />);
        expect(todolist.html()).toBe('<div><ul></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>'); 
    });
});