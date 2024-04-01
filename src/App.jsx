import { useEffect, useState } from 'react'
import './App.css'
import Bg1 from './assets/4K_3.webm';
import CEO from './assets/Images/MyImg.svg'
import figma from './assets/Images/tools/figma.png'
import framer from './assets/Images/tools/framer.png'
import html from './assets/Images/tools/HTML5.png'
import illustrator from './assets/Images/tools/illustrator.png'
import photoshop from './assets/Images/tools/photoshop.png'
import react from './assets/Images/tools/React.png'
import wordpress from './assets/Images/tools/wordpress.png'
import web from './assets/Images/icons/webdev.svg'
import ui from './assets/Images/icons/ui_designs.svg'
import illustration from './assets/Images/icons/illustrations.svg'
import Wp from './assets/Images/icons/WordPress.svg'
import Button1 from './components/Button1'
import MyProfile from './assets/Images/My_profile.png'
import illus from './assets/Images/skills/ill.png'
import Bs5 from './assets/Images/skills/Bootstrap.png'
import css from './assets/Images/skills/CSS3.png'
import Fig from './assets/Images/skills/Figma.png'
import html5 from './assets/Images/skills/Html.png'
import ps from './assets/Images/skills/ps.png'
import Py from './assets/Images/skills/Python.png'
import Re from './assets/Images/skills/React.png'
import Tail from './assets/Images/skills/Tailwind.png'
import Flask from './assets/Images/skills/Flask.png'

import proj1 from './assets/Images/proj1.png';
import flask_tech from './assets/Images/tech/flask.png'
import python_tech from './assets/Images/tech/python.png'
import firebase_tech from './assets/Images/tech/firebase.png'
import react_tech from './assets/Images/tech/react.png'
import tailwind_tech from './assets/Images/tech/tailwind.png'

import Facebook from './components/social/Facebook'
import Insta from './components/social/Insta'
import Whatsapp from './components/social/Whatsapp'
import Twitter from './components/social/Twitter'
import Github from './components/social/Github'
import Linkedin from './components/social/Linkedin'
import Behance from './components/social/Behance'
import Discord from './components/social/Discord'


function App() {
  const [Load,setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  return (

    <div className='w-full h-full'>
      {Load ? (
        <div className='fixed w-full h-screen bg-slate-900 z-40 flex items-center justify-center'>
          <div class="loader">Loading
          <span></span>
        </div>
        </div>
      ):(
        <div className='relative App w-full h-full'>
        <video className='w-full h-screen fixed object-cover -z-10' src={Bg1} muted loop autoPlay></video>
  
        <div id='Intro-section' className='w-full h-screen relative overflow-x-hidden flex flex-col md:justify-end pt-10 md:pb-36'>
          <div className='h-auto md:w-2/3 md:mx-auto flex flex-col gap-3 md:gap-10'>
            <div className='pl-5 md:pl-36'>
              <p className='text-white text-xs md:text-lg font-audiowide'>Hi There...</p>
            </div>
            <div className='w-fit h-fit border border-sky-500 relative ml-10 md:ml-56 my-1 z-0'>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -left-0.5 md:-top-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 bg-sky-500 border border-white'></span>
              <p className='text-white text-xs md:text-lg font-audiowide mx-3 my-1'>i'm<span className='text-md md:text-3xl'> Siva</span></p>
            </div>
            <div className='h-auto flex flex-col gap-2 md:gap-28'>
              <div className='w-full h-fit relative flex justify-center'>
                <p className='outlined-text stroke-white absolute text-2xl md:text-6xl lg:text-7xl font-audiowide z-30'>UI/UX Designer</p>
                <p className='text-white absolute text-2xl md:text-6xl lg:text-7xl font-audiowide'>UI/UX Designer</p>
              </div>
              <div className='w-full md:hidden flex justify-center items-center'>
                <p className='text-white mt-5'>&</p>
              </div>
              <div className='w-full h-fit flex justify-center text-white'>
                <p className='absolute hidden md:block text-3xl md:text-7xl lg:text-8xl font-audiowide'>Frontend Developer</p>
                <p className='outlined-text absolute text-3xl md:text-7xl lg:text-8xl font-audiowide z-30'>Frontend Developer</p>
              </div>
            </div>
            <div className='w-full flex justify-end mt-8 md:mt-24'>
              <div className='w-fit border h-fit border-sky-500 relative mr-4 z-20'>
                <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -left-0.5 md:-top-1 md:-left-1 bg-sky-500 border border-white'></span>
                <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-sky-500 border border-white'></span>
                <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 bg-sky-500 border border-white'></span>
                <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 bg-sky-500 border border-white'></span>
                <p className='text-white text-xs md:text-lg font-audiowide mx-3 my-1'>at your service...</p>
              </div>
            </div>
          </div>
          <div className='w-full absolute bottom-10 md:bottom-32'>
              <div className='w-full h-fit z-0'>
                <div className='absolute top-16 md:top-32 lg:top-38 w-full flex justify-center'>
                  <div className='flex w-3/5 md:w-3/5 lg:w-1/5 justify-between'>
                    <img className='size-10 md:size-14 lg:size-20' src={figma} alt="figma" />
                    <img className='size-10 md:size-14 lg:size-20' src={illustrator} alt="ai" />
                  </div>
                </div>
                <div className='absolute top-4 md:top-6 lg:top-6 w-full flex justify-center'>
                  <div className='flex w-5/6 md:w-2/3 lg:w-1/3 justify-between'>
                    <img className='size-10 md:size-14 lg:size-20' src={framer} alt="framer" />
                    <img className='size-10 md:size-14 lg:size-20' src={react} alt="react" />
                  </div>
                </div>
                <div className='absolute -top-10 md:-top-16 lg:-top-20 w-full flex justify-center'>
                  <div className='flex w-3/5 md:w-2/5 lg:w-1/5 justify-between'>
                    <img className='size-10 md:size-14 lg:size-20' src={photoshop} alt="ps" />
                    <img className='size-10 md:size-14 lg:size-20' src={html} alt="html" />
                  </div>
                </div>
                <div className='absolute -top-16 md:-top-20 lg:-top-28 w-full flex justify-center'>
                  <img className='size-10 md:size-14 lg:size-20' src={wordpress} alt="wp" />
                </div>
              </div>
              <div className='w-full flex justify-center'>
                <img className='img min-w-auto min-h-auto max-w-[420px] md:max-w-[650px] lg:max-w-[960px] px-5 z-10' src={CEO} alt="My Profile Img" />
              </div>
          </div>
        </div>
  
        {/* who am i section  */}
        <div className='w-full h-screen flex flex-col justify-between '>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>who am i</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
          <div className='w-11/12 md:w-1/2 h-1/2 md:h-2/3 mx-auto'>
            <div className='h-full w-full grid grid-cols-3 grid-rows-2 gap-3 text-white'>
              <div className='bg-white/10 backdrop-blur-md rounded-md col-span-2 md:col-span-1 overflow-hidden border border-white/50'>
                  <img className='size-fit' src={MyProfile} alt="" />
              </div>
              <div className='bg-white/10 backdrop-blur-md flex flex-col md:gap-3 items-center justify-center rounded-md col-span-1 md:col-span-2 border border-white/50'>
                <p className='font-audiowide text-xl md:text-4xl'>Hi !</p>
                <p className='font-audiowide text-sm md:text-3xl'>I'm siva...</p>
              </div>
              <div className='bg-white/10 backdrop-blur-md flex items-center justify-center p-2 md:p-10 rounded-md col-span-3 border border-white/50'>
                <p className='font-fredoka text-sm md:text-xl lg:text-2xl text-center'>Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive.</p>
              </div>
            </div>
          </div>
          <div className='w-full h-fit flex justify-center pb-5'>
            <Button1/>
          </div>
        </div>
  
  
        {/* what i do and My skills section */}
        <div className='w-full h-screen flex flex-col justify-between pb-6'>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>what i do</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
          <div className='w-11/12 md:w-3/5 h-1/3 md:h-1/2 mx-auto'>
            <div className='h-full w-full grid grid-cols-5 grid-rows-2 gap-3 text-white'>
              <div className='bg-white/10 rounded-md col-span-2 overflow-hidden border border-white/50 flex flex-col md:flex-row items-center justify-center gap-4'>
                  <img className='size-14 md:size-32' src={web} alt="" />
                  <p className='font-audiowide text-xs md:text-xl'>Web development</p>
              </div>
              <div className='bg-white/10 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center rounded-md col-span-3 border border-white/50 '>
                <img className='size-14 md:size-32' src={ui} alt="" />
                <p className='font-audiowide text-xs md:text-xl'>Ui/UX Designs</p>
              </div>
              <div className='bg-white/10 flex flex-col md:flex-row items-center justify-center gap-3 p-2 md:p-10 rounded-md col-span-3 border border-white/50'>
                <img className='size-14 md:size-32' src={Wp} alt="" />
                <p className='font-audiowide text-xs md:text-xl'>Wordpress CMS</p>
              </div>
              <div className='bg-white/10 flex flex-col md:flex-row items-center justify-center rounded-md border border-white/50 col-span-2'>
                <img className='size-14 md:size-32' src={illustration} alt="" />
                <p className='font-audiowide text-xs md:text-xl text-center'>Logo's <br /> & <br /> Illustrations</p>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>My Skills</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
          <div className='w-11/12 h-1/6 md:h-1/5 flex items-center mx-auto md:w-3/5 bg-gradient-to-l from-transparent via-white/25 to-transparent'>
          <div
          x-data="{}"
          x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
          })" 
        className='w-full inline-flex flex-nowrap py-7 md:py-20 overflow-hidden'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              <li><img className='size-10 md:size-20' src={css} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Bs5} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Fig} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Flask} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Tail} alt="" /></li>
              <li><img className='size-10 md:size-20' src={illus} alt="" /></li>
              <li><img className='size-10 md:size-20' src={html5} alt="" /></li>
              <li><img className='size-10 md:size-20' src={ps} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Py} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Re} alt="" /></li>
  
            </ul>
  
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden="true">
              <li><img className='size-10 md:size-20' src={css} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Bs5} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Fig} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Flask} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Tail} alt="" /></li>
              <li><img className='size-10 md:size-20' src={illus} alt="" /></li>
              <li><img className='size-10 md:size-20' src={html5} alt="" /></li>
              <li><img className='size-10 md:size-20' src={ps} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Py} alt="" /></li>
              <li><img className='size-10 md:size-20' src={Re} alt="" /></li>
            </ul>
        </div>
          </div>
  
  
        </div>
  
  
        {/* Career Timeline*/}
        <div className='w-full h-screen flex items-center justify-between flex-col gap-5'>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>My Career Timeline</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
  
          <div class="space-y-8 w-full md:w-1/2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
  
              {/* <!-- Item #1 --> */}
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* <!-- Icon --> */}
                  <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-200 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded border border-slate-200 shadow">
                      <div class="flex items-center justify-between space-x-2 mb-1">
                          <div class="font-bold text-white">SSLC Education</div>
                          <time class="font-caveat font-medium text-indigo-500">84%</time>
                      </div>
                      <div class="text-slate-200">St.Xaviers Higher Secondary school</div>
                      <div class="text-slate-200">(2017 - 2018)</div>
                  </div>
              </div>
  
              {/* <!-- Item #2 --> */}
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* <!-- Icon --> */}
                  <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-200 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded border border-slate-200 shadow">
                      <div class="flex items-center justify-between space-x-2 mb-1">
                          <div class="font-bold text-white">Higher Secondary Education</div>
                          <time class="font-caveat font-medium text-indigo-500">59%</time>
                      </div>
                      <div class="text-slate-200">St.Xaviers higher secondary school</div>
                      <div class="text-slate-200">(2018 - 2020)</div>
                  </div>
              </div>
  
              {/* <!-- Item #3 --> */}
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ">
                  {/* <!-- Icon --> */}
                  <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-200 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded border border-slate-200 shadow">
                      <div class="flex items-center justify-between space-x-2 mb-1">
                          <div class="font-bold text-white">B.Sc.Computer Science</div>
                          <time class="font-caveat font-medium text-indigo-500">82.95%</time>
                      </div>
                      <div class="text-slate-200">Merit college of Arts and science</div>
                      <div class="text-slate-200">(2020 - 2023)</div>
                  </div>
              </div>
  
              {/* <!-- Item #4 --> */}
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* <!-- Icon --> */}
                  <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-200 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                          <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                  </div>
                  {/* <!-- Card --> */}
                  <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded border border-slate-200 shadow">
                      <div class="flex items-center justify-between space-x-2 mb-1">
                          <div class="font-bold text-white">UI/UX Design Internship</div>
                          <time class="font-caveat font-medium text-indigo-500">Present</time>
                      </div>
                      <div class="text-slate-200">Viswa digital technology. Chennai</div>
                      <div class="text-slate-200">(July 2018 - October 2020)</div>
                  </div>
              </div>
          </div>
  
          <div></div>
        </div>
  
        {/* My Projects */}
        <div className='w-full h-screen flex flex-col items-center justify-between '>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>My Projects</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
          <div className='w-full flex flex-col md:flex-row items-center justify-center'>
            <img className='md:w-1/2' src={proj1} alt="" />
            <div className='w-11/12 h-fit md:w-2/5 md:h-2/3 bg-white/10 backdrop-blur-md rounded-md text-white px-2 py-3 md:p-8 font-fredoka flex flex-col items-center justify-between gap-5'>
              <p className='font-audiowide md:text-xl'>MSU Result Analyzer</p>
              <p className='self-start underline text-md md:text-lg'>Discription</p>
              <p className='self-center w-10/12'>A web scraper website which scraps exam result data of a whole class from MS University website and present it in tabular format</p>
              <p className='self-start underline text-md md:text-lg'>Technologies used:</p>
              <div className='flex items-center w-full justify-around'>
                <img className='size-12 md:size-20' src={react_tech} alt="" />
                <img className='size-12 md:size-20' src={tailwind_tech} alt="" />
                <img className='size-12 md:size-20' src={python_tech} alt="" />
                <img className='size-12 md:size-20' src={flask_tech} alt="" />
                <img className='size-12 md:size-20' src={firebase_tech} alt="" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
  
        {/* contact me */}
        <div className='w-full h-screen flex flex-col items-center justify-between '>
          <div className='w-full flex flex-col gap-2 items-center pt-6 md:pt-10'>
            <p className='text-white font-audiowide text-lg md:text-2xl'>Contact me</p>
            <span className='border border-white w-1/6 md:w-20'></span>
          </div>
          <div className='w-full h-1/2 flex flex-col items-center justify-center gap-3'>
            <input className='w-10/12 md:w-2/5 h-10 md:h-14 rounded-md bg-white/25 backdrop-blur-md px-2' type="text" placeholder='Enter your E-mail' />
            <textarea className='w-10/12 md:w-2/5 md:h-44 rounded-md bg-white/25 backdrop-blur-md px-2' name="message" id="" cols="30" rows="5" placeholder='Enter your Message'></textarea>
            <button className='w-48 h-10 bg-transparent border border-0.5 rounded-full text-white text-sm font-audiowide hover:scale-105 duration-200 ease-in-out active:scale-95'>Get in touch</button>
          </div>
          <div className='w-11/12 md:w-full md:h-1/5 h-2/5 md:px-10 bg-white/10 backdrop-blur-md rounded-md mb-4 pt-3 flex flex-col md:flex-row items-center justify-around md:justify-between text-white font-fredoka'>
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-2'>
              <p className='font-glitch text-3xl'>siva</p>
              <p>contact : +91 7904391341</p>
              <p>E-Mail : ceosivaofficial@gmail.com</p>
            </div>
            <div className='h-fit grid grid-cols-4 grid-rows-2 gap-5'>
              <Facebook/>     
              <Github/>
              <Whatsapp/>
              <Linkedin/>
              <Twitter/>
              <Insta/> 
              <Behance/>
              <Discord/>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>


  )
}

export default App
