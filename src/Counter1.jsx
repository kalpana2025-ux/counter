import {useState} from 'react';
function Counter1()
{
const[count,setcount]=useState(0);
const handleclick1=()=>
{
    setcount(count+1);
}
const handleclick2=()=>
{
    setcount(count-1);
}
const handleclick3=()=>
{
    setcount(0);
}
return(
    <div className="container">
    <div className="hello">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={handleclick1} className="b1">Increase</button>
        <button onClick={handleclick2} className="b2">Decrease</button>
        <button onClick={handleclick3} className="b3">Reset</button>
</div>
</div>
)
}
export default Counter1;