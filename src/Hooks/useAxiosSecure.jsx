import axios from "axios";

const axiosSecure=axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    //request  interceptor to add authorization header for every secure call to the api 
    axiosSecure.interceptors.request.use(function (config) {
        
        const token= localStorage.getItem('access-token')

        
        console.log('request stopped by interceptors',token)
        config.headers.authorization=`Bearer ${token}`

        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

     // Add a response interceptor 401 and 403 status
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    const status=error.response.status;
    console.log('status error inthe interceptor',status)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
 return axiosSecure;
};

export default useAxiosSecure;