import useInput from '../hooks/useInput';

function AddProduct(props) {
  //   const [priceValue, setPriceValue] = useState('');
  //   const [imageValue, setImageValue] = useState('');
  //   const [titleValue, setTitleValue] = useState('');

  //   function titleInputHandler(e) {
  //     setTitleValue(e.target.value);
  //   }
  //   function imageInputHandler(e) {
  //     setImageValue(e.target.value);
  //   }
  //   function priceInputHandler(e) {
  //     setPriceValue(e.target.value);
  //   }
  //   const [inputs, setInputs] = useState({
  //     title: '',
  //     imageUrl: '',
  //     price: '',
  //   });

  //   const [titleValue, setTitle] = useInput('');
  //   const [imageValue, setImage] = useInput('');
  //   const [priceValue, setPrice] = useInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handling submit');
    const product = {
      title: title.value,
      image: image.value,
      price: price.value,
    };
    props.onAdd(product);

    // surinkti visas input reiksmes i viena objekta
    // iskviesti tevinio komponento productAddHandler(newProdObj)
    // paduodant argumentu nauja produkta

    // kad iskviestumem tevinio komponento funkcija, mes aprasom ta funksija Products komponente
    // ir perduodam ja i AddProducts per props
  }

  const title = useInput('Pienas');
  const image = useInput('/img/pienas.webp');
  const price = useInput(2.99);

  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={title.setter}
          placeholder='title'
          value={title.value}
        />
        <input
          type='text'
          onChange={image.setter}
          placeholder='image url'
          value={image.value}
        />
        <input
          type='number'
          onChange={price.setter}
          step={0.01}
          placeholder='price'
          value={price.value}
        />
        <button type='submit'>Create</button>
      </form>
      <p>
        Title: {title.value} <br />
        Image url: {image.value}
        <br />
        Price: {price.value} <br />
      </p>
    </fieldset>
  );
}
export default AddProduct;
