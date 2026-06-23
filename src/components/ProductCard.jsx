import styles from "./ProductCard.module.css";

function ProductCard({ data }) {
  const cardList = data.map(d => (
    <article key={d.id} className={styles.card}>
      <h3 className={styles.name}>{d.name}</h3>
      <p className={styles.price}>{d.price.toLocaleString()}원</p>
      <p className={styles.brand}>{d.brand}</p>
    </article>
  ));

  return <>{cardList}</>;
}

export default ProductCard;
