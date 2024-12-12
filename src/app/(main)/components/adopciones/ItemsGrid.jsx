'use client'
import { getProducts } from '@/DAO/products.db';
import React, { useEffect, useState } from 'react'

export const ItemsGrid = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await getProducts()
        setData(resData)
        console.log(resData)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    } 
    fetchData()
  }, [])

  function divideDataInColumns(data) { 
    const columns = [[], [], []]
    let columnIndex = 0
  
    data.forEach((item) => {
      if (columns[columnIndex].length < 2) {
        columns[columnIndex].push(item)
      } else {
        columnIndex = (columnIndex + 1) % 3
        columns[columnIndex].push(item)
      }
    })
  
    return columns
  }

  const columns = divideDataInColumns(data)

  return (
    <section
        aria-labelledby="items-grid"
        className='w-full mx-auto py-6 md:py-12 lg:py-14 px-mobile md:px-tablet lg:px-desktop max-w-content'
    >
        <h2 
            id="items-grid"
            className="text-2xl lg:text-3xl font-normal text-primary leading-120"
        >
            Descubre a nuestros caballos rescatados en busca de un hogar
        </h2>

        <div className="mt-12 mx-auto flex">
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-[calc(3*325px+2*32px)]'>

            {data.map((item, index) => ( 
                <img key={item.id} src={item.url} alt={item.name} className={`rounded-2xl h-[540px] w-[325px] object-cover lg:hidden`} /> 
            ))}

            <div className={`hidden lg:flex flex-col gap-20 mt-6`}>
              {columns[0].map((item, index) => ( 
                <img key={item.id} src={item.url} alt={item.name} className={`rounded-2xl ${index === 0 ? 'h-[480px]' : 'h-[540px]'} w-[325px] object-cover`} /> 
              ))}
            </div>
            <div className={`hidden lg:flex flex-col gap-16`}>
              {columns[1].map(item => ( 
                <img key={item.id} src={item.url} alt={item.name} className="rounded-2xl h-[540px] w-[325px] object-cover" />
              ))}
            </div>
            <div className={`hidden lg:flex flex-col gap-20 mt-6`}>
              {columns[2].map((item, index) => ( 
                <img key={item.id} src={item.url} alt={item.name} className={`rounded-2xl ${index === 0 ? 'h-[480px]' : 'h-[540px]'} w-[325px] object-cover`} />
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}