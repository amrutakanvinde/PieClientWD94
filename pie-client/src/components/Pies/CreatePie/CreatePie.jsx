import {useState} from 'react';
import './CreatePie.css';

const CreatePie = (props) => {
    const [nameOfPie, setNameOfPie] = useState('');
    const [baseOfPie, setBaseOfPie] = useState('');
    const [crust, setCrust]= useState('');
    const [timeToBake, setTimeToBake] = useState(0)
    const [servings, setServings] = useState(0);
    const [rating, setRating] = useState(0);

    const postPie = e => {
        e.preventDefault();

        let url = 'http://localhost:4000/pies/'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            props.setCreatePie(false);
        })
        .catch(err=> console.log(err))
    }

    return(
        <form onSubmit={postPie}>
            <input type="text" placeHolder='Name of Pie'
                value={nameOfPie} 
                onChange={e => setNameOfPie(e.target.value)}/>
            <input type="text" placeHolder='Base of Pie'
             value={baseOfPie} 
             onChange={e => setBaseOfPie(e.target.value)}/>
            <input type="text" placeHolder='Crust'
             value={crust} 
             onChange={e => setCrust(e.target.value)}/>
            <input type="text" placeHolder='Time to Bake'
             value={timeToBake} 
             onChange={e => setTimeToBake(e.target.value)}/>
            <input type="text" placeHolder='Servings'
             value={servings} 
             onChange={e => setServings(e.target.value)}/>
            <input type="text" placeHolder='Rating'
             value={rating} 
             onChange={e => setRating(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreatePie;