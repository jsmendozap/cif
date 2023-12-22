import './App.css'
import Private from './layout/Private'
import GoogleFontLoader from "react-google-font-loader";

function App() {

  
  return (
    <>
      <GoogleFontLoader
            fonts={[
              {
                font: "Bree Serif",
                weights: [400, 700],
              },
              {
                font: "Inclusive Sans",
                weights: [400, 700],
              },
              {
                font: "Mukta",
                weights: [200],
              },
              {
                font: "Yeseva One",
                weights: [400]
              }, 
              {
                font: "Pacifico",
                weights: [400]
              },
              {
                font: "Lobster Two",
                weights: [400]
              },
              {
                font: "Oleo Script",
                weights: [400]
              }
            ]}
        />
      <Private />
    </>
  )
}

export default App
