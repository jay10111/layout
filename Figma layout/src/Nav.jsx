import React from 'react'

function Nav() {
  return (
    <>

 <header className="px-8">
      <div className="max-w-7xl bg-white shadow-md border-2 rounded-2xl mt-15 container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center px-5">
          {/* Logo can be added here */}
          <span className="text-blue-500 font-bold text-xl"><img className='w-12' src="./Layer 1.png" alt="" /></span>
        </div>
        <nav className="hidden md:flex space-x-9">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Technologies</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Career</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Page</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>
        <a href="#" className="bg-white text-blue border-1 border-indigo-500 shadow-md py-2 px-4 rounded hover:bg-blue-600">Get In Touch</a>
      </div>
    </header>
    <div className='bg-img z-10 grid grid-cols-3 -mt-40'>
      <div>
        <img className='w-[600px] h-full' src="./Vector (4).png" alt="" />
        </div>
        <div></div>
         
        <div>
        <img className='w-[600px] h-full'  src="./Vector (5).png" alt="" />
        </div>
      
      </div>
      <br />
      <div className=' m-5'  >
  <img src="./image (4).png" alt="" width={1500} />
<br />
</div>
       <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> <br />
       <p>dolor sit amet, consectetur adipiscing elit. Curabitur ultrices porttitor turpis eu facilisis. Vivamus sollicitudin diam porttitor varius congue. In convallis egestas sagittis. Nullam commodo pretium justo, maximus aliquam enim tincidunt pulvinar. Quisque egestas mauris enim, ac dignissim orci dignissim eu. Vivamus sit amet odio vitae libero accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget commodo ante. Fusce est justo, varius vel vestibulum eleifend, interdum et turpis. Sed tincidunt est vel mi tristique blandit. Sed vitae augue sem. In hac habitasse platea dictumst. Praesent at velit vitae quam semper finibus rhoncus sed enim. Sed eu ipsum vehicula metus porta pretium quis sit amet odio.</p>

       <br />
      <div className=' m-5'  >
  <img src="./image (0).png" alt="" width={1500} />
<br />
</div>
       <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> <br />
       <p>dolor sit amet, consectetur adipiscing elit. Curabitur ultrices porttitor turpis eu facilisis. Vivamus sollicitudin diam porttitor varius congue. In convallis egestas sagittis. Nullam commodo pretium justo, maximus aliquam enim tincidunt pulvinar. Quisque egestas mauris enim, ac dignissim orci dignissim eu. Vivamus sit amet odio vitae libero accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget commodo ante. Fusce est justo, varius vel vestibulum eleifend, interdum et turpis. Sed tincidunt est vel mi tristique blandit. Sed vitae augue sem. In hac habitasse platea dictumst. Praesent at velit vitae quam semper finibus rhoncus sed enim. Sed eu ipsum vehicula metus porta pretium quis sit amet odio.</p>
     <br /><br />
      
       <div className="max-w-3xl mx-auto p-6 border-r-6 border-b-5 border-l-2 border-t-2 bg-amber-40 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Comment</h2>
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-start space-x-4 border-b pb-4">
            <img
              src="./image (00).png"
              alt="User"
              className="w-12 h-12  object-cover"
            />
            <div>
              <h3 className="font-semibold">Stanio Lainto</h3>
              <p className="text-gray-600 text-sm">
                Aliquam Eros Justo, Posuere Lobortis Viverra Laoreet Mattis 
                Ullamcorper Posuere Viverra. Aliquam Eros Justo, Posuere 
                Lobortis, Viverra Laoreet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
       <br /><br />
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg  border-r-6 border-b-5 border-l-2 border-t-2">
      <h2 className="text-xl font-bold">LEAVE A COMMENT</h2>
      <p className="text-gray-500 text-sm mb-4">You Must Have To Log In For Comment</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="email" 
          placeholder="Enter Your Email Address" 
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <input 
          type="text" 
          placeholder="Enter Your Phone" 
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <input 
        type="text" 
        placeholder="Enter Your Address" 
        className="border border-gray-300 p-2 rounded-md w-full mt-4"
      />

      <textarea 
        placeholder="Write Message..." 
        className="border border-gray-300 p-2 rounded-md w-full mt-4 h-24"
      />

      <button className="mt-4 text-blue-500 font-semibold flex items-center">
        Send Now <span className="ml-2">→</span>
      </button>
    </div>

   

     
    <br /><br />
  

      
 
    </>
  )
}

export default Nav