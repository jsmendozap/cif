import axios from "axios"
import { toast } from "react-toastify"

const baseURL = "http://127.0.0.1:9001"

export const getBiophysical = async (geodata, setLoad, setBiophysicData, setSpinner) => {

    const options = { 
        method: 'POST',
        url: `${baseURL}/biophysical/summary`, 
        headers: {"Content-Type": "application/geo+json"}, 
        data: geodata
    }
    
    await axios
        .request(options)
        .then((res) => {
            setBiophysicData(res.data)
            setSpinner(false)
            setLoad(true)
        })
        .catch((err) => {console.log(err)})
}

export const getLayer = async (setLayerData, which, name) => {

    const options = { 
        method: 'GET',
        url: `${baseURL}/biophysical/layer`,
        params: { which: which } 
    }
    
    await axios
        .request(options)
        .then((res) => {
            let data = res.data
            data.name = name
            setLayerData(prev => [...prev, data])
            toast.success('Capa añadida exitosamente')
        })
        .catch((err) => {console.log(err)})
}