import axios, { AxiosRequestConfig } from "axios"




// const buildHttpClient = ({ headers }: { headers: AxiosRequestConfig['headers'] }) => {


//   return {

//     // get: async (url) => {

//     //   const response = await fetch(url)
//     //   return await response.json()

//     // }

//     get: async (url: string) => {

//       const { data } = await axios.get(url, { headers: headers })
//       return data

//     }
//     ,
//     post: async (url: string, data: any) => { },
//     put: async (url: string, data: any) => { },
//     delete: async (url: string) => { }

//   }
// }


export const httpClientPlugin = {

  // get: async (url) => {

  //   const response = await fetch(url)
  //   return await response.json()

  // }

  get: async (url: string) => {

    const { data } = await axios.get(url)
    return data

  }
  ,
  post: async (url: string, data: any) => {
    throw new Error("Not implemented")
  },
  put: async (url: string, data: any) => {
    throw new Error("Not implemented")
  },
  delete: async (url: string) => {
    throw new Error("Not implemented")
  }

}


