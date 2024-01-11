import axios from "axios"

export const getBiophysical = async (geodata, setLoad, setBiophysicData, setSpinner) => {

    const options = { 
        method: 'POST',
        url: "http://127.0.0.1:9000/test", 
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