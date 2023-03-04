import React, { useEffect, useState } from 'react'
import Card from './Card'

function Content() {
    const [page, setPage] = useState(1)    
    const [unImages, setUnImages] = useState([])
    const [loading, setLoading] = useState(true) 

    useEffect(() =>{
        getData()
        getData2()
    },  [page])

    const getData = async () =>{
        const data = await fetch(`https://api.unsplash.com/photos/?client_id=vKhn-hZtyha005goSiLWkaG-bHIqiEQzCp9rCrGYWG8`)
        const api = await data.json()
        setUnImages(state => [...state, ...api])
    }

    const getData2 = async () =>{

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '90a435a555msh166f4881aef08d8p16167ajsnfc02e014e14f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
        fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=5.316667&longitude=-4.033333&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
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