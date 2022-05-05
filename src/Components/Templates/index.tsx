import React from 'react'
import { ReactComponent as TranslateSVG } from '../../assets/translate.svg';
import Head from '../UI/Atoms/Head';
import Spinner from '../UI/Atoms/Spinner';
interface LayoutProps{
    Component:any
}
const Layout:React.FC<LayoutProps>=({Component})=>{
    return(
        <div className='container mt-5'>
           <div className='row'>    
            <div className='col-md-6' id='view'>
                <Component/>
            </div>
            <div className='col-md-6   d-flex flex-column justify-content-center align-items-center' id='img'>       
                  <Head text='Arabic-German Translator'/>   
                  <TranslateSVG/>
            </div>   
           </div>
        </div>
    )

}
export default Layout