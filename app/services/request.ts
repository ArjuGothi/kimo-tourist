const baseUrl = '/api';

export const request = async (url: string, options: any): Promise<Response> => {
    const { params, ...restOptions } = options;
    if (!url) {
        console.error('URL is invalid');
        throw new Error("URL is invalid")
    }

    let URL = `${baseUrl}${url}`;
    if (params) {
        url = `${url}?${new URLSearchParams(params)}`
    }

    try {
        const response: Response = await fetch(URL, restOptions);
        if (response.ok) {
            const parsed = await response.json();
            return Promise.resolve(parsed);
        }
        return Promise.resolve(response);
    } catch (error: unknown) {
        return Promise.reject("Something went wrong")
    }
}