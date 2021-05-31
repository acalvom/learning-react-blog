import {useEffect, useState} from 'react';

/* ------ Custom Hook ------
 * Como parámetros de entrada recibe la url del API donde están los datos
 * Como parámetros de salida devuelve los estados modificados data, isPending y fetchErro
 * Para ejecutar el hook cada ve que se le pasa una nueva url, en el hook
 * useEffect hay que añadirle la dependencia [url]
 * Para utilizar este hook, hay que importarlo en el componente en el que se quiera utilizar
 */
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            const response = await fetch(url, {signal: abortController.signal});
            if (!response.ok)
                throw new Error(`HTTP error status: ${response.status}`)
            else {
                let data = await response.json();
                setIsPending(false);
                setFetchError(null);
                setData(data);
            }
        }

        setTimeout(() => {
            fetchData()
                .catch(e => {
                    if (e.name === 'AbortError')
                        console.log('Aborted fetching data')
                    else
                        setFetchError(e.message)
                })
        }, 1000);
        return () => abortController.abort() // clean up function
    }, [url])

    return {data, isPending, fetchError}
};

export default useFetch;