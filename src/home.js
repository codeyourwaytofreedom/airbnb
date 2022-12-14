import Head from "./head/head";
import Top_roll from "./toproll//Top_roll";
import Content from "./content/content";
import "../src/content/content.css"
import Bottom_banner from "./bottom-banner/bottom_banner";
import Show_map from "./show_map/show_map";
import { useState } from "react";
import Map from "./show_map/map";


const Home = () => {
    const [show_map, setShowMap] = useState(false)
    return ( 
        <div className="all_kernel">
            <Head></Head>
            <Top_roll></Top_roll>
            <Content show_map={show_map}/>             
            <Show_map setShowMap={setShowMap} show_map={show_map}/>
            {!show_map  && <Bottom_banner/>}
        
        </div>
        

     );
}
 
export default Home;