// export default function Product() {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }
interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

// export default function Product(props: ProductProps) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.imgUrl} alt={props.name} width="320" />
//       <p>Price: {props.price} credits</p>
//     </div>
//   );
// }

//Деструктуризація props
export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p>Price: {price} credits</p>
    </div>
  );
}
