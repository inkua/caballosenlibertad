import MenuBar from './MenuBar';
import Link from 'next/link';
import { featuresLinks } from '../../links/links';
import NestedLinks from './NestedLinks';
import Image from 'next/image';

export const Header = () => {

    return (
        <header role="header" className={`flex w-full items-center justify-between md:justify-center bg-primary text-whitePrimary px-4 lg:px-10 z-50 fixed top-0 h-[70px] lg:h-[90px] shadow-lg shadow-[rgba(0,0,0,0.35)] transition-all duration-500`}>
            <MenuBar />
            <div className='hidden lg:flex max-screen-layout w-full items-center justify-between'>
                <Link href={'/'}>
                    <Image
                        src="/logoSmall.webp"
                        alt="Imagen logo caballos en libertad"
                        width={80}
                        height={50}
                        className={`block w-[112px] h-[60px]`}
                    />
                </Link>
                <nav>
                    <ul className="flex ml-2 gap-2 items-center justify-between">
                        <li className='whitespace-nowrap'>
                            <Link
                                href={"/"}
                                className={`font-semibold lg:text-sm lg:font-medium 2xl:text-lg xl:font-semibold  px-4 lg:px-2 2xl:px-3 py-1 rounded-sm hover:text-primary2`}
                            >
                                Inicio
                            </Link>
                        </li>
                        {
                            featuresLinks.map((link, index) => (
                                link.children ?
                                    <li key={index} className='whitespace-nowrap '>
                                        <NestedLinks
                                            data={link}
                                        />
                                    </li>
                                    :
                                    <li key={index} className='whitespace-nowrap'>
                                        <Link
                                            href={link.href}
                                            className={`font-semibold lg:font-medium xl:font-semibold lg:text-sm 2xl:text-lg px-4 lg:px-2 2xl:px-3 py-1 rounded-sm hover:text-primary2`}
                                        >
                                            {link.textContent}
                                        </Link>
                                    </li>
                            ))
                        }
                        <li key={'button-contribution'} className='ml-3 inline-flex'>
                            <Link
                                href={'/donar'}
                                className='button-primary xl:px-12 h-[37px] border-none'
                            >
                                <button>DONAR</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}