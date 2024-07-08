import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white flex items-center justify-center h-16">
      <div className='flex space-x-10'>
        <p>Contact Us: <a type='email' className='text-blue-500'>contactloot@gmail.com</a></p>
        <br/>
        <p>Developed by: <a href='https://github.com/saidinesh49' target='_blank' className='text-red-600'>saidinesh49</a></p>
      </div>
    </div>
  );
}

export default Footer;
