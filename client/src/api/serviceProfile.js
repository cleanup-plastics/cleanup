// import axios from 'axios';

// const serviceProfile = axios.create({
//   baseURL: 'http://localhost:5005/api'
//   // withCredentials: true // => you might need this when having the users in the app
// });

// const errorHandler = err => {
//   // console.error(err);
//   throw err;
// };

// const handleUpload = (theFile) => {
//   // console.log('file in service: ', theFile)
//   return serviceProfile
//     .post('/upload', theFile)
//     .then(res => res.data)
//     .catch(errorHandler);
// }

// const updateProfile = (profile) => {
//   // console.log('new thing is: ', newThing)
//   return serviceProfile
//     .post('/profile/user/', profile)
//     .then(res => res.data)
//     .catch(errorHandler);
// }

// const apiServiceProfile = {
//   serviceProfile, handleUpload, updateProfile
// }

// export default apiServiceProfile;
