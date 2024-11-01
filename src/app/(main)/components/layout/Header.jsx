import Image from 'next/image';
import MenuBar from './MenuBar';
import Link from 'next/link';
import { featuresLinks } from '../../links/links';

export const Header = () => {

  return (
    <header className={`flex w-full items-center justify-center bg-primary text-whitePrimary px-10 z-50 fixed top-0 h-[70px] lg:h-[90px] shadow-lg shadow-[rgba(0,0,0,0.35)]`}>
        <MenuBar />        
        <div className='max-screen-layout flex w-full items-center justify-between'>

        <Image
            src="/next.svg"
            alt="Imagen logo next" 
            width={148}
            height={92}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
            priority
            className={`hidden lg:block w-[148px] h-[92px]`}
        />
        <nav>
            <ul className="hidden lg:flex ml-2 gap-2 items-center justify-between">
                {
                    featuresLinks.map((link, index) => (
                        <li key={index} className='whitespace-nowrap'>
                            <Link 
                                href={link.href} 
                                className="font-semibold lg:font-medium xl:font-semibold text-[16px] xl:text-[18px] px-4 lg:px-2 xl:px-3 py-1 rounded-sm hover:text-gray-300"
                            >
                                {link.textContent}
                            </Link>
                        </li>
                    ))
                }
                <li key={'button-contribution'} className='ml-3 inline-flex'>
                    <Link 
                        href={'/'}
                        className='button-primary xl:px-12 h-[37px] border-none'
                    >
                        DONAR
                    </Link>
                </li>
            </ul>
        </nav>            
        </div>
    </header>
  )
}