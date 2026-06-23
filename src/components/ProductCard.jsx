import styles from "./ProductCard.module.css";

function ProductCard({ data }) {
  const cardList = data.map(d => (
    <ul key={d.id}>
      <li>{d.name}</li>
      <li>{d.price}원</li>
      <li>{d.brand}</li>
    </ul>
  ));

  return <article className={styles.card}>{cardList}</article>;
}

export default ProductCard;
