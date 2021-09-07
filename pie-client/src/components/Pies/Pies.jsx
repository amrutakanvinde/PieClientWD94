import {useState,useEffect} from 'react';
import DisplayPies from './Pie/Pie';
import './Pies.css';
import CreatePie from './CreatePie/CreatePie';

const Pies = (props) => {

    const [pies, setPies] = useState([]);
    const [createPie, setCreatePie] = useState(false);

    const fetchPies = () => {
        let url = 'http://localhost:4000/pies/';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
    }

    useEffect(() => {
        fetchPies();
    }, [createPie])

    const buttonHandler = () => setCreatePie(true)

    return(
        <>
        { createPie ? <CreatePie sessionToken = {props.sessionToken} 
                        setCreatePie = {setCreatePie}/> : null }
        <button onClick={buttonHandler}>Create Pie!</button> 
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <DisplayPies pie={pies} />
            </tbody>
        </table>
        </>
    )
}

export default Pies;