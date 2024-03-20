import { useEffect, useState, useRef } from "react";
import { ImagePattern, HoverColors } from "./utils/constants";
import { getImages, uploadImage } from "./utils/services";

import Card from "./components/card";

function App() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    getImages().then((res) => setImageData(res));
  }, []);

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    const res = await uploadImage(fileObj);
    if (res?.status) {
      getImages().then((res) => setImageData(res));
    } else {
      console.error(res?.data);
    }
  };

  return (
    <div className="mosaic-grid">
      <div
        className="card-w-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h2>Connect people & spaces</h2>
      </div>
      {imageData?.map((item, idx) => {
        return (
          <Card
            key={"image_" + idx}
            w_size={ImagePattern[idx % ImagePattern?.length][0]}
            h_size={ImagePattern[idx % ImagePattern?.length][1]}
            title={item?.title}
            description={item?.description}
            image_url={item?.image}
            hover_color={HoverColors[parseInt(Math.random() * 8)]}
          />
        );
      })}
      <div className="card-w-1">
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleClick}>Button</button>
      </div>
    </div>
  );
}

export default App;
