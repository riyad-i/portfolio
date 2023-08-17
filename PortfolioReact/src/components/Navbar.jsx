import {Link} from 'react-router-dom'


export default function Navbar() {

    return (

        <>
        
        <ul>

            <li><Link to={'/'}>Main</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/weather'}>Weather</Link></li>

        </ul>
        
        </>


    )

}