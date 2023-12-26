import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import DragText from './DragText'
import { LoadContext } from '../routes/Root'
import { DataContext } from '../App'
import { toast } from 'react-toastify'
import { Modal } from 'antd';

const DropZone = () => {
  
    const [isLoaded, setLoad] = useContext(LoadContext)
    const [data, setData] = useContext(DataContext)

    const onDrop = useCallback((file) => {
      const reader = new FileReader()
      
      reader.onload = (e) => { 
        const geojson = JSON.parse(e.target.result)
        const crs = geojson.crs.properties.name
        
        if(crs.substr(-5) === 'CRS84'){
              toast.success('Archivo cargado exitosamente')
              setData(geojson)
              setLoad(true)
            } else {
              Modal.error({
                title: 'CRS inválido',
                content: (<p className='text-justify'>{file[0].name} no tiene el sistema de coordenadas adecuado, por favor cargue un archivo con sistema de coordenadas EPSG:4326.</p>),
              })
            }
            
        }
        
        reader.readAsText(file[0])
        
    }, [])
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: '.geojson'});

    const text = (
      <div className='text-center'>
        <p>Arrastre o seleccione el shape del predio</p>
        <p className='text-lg'>Formato admitido: GeoJSON</p>
      </div> 
    )
    
    return (
    <div className='rounded-md hover:shadow-md hover:border-blue-400 h-80' style={{border: '2px dashed rgba(0,0,255,0.07)'}} {...getRootProps({ role: 'button'})}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <DragText text='Suelte el archivo aquí' /> :
        <DragText text={text} />
      }
    </div>
  )
}

export default DropZone