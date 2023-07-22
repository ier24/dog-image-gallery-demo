import React from "react";
import { FormEvent } from "react";

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

export default Form;
