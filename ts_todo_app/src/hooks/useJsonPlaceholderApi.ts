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

export type JsonPlaceholderAlbumType = {
  userId: number;
  id: number;
  title: string;
};

// code review kısmında kod tekrarları bulunur ve çözülür.
export type JsonPlaceholderPostType = JsonPlaceholderAlbumType & {
  body: string;
};

export type JsonPlaceholderAlbumPhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
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

  async getUser(userId: number): Promise<JsonPlaceholderUserType> {
    let result: AxiosResponse<JsonPlaceholderUserType> =
      await this.axiosClient.get<JsonPlaceholderUserType>("users/" + userId);

    return result.data;
  }

  async albums(
    userId?: number,
    start?: number,
    limit?: number
  ): Promise<JsonPlaceholderAlbumType[]> {
    /**
     * albums?userId=3&_start=0&_limit=3
     * {
     *    userId: 3
     *    _start: 0
     *    _limit: 3
     * }
     */
    let result: AxiosResponse<JsonPlaceholderAlbumType[]> =
      await this.axiosClient.get<JsonPlaceholderAlbumType[]>("albums", {
        params: {
          userId: userId,
          _start: start,
          _limit: limit,
        },
      });

    return result.data;
  }

  async getAlbum(albumId: number): Promise<JsonPlaceholderAlbumType> {
    let result: AxiosResponse<JsonPlaceholderAlbumType> =
      await this.axiosClient.get<JsonPlaceholderAlbumType>("albums/" + albumId);

    return result.data;
  }

  async posts(userId?: number, start?: number, limit?: number) {
    let result: AxiosResponse<JsonPlaceholderPostType[]> =
      await this.axiosClient.get<JsonPlaceholderPostType[]>("posts", {
        params: {
          userId: userId,
          _start: start,
          _limit: limit,
        },
      });

    return result.data;
  }

  async albumPhotos(albumId?: number, start?: number, limit?: number) {
    let result: AxiosResponse<JsonPlaceholderAlbumPhotoType[]> =
      await this.axiosClient.get<JsonPlaceholderAlbumPhotoType[]>("photos", {
        params: {
          albumId: albumId,
          _start: start,
          _limit: limit,
        },
      });

    return result.data;
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
