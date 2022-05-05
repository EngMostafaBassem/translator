import React, { useState } from 'react'

type TranslateContextTypes={
    from:string;
    setFrom:React.Dispatch<React.SetStateAction<string >>;
    to:string;
    setTo:React.Dispatch<React.SetStateAction<string >>;
    query:string;
    setQuery:React.Dispatch<React.SetStateAction<string >>;
    translated:string;
    setTranslated:React.Dispatch<React.SetStateAction<string>>;
    loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}|null

export const TranslateContext=React.createContext<TranslateContextTypes>(null)

const ContextProvider:React.FC<any>=({children})=>{
    const [query,setQuery]=useState<string>('');
    const [translated,setTranslated]=useState<string>('')
    const [from,setFrom]=useState<string>('de');
    const [to,setTo]=useState<string>('ar');
    const [loading,setLoading]=useState<boolean>(false);
    const CONTEXT_INTIAL_VALUES={
        from,
        setFrom,
        to,
        setTo,
        query,
        setQuery,
        translated,
        setTranslated,
        loading,
        setLoading
    }
    
    return(
        <TranslateContext.Provider value={CONTEXT_INTIAL_VALUES}>
            {children}
        </TranslateContext.Provider>
    )
}
export default ContextProvider



