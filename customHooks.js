//-------------------------------------------------------------------------------------
//Custom Hooks
//eg: to Make api calls, store data in localStorage, implement logger, etc..
//const [data, setData] = useLocalStorage("key", "value");
//const [data, setData] = useFetch("https://jsonplaceholder.typicode.com/todos");

import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
};
export default useFetch;



//
const [userData] = useFetch("https://google./com")