'use client'

import { getActiveStories } from '@/DAO/stories.db';
import { useEffect, useState } from 'react'

export const ItemsGrid = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await getActiveStories()
        setData(resData)
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
          <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-content'>
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
                      className="relative group rounded-sm overflow-hidden w-full aspect-[4/6] "
                    >
                      <img
                        src={item.imgUrl || "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp"}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
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