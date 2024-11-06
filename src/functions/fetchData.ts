const URL = import.meta.env.VITE_API_DB_URL


export const fetchData = <T = Response>(
    input: string,
    init?: RequestInit
  ): Promise<T> =>
    fetch(`${URL}${input}`, init).then(async (res) => {
  
      if (res.status == 200) return res.json();
      return Promise.reject(await res.json());
    });