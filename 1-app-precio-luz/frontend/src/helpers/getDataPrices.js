// Trae la data y la returnea

const url=import.meta.env.VITE_HOURS_RANGES;

export const data=async()=>{
    const response=await fetch(url)
    
    const data=await response.json();
}