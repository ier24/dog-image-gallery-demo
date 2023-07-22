import React, { FormEvent, useEffect, useState } from "react";
import { fetchDogImages } from "./api";

type DogImage = {
  src: string;
};

type GalleryProps = {
  urls: string[] | null;
};

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">犬の画像を見て癒やされましょう！！！</h1>
        </div>
      </div>
    </header>
  );
}

function Form(props: { onFormSubmit: (breed: string) => void }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { breed } = event.target as HTMLFormElement;
    props.onFormSubmit(breed.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="select is-fullwidth">
            <select name="breed" defaultValue="shiba">
              <option value="shiba">柴犬</option>
              <option value="akita">秋田犬</option>
              <option value="chihuahua">チワワ</option>
            </select>
          </div>
        </div>
        <div className="control">
          <button type="submit" className="button is-dark">
            更新
          </button>
        </div>
      </form>
    </div>
  );
}

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

function Loading() {
  return <p>読み込み中...</p>;
}

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

function Main() {
  const [urls, setUrls] = useState<string[] | null>(null);

  /**
   * https://ja.react.dev/learn/synchronizing-with-effects
   * > エフェクト内のコードは props や state を使用していないため、依存配列は []（空）です。
   * > こうすると React に、コンポーネントが「マウント」される、つまり画面に初めて表示されるときにのみこのコードを実行するよう指示することになります。
   */
  useEffect(() => {
    fetchDogImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);

  function reloadImages(breed: string) {
    fetchDogImages(breed).then((urls) => {
      setUrls(urls);
    });
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
