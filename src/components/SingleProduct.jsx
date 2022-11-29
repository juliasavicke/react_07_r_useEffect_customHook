function SingleProduct(props) {
  function deleteTrigger() {
    props.onDelete(props.id);
  }
  return (
    <li className='singleProduct'>
      <img src={props.img} alt='' />
      <h3>{props.children}</h3>
      <p className='singleP__price'>{props.price}</p>
      <button onClick={deleteTrigger}>delete ?</button>
    </li>
  );
}
export default SingleProduct;
