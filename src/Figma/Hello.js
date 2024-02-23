import React from 'react'


function Hello() {
  return (
    <div>
        <div className='ok'>
            <image src={require('./image.png')} width={515} height={650}/>
        </div>
        <div className='hmm'>
        <h2>Light, Fast & Powerful</h2>
				<p className='para'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br></br> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br></br> 
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
				</p>
        </div>
    </div>
  )
}

export default Hello