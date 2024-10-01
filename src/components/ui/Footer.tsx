import React from 'react'

type Props = {}

function Footer({ }: Props) {
  return (
    <>
      <div className='w-full p-4 relative bottom-0'>
        <div className="mix-blend-difference">
          <p className='text-black'>&copy; 2024 Strydo Labs | All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer;