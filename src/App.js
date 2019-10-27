import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";
import FabricKey from "./components/FabricKey";


const Subtitle = ({title, description}) => (
  <p css={{
    margin: 10,
    padding: 0,
    fontSize: '1.2rem'
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
    <main className="App">
      <header css={{ margin: '20px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: quiltSectionWidth * 85}}>
        <div css={{}}>
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
      <article css={{
        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
        paddingBottom: 55,
        margin: '20px auto'
      }}>
        <QuiltSection setCounts={setCounts} hueWidth={hueWidth} quiltSectionWidth={quiltSectionWidth} quiltSectionHeight={quiltSectionHeight} />
      </article>

      <footer css={{
        marginTop: 40,
        marginBottom: 40
      }}>
        <FabricKey counts={counts} hueWidth={hueWidth} />
      </footer>
      
    </main>
  );
}

export default App;
