import { Facebook } from 'assets/icon/Facebook'
import { Instagram } from 'assets/icon/Instagram'
import { Twitter } from 'assets/icon/Twitter'
import logo from 'assets/images/logo-two.png'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import { openCartDrawer } from 'store/atoms'

export const Footer = () => {
  const [openCart] = useAtom(openCartDrawer)

  return (
    <footer
      className={`bg-[#333333] px-6 py-4 text-white md:px-10 flex flex-wrap gap-5 items-center justify-between ${
        openCart ? 'mr-96 -ml-96' : 'mr-0 -ml-0'
      }`}>
      <div>
        <Image
          alt='lavidluxe logo'
          src={logo}
          className='w-10 object-cover invert'
        />
        <p className='text-xs pt-1'>
          All rights reserved. &copy; {new Date().getFullYear()}{' '}
          <Link href='/'>lavidluxe.com</Link>
        </p>
        {/* <h3 className='text-3xl font-black'>Lavidluxe</h3> */}
      </div>
      <a
        href='https://williamssam.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[0.6rem] text-gray-300'>
        Designed and developed by{' '}
        <span className='font-bold'>Williams Samuel</span>
      </a>
      <ul className='flex items-center gap-4 text-white'>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='#'
            className='hover:text-main transition-all'>
            <Facebook />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='#'
            className='hover:text-main transition-all'>
            <Twitter />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='#'
            className='hover:text-main transition-all'>
            <Instagram />
          </a>
        </li>
      </ul>
    </footer>
  )
}
