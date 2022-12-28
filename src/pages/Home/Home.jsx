import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Orders from '../../components/Orders/Orders'
import './Home.scss'
function Home() {
  return (
    <div className='home'>
        <Header/>
        <Main/>
        <Orders/>
    </div>
  )
}
export default Home