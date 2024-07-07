import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return true;

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000; // current time in seconds
  console.log(decodedToken.exp)
  return decodedToken.exp < currentTime;
};


export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};