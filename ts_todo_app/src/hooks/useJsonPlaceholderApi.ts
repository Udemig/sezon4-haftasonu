import axios, { Axios } from "axios";
import { AxiosResponse } from "axios";

export type JsonPlaceholderUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export class JsonPlaceholderApi {
  private readonly axiosClient: Axios;

  constructor(private readonly baseUrl: string) {
    this.axiosClient = axios;
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async users(start?: number, limit?: number) {
    // asenkron bölgedeyken bu kadar uğraşmaya gerek kalmaz.
    //this.axiosClient
    //  .get("users")
    //  .then((response) => {
    //    console.log(response);
    //  })
    //  .catch((err) => {
    //    console.log(err);
    //  });

    let result: AxiosResponse<JsonPlaceholderUserType[]> =
      await this.axiosClient.get<JsonPlaceholderUserType[]>("users", {
        params: {
          _start: start,
          _limit: limit,
        },
      });

    return result;
  }
}

export default function useJsonPlaceholderApi(): JsonPlaceholderApi {
  /**
   * `.env` dosyasındaki bir değere ulaşmak için o değerin `VITE_` ifadesiyle
   * prefixlenmiş olması gerekir. Bunu yaptıktan sonra tam olarak
   * şu şekilde dataya ulaşabiliriz:
   * `import.meta.env.VITE_API_BASE_URL`
   */

  return new JsonPlaceholderApi(import.meta.env.VITE_API_BASE_URL);
}
