import React from "react"
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import GIS from "./pages/GIS"
import Planning from "./pages/Planning"
import EnvironmentT from "./pages/EnvironmentT"
import EnvironmentalMapping from "./components/EnvironmentalMapping"
import NPM from "./components/NPM"

import GreenhouseGasInventory from "./components/GreenhouseGasInventory"
import WebGIS from "./components/WebGIS.JSX"
import SpatialPlanning from "./components/SpatialPlanning"
import EIA_EA from "./components/EIA_EA"
import GISConsultancy from "./components/GISConsultancy"
import CBC from "./components/CBC"



function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/GIS" element={<GIS/>}/>
      <Route path="/Planning" element={<Planning/>}/>
      <Route path="/EnvironmentT" element={<EnvironmentT/>}/>
       <Route path="/services/environmental-biodiversity-mapping" element={<EnvironmentalMapping />} />
  <Route path="/services/natural-resource-mapping" element={<NPM />} />
  <Route path="/services/webgis-development" element={<WebGIS />} />
  <Route path="/services/spatial-planning" element={<SpatialPlanning />} />
  <Route path="/services/eia-ea" element={<EIA_EA/>} />
  <Route path="/services/climate-change" element={<CBC />} />
  <Route path="/services/ghg-inventory" element={<GreenhouseGasInventory />} />
   <Route path="/services/gis-consoltuncy" element={<GISConsultancy />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
