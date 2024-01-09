//-------------------------------------------------------------------------------------
//useCallback
//useCallback returns a memoized function while the useMemo returns a memoized value
//useCallback is most commonly used to memoize callback functions that are passed to child components

const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
}, [todos]);


