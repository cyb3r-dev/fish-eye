import styles from "./Gallery.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Gallery({ medias }) {
    return (
        <section className={styles.gallery}>
            <div className={styles.medias}>
                {medias.map((m, i) => (
                    <div key={i} className={styles.media}>
                        {m.image && <img src={`/media/${m.image}`} alt={m.title} />}
                        {m.video &&
                            <video autoPlay muted loop>
                                <source src={`/media/${m.video}`} type="video/mp4" />
                            </video>
                        }
                        <div className={styles.details}>
                            <h2>{m.title}</h2>
                            <span>
                                {m.likes}
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}