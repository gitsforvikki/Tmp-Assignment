import React from "react";


let ProblemA =()=>{
  return(
    <React.Fragment>
      <div className="bg-gray-100  sm:grid sm:grid-cols-3 sm:px-36 customBg">

       
        {/* <div> first division */}
       <div className="flex items-center p-3  ">
          <div className="m-3">
            <span className="bg-orange-500 text-white rounded px-2 py-1 ">New Feature</span>
            <p className="font-bold text-3xl mt-4">Work Like a Pro.</p>
            <p className="font-bold text-3xl mb-3">Powerful features.</p>
            <p className="text-slate-400 text-sm">1: meetings or sprint meetings or stakeholder meets. Creating meeting notes is easy with minutes.</p>
          </div>
        </div>

        {/*  Second division */}
        <div className=" sm:flex sm:items-center">
        <div className="sm:flex sm:flex-col sm:mt-8">
            <div className=" bg-white m-3 px-8 py-12 border-1 border-slate-400 rounded shadow-lg">
                <span className="bg-blue-300  ">
                  <svg className="text-blue-500 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                    <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                  </svg>
                </span>
              <p className="font-bold mt-4 text-xl">MOM Reports</p>
              <p className="text-slate-400 mt-4">Your minutes of meeting reports are mailed to all participants and reminds them on overdue tasks.</p>
            </div>


            <div className=" bg-white mx-3 my-5 px-8 py-12 border-1 border-slate-400 rounded shadow-lg ">
                <span className="bg-blue-300  ">
                  <svg className="text-blue-500 w-6 h-6 font-bold " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                </span>
              <p className="font-bold mt-4 text-xl">Powerful Dashboard</p>
              <p className="text-slate-400 mt-4">Easily create and sort meetings through the dashboard which tracks your actions and progress.</p>
            </div>
        </div>




        {/*  third division */}
        <div className=" sm:flex sm:flex-col sm:items-center sm:mt-8 ">
            <div className=" bg-white m-3 px-8 py-12 border-1 border-slate-400 rounded shadow-lg ">
                <span className="bg-blue-300  ">
                  <svg className=" text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                  </svg>
                </span>
              <p className="font-bold mt-4 text-xl">Invite Participants</p>
              <p className="text-slate-400 mt-4"> Collaborate with your team by adding them as participants and delegate meeting tasks, even if they are outside your org.</p>
            </div>


            <div className=" bg-white mx-3 my-5 px-8 py-12 border-1 border-slate-400 rounded shadow-lg ">
                <span className="bg-blue-300  ">
                  <svg className=" text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                  </svg>
                </span>
              <p className="font-bold mt-4 text-xl">Cloud Storage</p>
              <p className="text-slate-400 mt-4">Your attachments are stored securely and E2E encrypted to provide you a completely secure business solution.</p>
            </div>
        </div>
        </div>

        
      </div>
       
    </React.Fragment>
  )
}

export default ProblemA;