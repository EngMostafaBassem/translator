import React from 'react'
import MainScreen from './Components/Pages/main-screen'
import TranslateProvider from './context/translate-context'
const App=()=>{
  return(
    <TranslateProvider>
      <MainScreen/>
    </TranslateProvider>
  )

}
export default App