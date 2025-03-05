import React from 'react';
function Card({username, btnText='Hit me'}) {
    console.log(username, btnText);
    return ( 
        <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        <img
          src="https://images.pexels.com/photos/30387653/pexels-photo-30387653.jpeg"
          alt=""
          className=" object-center w-full rounded-t-md h-50"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
           {btnText}
          </button>
        </div>
      </div>
      </>
     );
}

export default Card;