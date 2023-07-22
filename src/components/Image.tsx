import React from "react";

type DogImage = {
  src: string;
};

function Image(props: DogImage) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
}

export default Image;
