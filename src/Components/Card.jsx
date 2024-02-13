import { cards } from "../services/Service";
import styles from "../Components/Styles/Card.module.css";
function Card() {
  return (
    <div className={styles.container}>
      {cards.map((card) => {
        return (
          <div className={styles.card} key={card.id}>
            <div>
              <img src={card.icon} />
            </div>
            <div>
              <p className={styles.curency}>
                <span>
                  {card.symbol} {card.price}
                </span>
              </p>
            </div>
            <div>
              <p className={styles.discript}>{card.discript}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
