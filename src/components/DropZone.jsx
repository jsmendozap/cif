
import { message } from 'antd'
import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import DragText from './DragText'
import { LoadContext } from '../routes/Root'
import { DataContext } from '../App'

const DropZone = () => {

    const [isLoaded, setLoad] = useContext(LoadContext)
    const [data, setData] = useContext(DataContext)
        
    const onDrop = useCallback((file) => {
        message.success(`${file[0].name} cargado exitosamente`)
        const reader = new FileReader()
        
        reader.onload = (e) => { 
            const geojson = JSON.parse(e.target.result)
            setData(geojson)
            setLoad(true)
        }
        
        reader.readAsText(file[0])
        
    }, [])
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: '.geojson'});
    
  return (
    <div className='border-2 border-dashed border-gray-400 rounded-md' style={{height: '400px'}} {...getRootProps({ role: 'button'})}>
      <input {...getInputProps()} />
      {
        isDragActive ?
            <DragText text='Suelte el archivo aquí' /> :
            <DragText text='Arrastre o seleccione el shape del predio' />
      }
    </div>
  )
}

export default DropZone