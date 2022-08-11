import   { useState } from "react";
import { Transition } from "@headlessui/react";
  
import {Link} from 'react-scroll'

function HomePage() {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
 
			<nav className=" shadow-sm fixed bg-slate-100   w-full  z-50">
                                
                                
                          
				<div className="w-full ">
					<div className="flex items-center h-20  w-full  ">
						<div className="flex items-center justify-evenly   w-full">
						
							<div className="hidden md:block">
								<div className="ml-10 flex  items-baseline justify-between space-x-80">
									
                                    <div className=" flex  justify-between bg-blue-900 rounded-md ">
                                         
                              
                                    <Link to=''										 
                                         className="cursor-pointer  bg-blue-700   hover:bg-blue-500 text-white px-3 py-2  rounded    " href={""}									>
                                           ورود
                                         </Link>
                                            
                                            <Link to='' 										 
                                         className="cursor-pointer text-lg  hover:bg-blue-500 bg-blue-900   text-white px-3 py-2 rounded   " href={""}									>
                                            ثبت نام
                                         </Link>
                                              
                                         </div>
                                    <div className="flex items-center text-lg  gap-4 ml-10">
                               
                           
                                        <Link to=""
										 
                                    className="cursor-pointer hover:text-blue-600  text-gray-800    px-3 py-2 rounded-md   " href={""}									>
									درباره ما
									</Link>

									<Link to=''
								 className="cursor-pointer font-sans hover:text-blue-600 text-gray-800   px-3 py-2 rounded-md  font-medium"
									>
										 نظرات کاربران
									</Link>

									<Link  to='' 
                                    className="cursor-pointer   hover:text-blue-600 text-gray-800  px-3 py-2 rounded-md    font-medium"
									>
										 سوالات متداول  
									</Link>

									<Link to=""
									 
										className="cursor-pointer   text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md   font-medium"
									>
										   ویژگی ها  
									</Link>

									<Link to=""
									 
									 className="cursor-pointer  hover:text-blue-600   text-gray-800   px-3 py-2 rounded-md "
								 >
									    خانه
								 </Link>
                               
								 <Link to=""
									 
									 className="cursor-pointer  hover:text-blue-600  text-blue-900 font-bold   text-4xl  px-3 py-2 rounded-md "
								 >
									   یادیانا
								 </Link>
                               
                        

                            </div>
                                    
								</div>
							</div>
						</div>
				 			<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition  ease-out duration-100 transform"
					enterFrom="opacity-0  scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref:any) => (
						<div className="md:hidden " id="mobile-menu">
							<div
								ref={ref}
								className="bg-blue-600 ml-32 sticky  px-28 pt-2 pb-5 items-center space-y-5 z-50 sm:px-3  rounded-lg"
							>
								<Link
									to="/"
						 
									className="cursor-pointer   text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									خانه   
								</Link>
								<Link   to="" 
									className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"
								>
								  ویژگی ها
								</Link>

								<Link to="" 
									className="cursor-pointer  text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									   سوالات متداول
								</Link>

								<Link to=""
							  	className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									   نظرات کاربران
								</Link>

								<Link to=""
									className="cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium"
								>
								   درباره ما
								</Link> 
                                <Link to=""
									className="cursor-pointer  text-white block px-3 py-2 rounded-md text-base font-medium"
								>
								      ثبت نام
								</Link> 
                                	
                                    <Link to=""
							  		className="cursor-pointer  text-white block px-3 py-2 rounded-md text-base font-medium"
								>
								   ورود
								</Link> 

								 
								 
							</div>
						</div>
					)}
				</Transition>
			</nav>
 
	);
}

export default HomePage;