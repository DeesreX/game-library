import React from 'react';

function Testimonials() {
  return (
    <div className='testimonials'>
      <h2 className='testimonials-title'>What Our Customers Say</h2>
      <div className='testimonials-container'>
        <div className='testimonial'>
          <p className='testimonial-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 className='testimonial-author'>- Author 1</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 className='testimonial-author'>- Author 2</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 className='testimonial-author'>- Author 3</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;