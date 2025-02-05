'use client'
import { getActiveAdoptions } from "@/DAO/adoptions.db";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const imagesBase = [
  {
    original: "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp",
  },
  {
    original: "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp",
  },
  {
    original: "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp",
  },
];

export const Gallery = () => {

  const [data, setData] = useState([])
  const [images, setImages] = useState(imagesBase)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await getActiveAdoptions()
        setData(resData)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    } 
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const newImages = data
        .filter(item => item.imgUrl && item.imgUrl.trim() !== '')
        .map(item => ({ original: item.imgUrl }));
  
      setImages(newImages);
    }
    console.log(data);
  }, [data]);
  

  return (
    <div className='px-mobile py-6 md:py-10 lg:py-12 xl:pt-16 lg:px-tablet'>
      <ImageGallery 
        items={images}
        showThumbnails={false}
        thumbnailPosition={'bottom'}
        showPlayButton={false}
        showBullets={true}
        showIndex={false}
        slideDuration={450}
        startIndex={0}
      />
    </div>
  )
}
