import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";
import FabricKey from "./components/FabricKey";


const Subtitle = ({title, description}) => (
  <p css={{
    margin: 10,
    padding: 0
  }}><span css={{ fontWeight: 'bold'}}>{title}</span> {description}</p>
)

function App() {
  // Find out number of instances
  let counts = {};
  const hueWidth = 5;
  const quiltSectionWidth = 18
  const quiltSectionHeight = 7

  const setCounts = imgNum => {
    counts[imgNum] = (counts[imgNum] || 0) + 1;
  };

  return (
    <main>
      <header css={{textAlign: 'center', margin: '20px auto 50px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: quiltSectionWidth * 85}}>
        <div css={{textAlign: 'center'}}>
          <h1>Hexagon Quilt Randomizer</h1>
          <div>
            <Subtitle 
              title="Github:" 
              description={(<a href="https://github.com/knitcodemonkey/hexagon-quilt-map">https://github.com/knitcodemonkey/hexagon-quilt-map</a>)} 
            />
            <Subtitle title="Sample Fabric:" description='"Bee Creative" by Modus Fabrics' />
            <Subtitle title="Hexagons Wide:" description={quiltSectionWidth} />
            <Subtitle title="Hexagons Tall:" description={quiltSectionHeight} />
            
          </div>
        </div>
        
      </header>
      <article>
      
        <QuiltSection setCounts={setCounts} hueWidth={hueWidth} quiltSectionWidth={quiltSectionWidth} quiltSectionHeight={quiltSectionHeight} />
      </article>

      <footer>
        <FabricKey counts={counts} hueWidth={hueWidth} />
      </footer>
      
    </main>
  );
}

export default App;
