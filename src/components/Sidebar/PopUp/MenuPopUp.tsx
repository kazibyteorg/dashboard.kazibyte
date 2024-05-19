// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';




// const NavbarMenuData = [
 
//   {
//     title: 'Services',
//     href: '/services',
//     sublinks: [
//       {
//         title: 'Full-Stack',
//         href: '/services/full-stack',
//       },

//       {
//         title: 'API Development',
//         href: '/services/api-integration',
//       },
//       {
//         title: 'Website Design',
//         href: '/services/website-design',
//       },
//       {
//         title: 'Case Studies',
//         href: '/services/case-studies',
//       }
//     ],

//   },
//    {
//     title: 'Company',
//     href: '/company',
//     sublinks: [
//       {
//         title: 'About-us',
//         href: '/company/about-us',
//       },
//       {
//         title: 'Blog',
//         href: '/company/blog',
//       },
//       {
//         title: 'Portfolio',
//         href: '/company/portfolio',
//       },
//       {
//         title: 'Why Choose Us',
//         href: '/company/why-choose-us',
//       },
//     ]
//   },
  
// ];

// // import icons from 'hello.png';
// const bodyData = {
//   title: 'Kazibyte',
//   body: 'Software Development Company',
//   // icon: icons,
// }



// const Navbar = () => {
//   const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
//    const [isScrolled, setIsScrolled] = useState<boolean>(false);

  
  
// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   window.addEventListener('scroll', handleScroll);

//   // Cleanup function
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []); // Empty dependency array, so it only runs once on mount


//   const handleMenuHover = (index: number | null) => {
//     setOpenMenuIndex(index);
//   };

//   const handleCloseMenu = () => {
//     setOpenMenuIndex(null);
//   };

//   return (

//     <nav className='' >
//     <div>
//         <div>
       
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex flex-col justify-center gap-6">
//             <div className="">
      
//        {/* <Image width={84} height={84} src={bodyData.icon} alt="logo" /> */}
//             </div>


//                 {NavbarMenuData.map((item, index) => (  
//                   <div key={index} className="relative">
//                     <Link
//                       href={item.href}
//                       className="text-white font-serif hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium uppercase"
//                       onMouseEnter={() => handleMenuHover(index)}
//                       onMouseLeave={handleCloseMenu}
//                     >
//                       {item.title}
//                     </Link>
//                     {item.sublinks && openMenuIndex === index && (
//                       <div
//                         className="absolute z-40 mt-2 w-64 bg-slate-100 dark:bg-slate-700 origin-top-right rounded-md"
//                         onMouseEnter={() => handleMenuHover(index)}
//                         onMouseLeave={handleCloseMenu} 
//                       >
//                         <div className="py-1">
//                           {item.sublinks.map((sublink, subIndex) => (
//                             <Link
//                               key={subIndex}
//                               href={sublink.href}
//                               className="text-black dark:text-white font-serif block px-4 py-2 text-xl hover:bg-orange-100 dark:hover:bg-zinc-400 hover:underline"
//                             >
//                               {sublink.title}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
           
//             </div>
       
//           </div>
       
//         </div>
    
//     </div>
//     </nav>

//   );
// };

// export default Navbar;


// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const NavbarMenuData = [
//   {
//     title: 'Services',
//     href: '/services',
//     sublinks: [
//       {
//         title: 'Full-Stack',
//         href: '/services/full-stack',
//         sublinks: [
//           {
//             title: 'Frontend',
//             href: '/services/full-stack/frontend',
//           },
//           {
//             title: 'Backend',
//             href: '/services/full-stack/backend',
//           },
//         ],
//       },
//       {
//         title: 'API Development',
//         href: '/services/api-integration',
//       },
//       {
//         title: 'Website Design',
//         href: '/services/website-design',
//       },
//       {
//         title: 'Case Studies',
//         href: '/services/case-studies',
//       },
//     ],
//   },
//   {
//     title: 'Company',
//     href: '/company',
//     sublinks: [
//       {
//         title: 'About-us',
//         href: '/company/about-us',
//       },
//       {
//         title: 'Blog',
//         href: '/company/blog',
//       },
//       {
//         title: 'Portfolio',
//         href: '/company/portfolio',
//         sublinks: [
//           {
//             title: 'Web Development',
//             href: '/company/portfolio/web-development',
//           },
//           {
//             title: 'Mobile Apps',
//             href: '/company/portfolio/mobile-apps',
//           },
//         ],
//       },
//       {
//         title: 'Why Choose Us',
//         href: '/company/why-choose-us',
//       },
//     ],
//   },
// ];

// const bodyData = {
//   title: 'Kazibyte',
//   body: 'Software Development Company',
//   // icon: icons,
// };

// const Navbar = () => {
//   const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const [openSubMenuIndex, setOpenSubMenuIndex] = useState<{ [key: number]: number | null }>({});

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleMenuHover = (index: number | null) => {
//     setOpenMenuIndex(index);
//   };

//   const handleCloseMenu = () => {
//     setOpenMenuIndex(null);
//   };

//   const handleSubMenuHover = (menuIndex: number, subMenuIndex: number | null) => {
//     setOpenSubMenuIndex((prev) => ({
//       ...prev,
//       [menuIndex]: subMenuIndex,
//     }));
//   };

//   return (
//     <nav className=''>
//       <div>
//         <div>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <div className="flex flex-col justify-center gap-6">
//                 <div className="">
//                   {/* <Image width={84} height={84} src={bodyData.icon} alt="logo" /> */}
//                 </div>

//                 {NavbarMenuData.map((item, index) => (
//                   <div key={index} className="relative">
//                     <Link
//                       href={item.href}
//                       className="text-white font-serif hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium uppercase"
//                       onMouseEnter={() => handleMenuHover(index)}
//                       onMouseLeave={handleCloseMenu}
//                     >
//                       {item.title}
//                     </Link>
//                     {item.sublinks && openMenuIndex === index && (
//                       <div
//                         className="absolute z-40 mt-2 w-64 bg-slate-100 dark:bg-slate-700 origin-top-right rounded-md"
//                         onMouseEnter={() => handleMenuHover(index)}
//                         onMouseLeave={handleCloseMenu}
//                       >
//                         <div className="py-1">
//                           {item.sublinks.map((sublink, subIndex) => (
//                             <div key={subIndex} className="relative">
//                               <Link
//                                 href={sublink.href}
//                                 className="text-black dark:text-white font-serif block px-4 py-2 text-xl hover:bg-orange-100 dark:hover:bg-zinc-400 hover:underline"
//                                 onMouseEnter={() => handleSubMenuHover(index, subIndex)}
//                                 onMouseLeave={() => handleSubMenuHover(index, null)}
//                               >
//                                 {sublink.title}
//                               </Link>
//                               {sublink.sublinks && openSubMenuIndex[index] === subIndex && (
//                                 <div
//                                   className="absolute z-50 mt-2 w-48 bg-slate-200 dark:bg-slate-600 origin-top-left rounded-md"
//                                   onMouseEnter={() => handleSubMenuHover(index, subIndex)}
//                                   onMouseLeave={() => handleSubMenuHover(index, null)}
//                                 >
//                                   <div className="py-1">
//                                     {sublink.sublinks.map((nestedSublink, nestedIndex) => (
//                                       <Link
//                                         key={nestedIndex}
//                                         href={nestedSublink.href}
//                                         className="text-black dark:text-white font-serif block px-4 py-2 text-lg hover:bg-orange-100 dark:hover:bg-zinc-400 hover:underline"
//                                       >
//                                         {nestedSublink.title}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Camera,DivideSquare, CornerDownRight, CornerLeftDown, Square, Navigation, Grid,CheckCircle, PlayCircle, CornerUpRight, AlertOctagon } from 'react-feather';



const NavbarMenuData = [
  {
    title: 'Services',
    href: '/services',
    icon: <Grid />,
    sublinks: [
      {
        title: 'Full-Stack',
        href: '/services/full-stack',
        icon: <DivideSquare />,
        sublinks: [
          {
            title: 'Frontend',
            href: '/services/full-stack/frontend',
            icon: <CornerDownRight />,
          },
          {
            title: 'Backend',
            href: '/services/full-stack/backend',
            icon: <CornerDownRight />,
          },
        ],
      },

      {
        title: 'API Development',
        href: '/services/api-integration',
        icon: <CornerUpRight />,
        sublinks: [
          {
            title: 'API Development',
            href: '/services/api-integration/api-development',
            icon: <CornerLeftDown />,
          },
          {
            title: 'API Integration',
            href: '/services/api-integration/api-integration',
            icon: <CornerLeftDown />,
          },
          {
            title: 'API Testing',
            href: '/services/api-integration/api-testing',
            icon: <CornerLeftDown />,
          },
          {
            title: 'API Security',
            href: '/services/api-integration/api-security',
            icon: <CornerLeftDown />,
          },
        ]

      },
      {
        title: 'Website Design',
        href: '/services/website-design',
        icon: <CornerDownRight />,
      },
      {
        title: 'Case Studies',
        href: '/services/case-studies',
        icon: <CornerDownRight />,
      },
    ],
  },
  {
    title: 'Company',
    href: '/company',
    icon: <CheckCircle />,
    sublinks: [
      {
        title: 'About-us',
        href: '/company/about-us',
        icon: <Camera />,
      },
      {
        title: 'Blog',
        href: '/company/blog',
        icon: <PlayCircle />,
      },
      {
        title: 'Portfolio',
        href: '/company/portfolio',
        icon: <CornerUpRight />,
        sublinks: [
          {
            title: 'Web Development',
            href: '/company/portfolio/web-development',
            icon: <AlertOctagon />,
          },
          {
            title: 'Mobile Apps',
            href: '/company/portfolio/mobile-apps',
          },
        ],
      },
      {
        title: 'Why Choose Us',
        href: '/company/why-choose-us',
        icon: <AlertOctagon />,
      },
    ],
  },
];

const bodyData = {
  title: 'Kazibyte',
  body: 'Software Development Company',
  // icon: icons,
};

const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<{ [key: number]: number | null }>({});

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.menu-item')) {
        setOpenMenuIndex(null);
        setOpenSubMenuIndex({});
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleSubMenuClick = (menuIndex: number, subMenuIndex: number) => {
    setOpenSubMenuIndex((prev) => ({
      ...prev,
      [menuIndex]: prev[menuIndex] === subMenuIndex ? null : subMenuIndex,
    }));
  };

  return (
    <nav className=''>
      <div>
        <div>
          <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex flex-col justify-center gap-6">
                <div className="">
                
                </div>

              
                {NavbarMenuData.map((item, index) => (
                  <div key={index} className="relative menu-item">
                    <div
                      onClick={() => handleMenuClick(index)}
                      className="text-black  flex justify-between  dark:text-white bg-orange-100 dark:bg-zinc-400 font-serif hover:bg-gray-100 px-3 py-2 w-64 rounded-md text-sm font-medium uppercase"
                    >
                      {item.icon}
                      <div className='flex justify-between'>
                      {item.title}
                      </div>
                      
                      
                    </div>
                    {item.sublinks && openMenuIndex === index && (
                      <div className="absolute z-40 mt-2 w-64 bg-slate-100 dark:bg-slate-700 origin-top-right rounded-md">
                        <div className="py-1">
                          {item.sublinks.map((sublink, subIndex) => (
                            <div key={subIndex} className="relative menu-item">
                              <div
                                onClick={() => handleSubMenuClick(index, subIndex)}
                                className="text-black flex justify-items-start gap-4  dark:text-white font-serif  px-4 py-2 text-xl hover:bg-orange-100 dark:hover:bg-zinc-400 hover:underline"
                              >
                                <div>
                                    {sublink.icon}
                              </div>
                                {sublink.title}
                              </div>
                              {sublink.sublinks && openSubMenuIndex[index] === subIndex && (
                                <div className="absolute z-50 mt-2 w-64 bg-slate-200 dark:bg-slate-600 origin-top-left rounded-md">
                                  <div className="py-1">
                                    {sublink.sublinks.map((nestedSublink, nestedIndex) => (
                                      <Link
                                        key={nestedIndex}
                                        href={nestedSublink.href}
                                        className="text-black flex justify-items-start dark:text-white font-serif px-4 py-2 text-lg hover:bg-orange-100 dark:hover:bg-zinc-400 hover:underline"
                                      >
                                           <div>
                                    {sublink.icon}
                              </div>
                                        {nestedSublink.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
