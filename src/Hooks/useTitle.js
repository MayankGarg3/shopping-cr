import { useEffect } from 'react'


export const useTitle = (title) => {

useEffect(() => {
    document.title = `${title} | shopMate` 

},[title])
  
return null; 

  
}
