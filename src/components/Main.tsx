import React, { useEffect, useState } from "react";
import { fetchDogImages } from "../api/api";
import Form from "./Form";
import Gallery from "./Gallery";

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

export default Main;
