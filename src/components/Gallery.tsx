import React from "react";
import Loading from "./Loading";
import Image from "./Image";

type GalleryProps = {
  urls: string[] | null;
};

function Gallery(props: GalleryProps) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="columns is-vcentered is-multiline">
        {urls.map((url: string) => {
          return (
            <div key={url} className="column is-3">
              <Image src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
