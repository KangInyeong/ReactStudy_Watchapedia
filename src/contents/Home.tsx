import React from 'react';
import Profile from '../Profile';

const Home = (props:any) => {
    return( 
    <>
    <p>중간 컨텐츠{props.menu}</p>
    <Profile username="곰팅" name="인영" />
    </>
    
    )
} 

export default Home;