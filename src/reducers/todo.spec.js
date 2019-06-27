import reducer from './todo'

describe("Todo Reducer", () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: "ANYTHING"})
        expect(result).toBeDefined()
    })

    test("Adds a todo", () => {
        const startState = {
          todos: [
            { id: 1, name: "Go to work", isComplete: true },
            { id: 2, name: "Do some work", isComplete: true },
            { id: 3, name: "Close from work", isComplete: false }
          ]
        };

        const expectedState = {
          todos: [
            { id: 1, name: "Go to work", isComplete: true },
            { id: 2, name: "Do some work", isComplete: true },
            { id: 3, name: "Close from work", isComplete: false },
            { id: 4, name: "Eat some dinner", isComplete: false }
          ]
        };
        const action = {
          type: "TODO_ADD",
          payload: { id: 4, name: "Eat some dinner", isComplete: false }
        };
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})