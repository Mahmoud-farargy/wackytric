import { useEffect, useState } from 'react'

export const useScrollTo = () => {
    const [id, elementId] = useState(null);
    useEffect(() => {
       const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        }
    }, [id]);

  return [elementId];
}
