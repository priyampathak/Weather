import React from 'react'
import imgs from './assets/w1.svg'
import { useState, useEffect } from 'react';



export default function Main() {
    const [data, setData] = useState('');
    const [city, setCity] = useState(`Chennai`)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},INSS&appid=a9a4d7985bbbed974299fa8caac399bf`
    let inp = ''

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
        }
        });

        const responseData = await response.json();
        setData(responseData);
        } catch (error) {
        console.log("error 9011", error);
        }
    };

    fetchData();
}, [city]);

    function cc(){
        setCity(inp)
        console.log(inp)
    }

    console.log(data);
    let temp = Math.round((data?.main?.temp)-273.15)+'°C'
    let fl = Math.round((data?.main?.feels_like)-273.15)+'°C'
    let des = (data && data.weather && data.weather[0] && data.weather[0].description) || 'NaN'
    let loc = (data?.name)
    return (
        <>
        <div className="main sm:flex sm:h-screen">
            <div className=" bg-slate-700 rounded-md sm:h-96 w-2/4 sm:m-auto text-left shadow-2xl shadow-black sm:pt-36 m-auto mb-4 pb-2 pt-2">
                <p className="mb-4 font-medium font sm:text-4xl mx-8 text-slate-400">Find the city</p>
                <input type='search' className="ml-8 sm:h-10 rounded-md bg-gray-500 sm:px-2 mb-2 sm:backdrop sm:w-72 - w-24 px-2" placeholder='Delhi' onChange={(p)=>inp = p.target.value}/>
                <button className=" bg-gray-800 sm:px-6 sm:py-2 sm:ml-8 text-slate-400 rounded-md shadow-lg - px-2 ml-7" onClick={cc}>Search</button>

            </div>
            <div className=" bg-black rounded-lg sm:h-80 w-2/4 flex m-auto">
            <div className="w-2/4">
                <h2 className="text-left ml-6 mt-6">{loc}</h2>
                <img src={imgs} className="sm:ml-14 sm:mt-8 sm:w-36 ml-4 w-14"/>
                <h2 className="text-left ml-6 sm:mt-14">{des[0].toUpperCase() + des.slice(1)}</h2>
                
            </div>
            <div className="font-medium sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl pt-24 pl-14 sm:mr-4 sm:mt-4">{temp}</div>
            </div>
        </div>
        </>
    )
}
