import Head from "./head/head";
import Top_roll from "./toproll//Top_roll";
import Content from "./content/content";
import "../src/content/content.css"
import Bottom_banner from "./bottom-banner/bottom_banner";


const Home = () => {
    return ( 
        <div className="all_kernel">
            <Head></Head>
            <Top_roll></Top_roll>
            <Content/>
            <Bottom_banner/>
        </div>
        

     );
}
 
export default Home;