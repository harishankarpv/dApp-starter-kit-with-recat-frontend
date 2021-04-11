import React from 'react'
import {homeObjOne, homeObjTwo} from './Data'
import { InfoSection, Products } from '../../components'


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Products />

        </>
    )
}

export default Home
