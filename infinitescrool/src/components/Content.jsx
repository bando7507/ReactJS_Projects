import React, { useEffect, useState } from 'react'
import Card from './Card'

function Content() {
    const [page, setPage] = useState(1)    
    const [unImages, setUnImages] = useState([])
    const [loading, setLoading] = useState(true) 

    useEffect(() =>{
        getData()
    },  [page])

    const getData = async () =>{
        const data = await fetch(`https://api.unsplash.com/photos/?client_id=vKhn-hZtyha005goSiLWkaG-bHIqiEQzCp9rCrGYWG8`)
        const api = await data.json()
        setUnImages(state => [...state, ...api])
    }

    const tesScrool = (e) =>{
        const clientHeight = e.target.clientHeight
        const scrollTop = e.target.scrollTop
        const scrollHeight = e.currentTarget.scrollHeight


        if(scrollHeight - scrollTop === clientHeight){
            setPage(state => state + 1)
        }

    }
  return (
    <>
        <section className='container' onScroll={(e) => tesScrool(e)}>
            {unImages.map((item, id) => (
                <Card item={item}  key={id}/>
            ))}
            
        </section>
    </>
  )
}

export default Content