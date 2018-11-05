import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoApp from '../src/todoapp';

// https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md

// https://airbnb.io/enzyme/docs/api/shallow.html
// https://jestjs.io/docs/en/expect

configure({ adapter: new Adapter() });

describe('TodoApp tests', () => {

    test('TodoApp rendering two items', () => {
        const todolist = shallow(<TodoApp />);

        todolist.instance().addTodo('myItemA');
        todolist.instance().addTodo('myItemB');

        expect(todolist.html()).toBe('<div><ul><li>myItemA</li><li>myItemB</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>'); 
    });


    test('TodoApp rendering two items and removing one', () => {
        const todolist = shallow(<TodoApp />);

        todolist.instance().addTodo('myItemA');
        todolist.instance().addTodo('myItemB');

        expect(todolist.html()).toBe('<div><ul><li>myItemA</li><li>myItemB</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>');

        todolist.instance().removeTodo(2);

        expect(todolist.html()).toBe('<div><ul><li>myItemA</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>');
    });

    test('TodoApp rendering two items and removing none (wrong index)', () => {
        const todolist = shallow(<TodoApp />);

        todolist.instance().addTodo('myItemA');
        todolist.instance().addTodo('myItemB');

        expect(todolist.html()).toBe('<div><ul><li>myItemA</li><li>myItemB</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>');

        todolist.instance().removeTodo(4);

        expect(todolist.html()).toBe('<div><ul><li>myItemA</li><li>myItemB</li></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>');
    });

    test('TodoApp rendering zero items', () => {
        const todolist = shallow(<TodoApp />);
        expect(todolist.html()).toBe('<div><ul></ul><div><input name="todo" value=""/><button disabled="">Add todo</button></div></div>'); 
    });
});