const fetcher = (url: any) => fetch(url).then((r) => r.json());

export default fetcher;
