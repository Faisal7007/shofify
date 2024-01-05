
import React, { useState } from 'react'
import CartContext from "./CartContext";

function CartContextProvider({children}) {
    const [userNameInContext, setUserNameInContext] = useState('')
  return (
    <CartContext.Provider value={{userNameInContext,setUserNameInContext}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider


