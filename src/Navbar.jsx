// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="text-white font-bold text-xl">Lemon Software  Gate Pass</div>

//           {/* Hamburger button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white focus:outline-none text-2xl"
//             >
//               ☰
//             </button>
//           </div>

//         {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center font-medium text-white">
//             {/* Admin Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none"
//               >
//                 Admin <span className="ml-1">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-50 py-2">
//                   <Link to="/plantmaster" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Plant Master</Link>
//                   {/* <Link to="/zone-master" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Zone Master</Link>
//                   <Link to="/user-master" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">User Master</Link> */}
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => setDispatcherOpen(!dispatcherOpen)}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none"
//               >
//                 Dispatcher <span className="ml-1">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-50 py-2">
//                   <Link to="/truck" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Truck Transaction</Link>
//                 </div>
//               )}
//             </div>

//             {/* Static Links */}
//             <Link to="/gate" style={{ textDecoration: 'none' }} className="text-white hover:text-yellow-400">Gate Keeper</Link>
//             <Link to="/loader" style={{ textDecoration: 'none' }} className="text-white hover:text-yellow-400">Loader</Link>
//             <Link to="/reports" style={{ textDecoration: 'none' }} className="text-white hover:text-yellow-400">Reports</Link>
//           </div>
//         </div>


//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 space-y-2 bg-gray-900 p-4 rounded shadow-md text-white font-medium z-50">
//             {/* Admin mobile */}
//             <div>
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="w-full text-left hover:text-yellow-400"
//               >
//                 Admin ▼
//               </button>
//               {adminOpen && (
//                 <div className="pl-4 space-y-1 mt-1">
//                   <Link to="/plantmaster" className="block hover:text-yellow-400">Plant Master</Link>
//                   {/* <Link to="/zone-master" className="block hover:text-yellow-400">Zone Master</Link>
//                   <Link to="/user-master" className="block hover:text-yellow-400">User Master</Link> */}
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher mobile */}
//             <div>
//               <button
//                 onClick={() => setDispatcherOpen(!dispatcherOpen)}
//                 className="w-full text-left hover:text-yellow-400"
//               >
//                 Dispatcher ▼
//               </button>
//               {dispatcherOpen && (
//                 <div className="pl-4 space-y-1 mt-1">
//                   <Link to="/truck" className="block hover:text-yellow-400">Truck Transaction</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/gate" className="block hover:text-yellow-400">Gate Keeper</Link>
//             <Link to="/loader" className="block hover:text-yellow-400">Loader</Link>
//             <Link to="/reports" className="block hover:text-yellow-400">Reports</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <div className="text-white font-bold text-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
//             Lemon Software Gate Pass
//           </div>

//           {/* Hamburger button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white hover:text-yellow-400 focus:outline-none text-2xl transform transition-all duration-300 hover:scale-110"
//             >
//               ☰
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center font-medium text-white">
//             {/* Admin Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setAdminOpen((prev) => {
//                     if (!prev) setDispatcherOpen(false);
//                     return !prev;
//                   });
//                 }}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none transition-all duration-300 transform hover:scale-105"
//               >
//                 Admin <span className="ml-1 text-sm">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 transform transition-all duration-300 border border-gray-700">
//                   <Link 
//                     to="/plantmaster" 
//                     className="block px-6 py-3 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
//                   >
//                     <span className="mr-2">🏭</span> Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setDispatcherOpen((prev) => {
//                     if (!prev) setAdminOpen(false);
//                     return !prev;
//                   });
//                 }}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none transition-all duration-300 transform hover:scale-105"
//               >
//                 Dispatcher <span className="ml-1 text-sm">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 transform transition-all duration-300 border border-gray-700">
//                   <Link 
//                     to="/truck" 
//                     className="block px-6 py-3 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
//                   >
//                     <span className="mr-2">🚛</span> Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Static Links */}
//             <Link 
//               to="/gate" 
//               className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
//             >
//               <span className="mr-2">🚪</span> Gate Keeper
//             </Link>
//             <Link 
//               to="/loader" 
//               className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
//             >
//               <span className="mr-2">📦</span> Loader
//             </Link>
//             <Link 
//               to="/reports" 
//               className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
//             >
//               <span className="mr-2">📊</span> Reports
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-6 rounded-xl shadow-2xl text-white font-medium z-50 border border-gray-700 transform transition-all duration-300">
//             {/* Admin mobile */}
//             <div>
//               <button
//                 onClick={() => {
//                   setAdminOpen((prev) => {
//                     if (!prev) setDispatcherOpen(false);
//                     return !prev;
//                   });
//                 }}
//                 className="w-full text-left hover:text-yellow-400 transition-all duration-300 flex items-center"
//               >
//                 <span className="mr-2">👨‍💼</span> Admin <span className="ml-1 text-sm">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
//                   <Link 
//                     to="/plantmaster" 
//                     className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
//                   >
//                     <span className="mr-2">🏭</span> Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher mobile */}
//             <div>
//               <button
//                 onClick={() => {
//                   setDispatcherOpen((prev) => {
//                     if (!prev) setAdminOpen(false);
//                     return !prev;
//                   });
//                 }}
//                 className="w-full text-left hover:text-yellow-400 transition-all duration-300 flex items-center"
//               >
//                 <span className="mr-2">🚛</span> Dispatcher <span className="ml-1 text-sm">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
//                   <Link 
//                     to="/truck-transaction" 
//                     className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
//                   >
//                     <span className="mr-2">📝</span> Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link 
//               to="/gate" 
//               className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
//             >
//               <span className="mr-2">🚪</span> Gate Keeper
//             </Link>
//             <Link 
//               to="/loader" 
//               className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
//             >
//               <span className="mr-2">📦</span> Loader
//             </Link>
//             <Link 
//               to="/reports" 
//               className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
//             >
//               <span className="mr-2">📊</span> Reports
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

/////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMenu = (menu) => {
//     if (menu === 'admin') {
//       setAdminOpen(!adminOpen);
//       setDispatcherOpen(false);
//     } else if (menu === 'dispatcher') {
//       setDispatcherOpen(!dispatcherOpen);
//       setAdminOpen(false);
//     }
//   };

//   return (
//     <nav className="bg-gray-900 shadow-md text-white font-medium relative z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
//             Lemon Software Gate Pass
//           </div>

//           {/* Hamburger (mobile) */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white hover:text-yellow-400 text-2xl"
//             >
//               ☰
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="relative group">
//               <button
//                 onClick={() => toggleMenu('admin')}
//                 className="flex items-center hover:text-yellow-400 transition"
//               >
//                 Admin <span className="ml-1">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="absolute bg-gray-800 mt-2 py-2 w-56 rounded-xl shadow-lg border border-yellow-500 transition">
//                   <Link
//                     to="/plantmaster"
//                     className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
//                   >
//                     🏭 Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <div className="relative group">
//               <button
//                 onClick={() => toggleMenu('dispatcher')}
//                 className="flex items-center hover:text-yellow-400 transition"
//               >
//                 Dispatcher <span className="ml-1">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="absolute bg-gray-800 mt-2 py-2 w-56 rounded-xl shadow-lg border border-yellow-500 transition">
//                   <Link
//                     to="/truck"
//                     className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
//                   >
//                     🚛 Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/gate" className="hover:text-yellow-400 transition">🚪 Gate Keeper</Link>
//             <Link to="/loader" className="hover:text-yellow-400 transition">📦 Loader</Link>
//             <Link to="/reports" className="hover:text-yellow-400 transition">📊 Reports</Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 bg-gray-800 rounded-xl shadow-lg p-4 space-y-2 border border-yellow-500">
//             <div>
//               <button
//                 onClick={() => toggleMenu('admin')}
//                 className="w-full text-left hover:text-yellow-400 transition"
//               >
//                 👨‍💼 Admin ▼
//               </button>
//               {adminOpen && (
//                 <div className="pl-4 mt-1 space-y-1 border-l border-yellow-400">
//                   <Link
//                     to="/plantmaster"
//                     className="block hover:text-yellow-400 transition"
//                   >
//                     🏭 Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <div>
//               <button
//                 onClick={() => toggleMenu('dispatcher')}
//                 className="w-full text-left hover:text-yellow-400 transition"
//               >
//                 🚛 Dispatcher ▼
//               </button>
//               {dispatcherOpen && (
//                 <div className="pl-4 mt-1 space-y-1 border-l border-yellow-400">
//                   <Link
//                     to="/truck"
//                     className="block hover:text-yellow-400 transition"
//                   >
//                     📝 Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/gate" className="block hover:text-yellow-400 transition">🚪 Gate Keeper</Link>
//             <Link to="/loader" className="block hover:text-yellow-400 transition">📦 Loader</Link>
//             <Link to="/reports" className="block hover:text-yellow-400 transition">📊 Reports</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const closeAllMenus = () => {
//     setAdminOpen(false);
//     setDispatcherOpen(false);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <div className="text-white font-bold text-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
//             Lemon Software Gate Pass
//           </div>

//           {/* Hamburger for mobile */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white hover:text-yellow-400 focus:outline-none text-2xl transform transition-all duration-300 hover:scale-110"
//             >
//               ☰
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center font-medium text-white">
//             {/* Admin Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setAdminOpen(!adminOpen);
//                   setDispatcherOpen(false);
//                 }}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none transition duration-300 hover:scale-105"
//               >
//                 Admin <span className="ml-1 text-sm">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 border border-gray-700">
//                   <Link 
//                     to="/plantmaster" 
//                     onClick={closeAllMenus}
//                     className="block px-6 py-3 text-white no-underline hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
//                   >
//                     🏭 Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setDispatcherOpen(!dispatcherOpen);
//                   setAdminOpen(false);
//                 }}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none transition duration-300 hover:scale-105"
//               >
//                 Dispatcher <span className="ml-1 text-sm">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 border border-gray-700">
//                   <Link 
//                     to="/truck" 
//                     onClick={closeAllMenus}
//                     className="block px-6 py-3 text-white no-underline hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
//                   >
//                     🚛 Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Static Links */}
//             <Link 
//               to="/gate" 
//               onClick={closeAllMenus}
//               className="text-white no-underline hover:text-yellow-400 transition duration-300 hover:scale-105 flex items-center"
//             >
//               🚪 Gate Keeper
//             </Link>
//             <Link 
//               to="/loader" 
//               onClick={closeAllMenus}
//               className="text-white no-underline hover:text-yellow-400 transition duration-300 hover:scale-105 flex items-center"
//             >
//               📦 Loader
//             </Link>
//             <Link 
//               to="/reports" 
//               onClick={closeAllMenus}
//               className="text-white no-underline hover:text-yellow-400 transition duration-300 hover:scale-105 flex items-center"
//             >
//               📊 Reports
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-6 rounded-xl shadow-2xl text-white font-medium border border-gray-700">
//             {/* Admin Mobile */}
//             <div>
//               <button
//                 onClick={() => {
//                   setAdminOpen(!adminOpen);
//                   setDispatcherOpen(false);
//                 }}
//                 className="w-full text-left hover:text-yellow-400 transition duration-300 flex items-center"
//               >
//                 👨‍💼 Admin <span className="ml-1 text-sm">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
//                   <Link 
//                     to="/plantmaster" 
//                     onClick={closeAllMenus}
//                     className="block no-underline text-white hover:text-yellow-400 transition duration-300 flex items-center"
//                   >
//                     🏭 Plant Master
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher Mobile */}
//             <div>
//               <button
//                 onClick={() => {
//                   setDispatcherOpen(!dispatcherOpen);
//                   setAdminOpen(false);
//                 }}
//                 className="w-full text-left hover:text-yellow-400 transition duration-300 flex items-center"
//               >
//                 🚛 Dispatcher <span className="ml-1 text-sm">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
//                   <Link 
//                     to="/truck" 
//                     onClick={closeAllMenus}
//                     className="block no-underline text-white hover:text-yellow-400 transition duration-300 flex items-center"
//                   >
//                     📝 Truck Transaction
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link 
//               to="/gate" 
//               onClick={closeAllMenus}
//               className="block no-underline text-white hover:text-yellow-400 transition duration-300 flex items-center"
//             >
//               🚪 Gate Keeper
//             </Link>
//             <Link 
//               to="/loader" 
//               onClick={closeAllMenus}
//               className="block no-underline text-white hover:text-yellow-400 transition duration-300 flex items-center"
//             >
//               📦 Loader
//             </Link>
//             <Link 
//               to="/reports" 
//               onClick={closeAllMenus}
//               className="block no-underline text-white hover:text-yellow-400 transition duration-300 flex items-center"
//             >
//               📊 Reports
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





























// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedRole = localStorage.getItem('userRole');
//     setUserRole(storedRole);
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center">
//             <Link to="/home" className="text-xl font-bold text-white">
//               Truck Tracking
//             </Link>
//             <div className="hidden md:flex md:ml-10 space-x-4">
//               <Link to="/home" className="hover:text-indigo-300">
//                 Home
//               </Link>
//               {userRole === 'admin' && (
//                 <>
//                   <Link to="/admin" className="hover:text-indigo-300">
//                     Admin Panel
//                   </Link>
//                   <Link to="/reports" className="hover:text-indigo-300">
//                     Reports
//                   </Link>
//                 </>
//               )}
//               {userRole === 'staff' && (
//                 <Link to="/gatekeeper" className="hover:text-indigo-300">
//                   GateKeeper
//                 </Link>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <span className="hidden md:inline text-sm text-gray-300">
//               {localStorage.getItem('username')}
//             </span>
//             <button
//               onClick={handleLogout}
//               className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-md"
//             >
//               Logout
//             </button>

//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
//           <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
//             Home
//           </Link>
//           {userRole === 'admin' && (
//             <>
//               <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
//                 Admin Panel
//               </Link>
//               <Link to="/reports" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
//                 Reports
//               </Link>
//             </>
//           )}
//           {userRole === 'staff' && (
//             <Link to="/gatekeeper" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
//               GateKeeper
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userRole, setUserRole] = useState(null);
  const [username, setUsername] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Read from localStorage once component mounts
    const storedRole = localStorage.getItem('userRole'); // use 'userRole' consistently
    const storedUsername = localStorage.getItem('username');
    setUserRole(storedRole);
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); // redirect to login page
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/home" className="text-xl font-bold text-white">
              Truck Tracking
            </Link>
            <div className="hidden md:flex md:ml-10 space-x-4">
              <Link to="/home" className="hover:text-indigo-300">Home</Link>

              {userRole === 'admin' && (
                <>
                  <Link to="/admin" className="hover:text-indigo-300">Admin Panel</Link>
                  <Link to="/reports" className="hover:text-indigo-300">Reports</Link>
                </>
              )}

              {userRole === 'staff' && (
                <Link to="/gatekeeper" className="hover:text-indigo-300">GateKeeper</Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* ✅ Show username safely */}
            {username && (
              <span className="hidden md:inline text-sm text-gray-300">
                {username}
              </span>
            )}

            <button
              onClick={handleLogout}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-md"
            >
              Logout
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>

          {userRole === 'admin' && (
            <>
              <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Admin Panel</Link>
              <Link to="/reports" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Reports</Link>
            </>
          )}

          {userRole === 'staff' && (
            <Link to="/gatekeeper" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">GateKeeper</Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
