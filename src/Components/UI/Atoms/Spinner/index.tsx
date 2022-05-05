import React from 'react'
import ReactLoading from 'react-loading'
import styles from './index.module.scss'
const Spinner=()=>{
 return(
     <div className={styles['container']}>
         <ReactLoading type='spinningBubbles' color='#764AF1' height={80} width={80} />
     </div>
 )
}
export default Spinner