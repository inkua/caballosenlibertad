'use client'
import { getProducts } from '@/DAO/products.db';
import React, { useEffect, useState } from 'react'

export const ItemsGrid = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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
          <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(305px,_1fr))] gap-4 md:gap-8 max-w-content'>
            { loading ?
                Array.from({ length: 6 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="animate-pulse bg-gray-200 rounded-2xl w-full h-[540px] overflow-hidden"
                  ></div>
                )) :
                data && data.length > 0 ? (
                  data.map((item) => (
                    <div
                      key={item.id}
                      className="relative group rounded-2xl overflow-hidden w-full h-[540px]"
                    >
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold text-center px-2">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  Array.from({ length: 3 }).map((_, index) => (
                    <div 
                      key={index} 
                      className="animate-pulse bg-gray-200 rounded-2xl w-full h-[540px] overflow-hidden"
                    ></div>
                  ))
                )}
          </div>
        </div>
    </section>
  )
}