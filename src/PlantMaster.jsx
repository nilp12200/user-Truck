
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get('http://localhost:3001/api/plants');
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const plantName = e.target.value;
//     setSelectedPlant(plantName);
//     setShowEditButton(!!plantName);
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlant) return;
//     try {
//       const res = await axios.get(`http://localhost:3001/api/plantmaster/${encodeURIComponent(selectedPlant)}`);
//       if (res.data && (res.data.PlantID || res.data.PlantId)) {
//         setFormData({
//           plantId: res.data.PlantID || res.data.PlantId,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         console.error('No valid plant data returned');
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlant('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`http://localhost:3001/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post('http://localhost:3001/api/plantmaster', formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select value={selectedPlant} onChange={handlePlantSelect} className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2">
//                 <option value="">-- Select --</option>
//                 {[...new Set(plantList.map((plant) => plant.PlantName))].map((name, index) => (
//                   <option key={index} value={name}>{name}</option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
//////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const plantName = e.target.value;
//     setSelectedPlant(plantName);
//     setShowEditButton(!!plantName);
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlant) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${encodeURIComponent(selectedPlant)}`);
//       if (res.data && (res.data.PlantID || res.data.PlantId)) {
//         setFormData({
//           plantId: res.data.PlantID || res.data.PlantId,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         console.error('No valid plant data returned');
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlant('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select value={selectedPlant} onChange={handlePlantSelect} className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2">
//                 <option value="">-- Select --</option>
//                 {[...new Set(plantList.map((plant) => plant.PlantName))].map((name, index) => (
//                   <option key={index} value={name}>{name}</option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   // Helper to get plant name robustly
//   const getPlantName = (plant) => plant.PlantName || plant.plantname || plant.plant_name || plant || '';

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const plantName = e.target.value;
//     setSelectedPlant(plantName);
//     setShowEditButton(!!plantName);
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlant) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${encodeURIComponent(selectedPlant.trim())}`);
//       if (res.data && (res.data.PlantID || res.data.PlantId)) {
//         setFormData({
//           plantId: res.data.PlantID || res.data.PlantId,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         console.error('No valid plant data returned');
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlant('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select value={selectedPlant} onChange={handlePlantSelect} className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2">
//                 <option value="">-- Select --</option>
//                 {[...new Set(plantList.map(getPlantName))].map((name, index) => (
//                   <option key={index} value={name}>{name}</option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10); // Keep this if backend expects number
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plantmaster/update/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData); // ✅ Fixed line
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }




/////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plantmaster`, formData);
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.PlantID) {
//         setFormData({
//           plantId: res.data.PlantID,
//           plantName: res.data.PlantName,
//           plantAddress: res.data.PlantAddress,
//           contactPerson: res.data.ContactPerson,
//           mobileNo: res.data.MobileNo,
//           remarks: res.data.Remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData); // ✅ Correct PUT route
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plant-master`, formData); // ✅ Fixed POST route
//         alert('✅ Plant data saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving data');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.PlantID} value={plant.PlantID}>
//                     {plant.PlantName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


////////////////////

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const id = parseInt(e.target.value, 10);
//     setSelectedPlantId(id);
//     setShowEditButton(!isNaN(id));
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;
//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       if (res.data && res.data.plantid) {
//         setFormData({
//           plantId: res.data.plantid,
//           plantName: res.data.plantname,
//           plantAddress: res.data.plantaddress,
//           contactPerson: res.data.contactperson,
//           mobileNo: res.data.mobileno,
//           remarks: res.data.remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         console.log('Editing Plant:', formData);
//         await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         console.log('Creating New Plant:', formData);
//         await axios.post(`${API_URL}/api/plant-master`, formData);
//         alert('✅ Plant saved successfully!');
//       }
//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving/updating plant');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>
//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.plantid} value={plant.plantid}>
//                     {plant.plantname}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Edit Selected Plant
//               </button>
//             )}
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               + Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>
//             <div className="flex justify-between mt-6">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function PlantMaster() {
//   const [formData, setFormData] = useState({
//     plantId: null,
//     plantName: '',
//     plantAddress: '',
//     contactPerson: '',
//     mobileNo: '',
//     remarks: ''
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlantId, setSelectedPlantId] = useState('');
//   const [showEditButton, setShowEditButton] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('Error fetching plant list:', err);
//     }
//   };

//   const handlePlantSelect = (e) => {
//     const value = e.target.value;
//     const id = parseInt(value, 10);

//     if (isNaN(id)) {
//       setSelectedPlantId('');
//       setShowEditButton(false);
//       return;
//     }

//     setSelectedPlantId(id);
//     setShowEditButton(true);
//   };

//   const handleEditClick = async () => {
//     if (!selectedPlantId) return;

//     try {
//       const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
//       const data = res.data;

//       if (data && data.plantId) {
//         setFormData({
//           plantId: data.plantId,
//           plantName: data.plantName,
//           plantAddress: data.plantAddress,
//           contactPerson: data.contactPerson,
//           mobileNo: data.mobileNo,
//           remarks: data.remarks
//         });
//         setEditMode(true);
//       } else {
//         alert('❌ Invalid plant selected or no data found');
//       }
//     } catch (err) {
//       console.error('Error fetching plant:', err);
//       alert('❌ Error fetching plant data');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBack = () => {
//     setFormData({
//       plantId: null,
//       plantName: '',
//       plantAddress: '',
//       contactPerson: '',
//       mobileNo: '',
//       remarks: ''
//     });
//     setEditMode(false);
//     setSelectedPlantId('');
//     setShowEditButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.plantId) {
//         await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData);
//         alert('✅ Plant updated successfully!');
//       } else {
//         await axios.post(`${API_URL}/api/plant-master`, formData);
//         alert('✅ Plant saved successfully!');
//       }

//       fetchPlants();
//       handleBack();
//     } catch (err) {
//       alert('❌ Error saving/updating plant');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Plant Master</h2>

//         {!editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Plant to Edit</label>
//               <select
//                 value={selectedPlantId}
//                 onChange={handlePlantSelect}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               >
//                 <option value="">-- Select --</option>
//                 {plantList.map((plant) => (
//                   <option key={plant.plantid || plant.plantId} value={plant.plantid || plant.plantId}>
//                     {plant.plantname || plant.plantName}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {showEditButton && (
//               <button
//                 onClick={handleEditClick}
//                 className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 ✏️ Edit Selected Plant
//               </button>
//             )}

//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               ➕ Add New Plant
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Name</label>
//               <input
//                 type="text"
//                 name="plantName"
//                 value={formData.plantName}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Plant Address</label>
//               <textarea
//                 name="plantAddress"
//                 value={formData.plantAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Plant Address"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Person</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 placeholder="Enter Contact Person Name"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="tel"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleChange}
//                 placeholder="Enter Remarks"
//                 rows="2"
//                 className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2"
//               ></textarea>
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//               >
//                 {formData.plantId ? 'Update' : 'Save'}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


/////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL;

export default function PlantMaster() {
  const [formData, setFormData] = useState({
    plantId: null,
    plantName: '',
    plantAddress: '',
    contactPerson: '',
    mobileNo: '',
    remarks: ''
  });

  const [plantList, setPlantList] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState('');
  const [showEditButton, setShowEditButton] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/plants`);
      setPlantList(res.data);
    } catch (err) {
      console.error('Error fetching plant list:', err);
    }
  };

  const handlePlantSelect = (e) => {
    const value = e.target.value;
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      setSelectedPlantId('');
      setShowEditButton(false);
      return;
    }
    setSelectedPlantId(id);
    setShowEditButton(true);
  };

  const handleEditClick = async () => {
    if (!selectedPlantId) return;
    try {
      const res = await axios.get(`${API_URL}/api/plantmaster/${selectedPlantId}`);
      const data = res.data;
      if (data && data.plantId) {
        setFormData({
          plantId: data.plantId,
          plantName: data.plantName,
          plantAddress: data.plantAddress,
          contactPerson: data.contactPerson,
          mobileNo: data.mobileNo,
          remarks: data.remarks
        });
        setEditMode(true);
      } else {
        alert('❌ Invalid plant selected or no data found');
      }
    } catch (err) {
      console.error('Error fetching plant:', err);
      alert('❌ Error fetching plant data');
    }
  };

  const handleDelete = async (plantId) => {
    if (confirm('Are you sure you want to delete this plant?')) {
      try {
        await axios.delete(`${API_URL}/api/plant-master/${plantId}`);
        alert('✅ Plant deleted successfully!');
        fetchPlants();
      } catch (err) {
        console.error('Error deleting plant:', err);
        alert('❌ Failed to delete plant');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    setFormData({
      plantId: null,
      plantName: '',
      plantAddress: '',
      contactPerson: '',
      mobileNo: '',
      remarks: ''
    });
    setEditMode(false);
    setSelectedPlantId('');
    setShowEditButton(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.plantId) {
        await axios.put(`${API_URL}/api/plant-master/${formData.plantId}`, formData);
        alert('✅ Plant updated successfully!');
      } else {
        await axios.post(`${API_URL}/api/plant-master`, formData);
        alert('✅ Plant saved successfully!');
      }
      fetchPlants();
      handleBack();
    } catch (err) {
      alert('❌ Error saving/updating plant');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Plant Master Admin</h2>

        {!editMode && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Plant to Edit</label>
            <select
              value={selectedPlantId}
              onChange={handlePlantSelect}
              className="block w-full p-2 border rounded-lg border-gray-300 shadow-sm"
            >
              <option value="">-- Select --</option>
              {plantList.map((plant) => (
                <option key={plant.plantid || plant.plantId} value={plant.plantid || plant.plantId}>
                  {plant.plantname || plant.plantName}
                </option>
              ))}
            </select>

            {showEditButton && (
              <button
                onClick={handleEditClick}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 w-full"
              >
                ✏️ Edit Selected Plant
              </button>
            )}

            <button
              onClick={() => setEditMode(true)}
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
            >
              ➕ Add New Plant
            </button>
          </div>
        )}

        {!editMode && (
          <div className="overflow-auto">
            <table className="min-w-full border text-center">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Contact</th>
                  <th className="px-4 py-2">Mobile</th>
                  <th className="px-4 py-2">Remarks</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {plantList.map((plant) => (
                  <tr key={plant.plantid || plant.plantId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{plant.plantid || plant.plantId}</td>
                    <td className="px-4 py-2">{plant.plantname || plant.plantName}</td>
                    <td className="px-4 py-2">{plant.plantaddress || plant.plantAddress}</td>
                    <td className="px-4 py-2">{plant.contactperson || plant.contactPerson}</td>
                    <td className="px-4 py-2">{plant.mobileno || plant.mobileNo}</td>
                    <td className="px-4 py-2">{plant.remarks}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPlantId(plant.plantid || plant.plantId);
                          handleEditClick();
                        }}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(plant.plantid || plant.plantId)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {editMode && (
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Plant Name</label>
                <input
                  type="text"
                  name="plantName"
                  value={formData.plantName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Address</label>
                <textarea
                  name="plantAddress"
                  value={formData.plantAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium">Mobile No</label>
                <input
                  type="tel"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Remarks</label>
                <input
                  type="text"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {formData.plantId ? 'Update' : 'Save'}
              </button>
              <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}