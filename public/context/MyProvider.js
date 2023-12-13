
import React from 'react'
import MyContext from './MyContext';

function MyProvider({children}) {
const name="Rishabh";
  return (
<MyContext.Provider value={name}>
   {children}
</MyContext.Provider>
  )
}

export default MyProvider