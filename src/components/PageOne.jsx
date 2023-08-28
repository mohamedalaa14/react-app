import React from 'react'
import Home from './Home'
import Pagetwo from './Pagetwo'
import Cards from './Cards'
import Community from './Community'
import Pagethree from './Pagethree'
import Endpage from './Endpage'
function PageOne() {
  return (
    <div>
        <Home/>
      <Pagetwo/>
      <Pagethree/>
      <Cards/>
      <Community/>
      <Endpage/>
    </div>
  )
}

export default PageOne