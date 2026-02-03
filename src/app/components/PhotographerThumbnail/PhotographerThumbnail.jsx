import Link from 'next/link';
import Image from 'next/image';
import styles from './PhotographerThumbnail.module.css';

export default function PhotographerCard({ photographer }) {
  return (
    <figure className={styles.photographerThumbnail}>
      <Link href={`/photographers/${photographer.id}`} className={styles.photographerLink}>
          <Image
            src={`/images/${photographer.portrait}`}
            alt={photographer.name}
            className={styles.image}
            width={200}
            height={200}
            priority={false}
          />
          <h2 className={styles.photographerName}>{photographer.name}</h2>
      </Link>
      <div className={styles.photographerInfo}>
        <p className={styles.photographerLocation}>{photographer.city}, {photographer.country}</p>
        <p className={styles.photographerQuote}>{photographer.tagline}</p>
        <p className={styles.photographerPrice}>{photographer.price}€/jour</p>
      </div>
    </figure>
  );
}