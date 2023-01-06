import react from 'react'

import './index.scss'

const Dashboard = () =>{
    return(
        <div className='containerDashBoard'>
            <div className="containerMenu">
                <ul>
                    <li>CATALOGOS</li>
                    <li>VENTAS</li>
                    <li>USUARIOS</li>                  
                </ul>                
            </div>
            <div className="containerPageOne">
                <div className="containerPageOneContent">
                    <div className="containerPageOneContentHeader"></div>
                    <div className="containerPageOneContentView">

                    </div>
                </div>
            </div>
        </div>
    )

}


export default Dashboard