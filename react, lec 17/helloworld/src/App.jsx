import {useState, useEffect, useMemo, useRef, useCallback, useContext, createContext} from 'react'
import './App.css'
import MyInput from './components/MyInput'
import Counter from './components/Counter'
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !==null? JSON.parse(stored) : initialValue;

    } catch {
      return initialValue;
    }
  })
  useEffect(()=> {
    try{
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch {
      console.error(`Error saving to localStorage for key "${key}"`);
    }
  }, [key, value]); 

  return [value, setValue];
  const MessageContext = createContext('');
  function Info ({title}){
    const messageFromContext = useContext(MessageContext);
    return(
      <>
      <p> {title}: {messageFromContext}</p>
      </>
    )
  }
}
  function App(){
    //useState
    const [message, setMessage] = useState('Hello, world!');
    //useLocalStorage
    const [count, setCount] = useLocalStorage('count', 0);
    //useRef
    const inputRef = useRef(null);
    //useMemo
    const doubled = useMemo(() => count * 2, [count]);
    //useCallback
    const increment = useCallback(() => {
      setCount(count + 1);
    }, [count]);
    //useEffect
    useEffect(() => {
      console.log('Component mounted', { message,count});
    }, [message, count]);
    return(
      <MessageContext.Provider value ={message}>
        <>
        <h1>All-in- one : props + hooks ka demo class</h1>
        <h2>UseState + useRef</h2>
        <input ref = {inputRef}
        value ={message}
        onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button onClick={() => { if (inputRef.current) inputRef.current.focus(); }}>Focus input</button>

<h2>useLocalStorage + useMemo + useCallback</h2>
<p>Count: {count} (doubled: {doubled})</p>
<button onClick={increment}>Increment</button>
<button onClick={() => setCount(0)}>Reset</button>

<h2>Props + useContext</h2>
<Info title="Message from context" />
        </>
      </MessageContext.Provider>
    )

}
export default App;