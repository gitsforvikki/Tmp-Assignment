import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartContainer, BarPlot ,AreaPlot } from '@mui/x-charts';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Pai from './Pai';


let ProblemB =()=>{

  // 2nd card's chart details
  const uData = [4, 3, 5, 2, 1, 3, 6,2,3];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    'page H',
    'Page I',
    
    
  
  ];

  //3rd card's chart 
  const actionData = [2,1,3,1,2];
const actionLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  
  
];


//4TH CARD

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#61b33b ' : '#308fe8',
  },
}));



//horizontal stacked graph

const uuData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const ppData = [2400, 1398, 5800, 3908, 4800, 3800, 4300];
const xxLabels = [
  ' A',
  ' B',
  ' C',
  ' D',
  ' E',
  'F',
  'G',
];


const data = xxLabels.map((label, index) => ({
  label,
  complete: ppData[index],
  Incomplete: uuData[index],
}));



//2nd vertical stacked chart
const uDataOne = [4, 6, 12, 20, 5];
const pDataOne = [6, 6, 4, 12, 15];
const xLabelsOne = [
  'Low',
  'High',
  'Mediaum',
  'Extream',
  'Final'
  
];



  return(
    <React.Fragment>
       <div className="bg-gray-100 pt-8 customBg">
          <div className="sm:grid sm:grid-cols-7">
            <div className="sm:col-span-6">
              <div className=""> 
                <div className="sm:flex sm:justify-evenly gap-4 py-8 sm:py-12">
                  <div className=" sm:w-96 sm:mx-0  border-2 border-gray-200 rounded shadow-lg mx-4 my-8 sm:my-0  p-4 bg-white">{/* div for four small cards */}
                    <div className="text-gray-500">
                      <span className="flex justify-between">
                        <span>Total Meatings</span>
                        <span>
                          <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="font-bold text-3xl my-3 ">
                      <span className="">145</span>
                    </div>
                    
                    <div className="border-b-2 border-gray-300 text-xs"> {/* Two Lines */}
                      <div className="mb-2">
                        <span>Weekly trend</span>
                        <span>12 %</span>
                        <span>
                          <svg className="w-3 h-3 inline-block text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>

                      <div className="mb-2">
                        <span>Day trend</span>
                        <span>8 %</span>
                        <span>
                            <svg className="text-red-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                            </svg>

                          </span>
                      </div>

                      
                    </div>
                    {/* text-below the line */}
                    <div className="text-xs mt-3">
                        <span className="mr-4">Total Meetings today</span>
                        <span>12</span>
                      </div>
                      
                    
                  </div>

                  {/* 2nd card */}

                  <div className=" sm:w-96  border-2 border-gray-200 rounded shadow-lg mx-4  py-8 px-4 my-8 sm:my-0 sm:mx-0 bg-white">{/* div for four small cards */}
                    <div className="text-gray-500">
                      <span className="flex justify-between">
                        <span>Meating Actions</span>
                        <span>
                          <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="font-bold text-3xl my-3 ">
                      <span className="">6,123</span>
                    </div>
                    
                    <div className="border-b-2 border-gray-300 text-xs  "> {/* chart */}
                      
                    <div className="-mt-16 flex justify-center text-gray-500">
                    <ChartContainer
                      width={500}
                      height={300}
                      series={[{ data: uData, label: 'uv', type: 'bar' }]}
                      xAxis={[{ scaleType: 'band', data: xLabels }]}
                      >
                      <BarPlot />
                    </ChartContainer>
                    </div>
                      
                    </div>
                    {/* text-below the line */}
                    <div className="text-xs mt-3">
                        <span className="mr-4">Day Visits</span>
                        <span>24</span>
                      </div>
                      
                    
                  </div>



                  {/* 3rd card */}
                  <div className=" sm:w-96  border-2 border-gray-200 rounded shadow-lg mx-4 my-8 sm:my-0 py-8 px-4 sm:mx-0 bg-white">{/* div for four small cards */}
                    <div className="text-gray-500">
                      <span className="flex justify-between">
                        <span>Visits</span>
                        <span>
                          <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="font-bold text-3xl my-3 ">
                      <span className="">412</span>
                    </div>
                    
                    <div className="border-b-2 border-gray-300 text-xs  "> {/* chart */}
                      
                    <div className="-mt-16 flex justify-center text-gray-500">
                    <ChartContainer
                      width={500}
                      height={300}
                        series={[
                          {
                            data: actionData,
                            type: 'line',
                            label: 'uv',
                            area: true,
                            stack: 'total',
                          },
                        ]}
                        xAxis={[{ scaleType: 'point', data: actionLabels }]}
                      >
                      <AreaPlot />
                    </ChartContainer>
                    </div>
                      
                    </div>
                    {/* text-below the line */}
                    <div className="text-xs mt-3">
                        <span className="mr-4">Day Visits</span>
                        <span>24</span>
                    </div>
                  </div>



                  {/* 4th card */}
                  <div className=" sm:w-96  border-2 border-gray-200 rounded shadow-lg mx-4 my-8 sm:my-0  py-8 px-4 sm:mx-0 bg-white">{/* div for four small cards */}
                    <div className="text-gray-500">
                      <span className="flex justify-between">
                        <span>Operational efficiency</span>
                        <span>
                          <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="font-bold text-3xl my-3 ">
                      <span className="">75 %</span>
                    </div>
                    
                    <div className="border-b-2 border-gray-300 text-xs  "> {/* chart */}
                      
                    <div className=" my-16 flex justify-center text-gray-500">
                      <Box sx={{ flexGrow: 1 }}>
                        <BorderLinearProgress variant="determinate" value={50} />
                      </Box>
                    </div>
                      
                    </div>
                    {/* text-below the line */}
                    <div className="text-xs mt-3 flex justify-evenly">
                        <span className="">Week ratio</span>
                        <span>24 %
                        <span>
                          <svg className="w-3 h-3 inline-block text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                          </svg>
                        </span> 
                        </span>
                        <span className="">Day ratio</span>
                        <span>14 %
                        <span>
                            <svg className="text-red-900 w-4 h-4 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                            </svg>

                          </span>
                        </span>
                    </div>
                </div>

              </div>
                    
                    {/* Division for 2nd lower section */}
                <div>

                    <div className="sm:flex sm:justify-evenly">
                      {/* 1st horizontal stacked graph */}
                      <div className="border-2 border-gray-200 rounded shadow-lg bg-white p-4 mx-4 my-8 ">
                        <div className="text-gray-500">
                            <p className="border-b border-gray-200">
                              <span>Tasks by Members</span>
                            </p>
                            <p className="flex justify-end">
                              <span>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                              </span>
                            </p>
                        </div>
                        <div>
                          <Chart
                            width={500}
                            height={300}
                            layout="vertical" // Set the chart to a vertical layout
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" /> {/* X-axis is now on the left */}
                            <YAxis dataKey="label" type="category" /> {/* Y-axis is now at the bottom */}
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="complete" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Incomplete" stackId="a" fill="#82ca9d" />
                          </Chart>
                        </div>
                      </div>

                      {/* 2nd vertical stacked chart chart */}

                      <div className="border-2 border-gray-200 rounded shadow-lg bg-white p-4 mx-4 my-8">
                        <div className="text-gray-500">
                            <p className="border-b border-gray-200">
                              <span>Tasks by Priority</span>
                            </p>
                            <p className="flex justify-end">
                              <span>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                              </span>
                            </p>
                        </div>
                        <div>
                          <BarChart
                            width={500}
                            height={500}
                            series={[
                              { data: pDataOne, label: 'InComplete', id: 'completeId', stack: 'total' },
                              { data: uDataOne, label: 'Complete', id: 'inCompleteId', stack: 'total' },
                            ]}
                            xAxis={[{ data: xLabelsOne, scaleType: 'band' }]}
                          />
                        </div>
                      </div>


                        {/* PAI chart */}

                        <div className="border-2 border-gray-200 rounded shadow-lg bg-white p-4 mx-4 my-8">
                        
                        <div>
                          {
                            <Pai/>
                          }
                        </div>
                      </div>
                    </div>
                    
                </div>
              </div>
            </div>
            {/* right most division */}
            <div>
              <div className="px-4 sm:py-10 sm:px-0 w-96   sm:ml-0">
                  <div className="flex items-end">
                    <div className="m-3 sm:m-0 sm:mt-3">
                      <span className="bg-green-400 text-white rounded px-2 py-1  text-4xl font-bold">Visualization</span>
                      <p className="font-bold text-5xl mt-8">Visualize your data to gain a productive advantage</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mt-10">
                      <span>
                        <svg className="w-10 h-10 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-3xl">Daily Analytics</span>
                    </div>

                    <div className="flex items-center mt-5">
                      <span>
                      <svg className="w-10 h-10 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                      </span>
                      <span className="text-3xl">Action Item Trackign</span>
                    </div>


                    <div className="flex items-center mt-5">
                      <span>
                      <svg className="w-10 h-10 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      </span>
                      <span className="text-3xl">Drill-Down charts</span>
                    </div>


                    <div className="flex items-center mt-5 pb-32">
                      <span>
                      <svg className="w-10 h-10 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
                      </span>
                      <span className="text-3xl">KPIs</span>
                    </div>
                  </div>
              </div>

            </div>
          </div>
       </div>
    </React.Fragment>
  )
}

export default ProblemB;