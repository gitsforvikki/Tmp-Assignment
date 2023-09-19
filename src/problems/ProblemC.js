import React from "react";


let ProblemC =()=>{


  return(
    <React.Fragment >
          <div className="bg-gray-100  pt-6 pb-16  sm:px-36 customBg">
          <div className="mb-16">
              <div className=" mx-4 text-center">
                <span className="bg-emerald-400 px-2 py-1 rounded ">Affordable Pricing</span>
                <p className="font-bold text-2xl text-gray-700 my-6">Pricing For Everyone</p>
                <p className="text-gray-500">We have a miltiple plans for a wide range of users. All of which are very </p>
                <p className="text-gray-500" >affordable and feature-full.</p>
              </div>
          </div>

        <div className="sm: grid  sm:grid-cols-3  ">
            {/* first div */}
          <div className=" bg-gray-100 m-3 px-8 py-12 border-1 border-slate-400 rounded shadow-lg">
                <span className="bg-blue-300  ">
                    <svg className="text-blue-500 w-6 h-6 font-bold " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                      <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                    </svg>
                </span>
              <div className="text-3xl  text-gray-700 ">
              <p className=" mt-4 ">The right price </p>
              <p className="">for every usage type</p>
              </div>
              <p className="text-slate-400 mt-4"> From startup to industries. We have plans curatee for all company types.</p>

              {/* button */}

              <p className="bg-blue-500 text-white rounded-full text-center py-2 mt-16 ">
                <span className="inline-block">
                <span className="text-sm">Learn more about pricing</span>
                <svg className="w-4 h-4 inline-block"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                  
                </span>
              </p>
          </div>

            {/* second div */}
          <div className=" bg-white m-3 px-8 py-12 border-1 border-slate-400 rounded shadow-lg">
            <span className="bg-blue-500 px-2 py-1 rounded ">Basic</span>
            <h3 className="font bold text-3xl pt-3  pb-2">Free</h3>
            <h4 className="text-xs text-gray-500">For 1 user</h4>
            <p className="mt-5">
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span>Basic Meeting Modules</span>
            </p>

            <p className="my-4">
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span>Unlimited Meetings</span>
            </p>

            <p>
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span className="">No credit cads require</span>
            </p>

              {/* button */}
            <p className="bg-blue-100 text-blue-500 rounded-full text-center py-2 mt-5 ">
              <span className="inline-block">
                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Create your accounts</span>
              </span>
            </p>
          </div>


            {/* third div */}

          <div className=" bg-black text-white m-3 px-8 py-12 border-1 border-slate-400 rounded shadow-lg">
            <span className="bg-white text-black px-2 py-1 rounded ">Startup</span>
            <h3 className="font bold text-2xl">
              <span className="inline-block flex items-center pt-3  pb-2">
                <svg className=" inline-block w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z" clipRule="evenodd" />
                </svg>
                <span className="font bold text-3xl pt-3  pb-2">300 <sub className="text-xs">/user/year</sub></span>
              </span>
            </h3>
            <h4  className="text-xs text-gray-500">For 10 user</h4>
            <p className="mt-5">
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span>Basic Meeting Modules</span>
            </p>

            <p className="my-4">
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span>Unlimited Meetings</span>
            </p>

            <p>
              <span className="inline-block">
                <svg className="text-blue-500 w-4 h-4 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>
              </span>
              <span className="">No credit cads require</span>
            </p>

                {/* button */}
            <p className="bg-gray-600 text-gray-200 rounded-full text-center py-2 mt-5 ">
              <span className="inline-block">
              <svg className="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>

                <span>Create your accounts</span>
              </span>
            </p>
          </div>
            {/* End of third div */}

       </div>
          </div>
    </React.Fragment>
  )
}

export default ProblemC;