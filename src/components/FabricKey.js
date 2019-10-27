import React from "react";

const FabricKey = ({ counts }) => {
  return (
    <aside css={{ marginTop: 100, marginBottom: 50 }}>
      <h2>Color Key</h2>

      <div css={{ display: "grid", gridTemplateColumns: "repeat(5, 100px)", width: 250, textAlign: "center", fontWeight: 'bold', fontSize: 24 }}>
        {[...Array(5).keys()].map((image, idx) => {
          return <div key={`Hue-${(idx + 1) % 5}`}>{`Hue: ${(idx + 1) % 5}`}</div>;
        })}
      </div>

      <div css={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: 250 }}>
        {[...Array(26).keys()].map((image, idx) => {
          const notImg = [25].indexOf(idx + 1) !== -1;

          const count = counts[idx + 1] || 0;

          return (
            <div
              css={{
                marginBottom: 20,
              }}
              key={`Image-${idx + 1}`}
            >
              {!notImg && (
                <div
                  css={{
                    fontWeight: "bold",
                    color: "blue",
                    fontSize: 16,
                    textShadow: "0px 0px 2px white",
                  }}
                >
                  <span>{`Image: ${idx + 1}`}</span>
                  <br />

                  <span css={{color: (count < 2 || count > 6) && 'red' }}>{`Count: ${counts[idx + 1] || 0}`}</span>
                </div>
              )}
              <div
                key={`orig-image-order-${idx + 1}`}
                css={{
                  width: 100,
                  height: 50,
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(./images/beeCreative${idx + 1}.jpg)`,
                  backgroundPosition: "center",
                }}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FabricKey;
