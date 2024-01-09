//-------------------------------------------------------------------------------------
//useRef
//To avoid rerender

const inputElement = useRef();
<input type="text" ref={inputElement} />

inputElement.current
