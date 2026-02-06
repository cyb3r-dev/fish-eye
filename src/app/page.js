import styles from './page.module.css';
import { getAllPhotographers } from '@/src/lib/prisma-db';
import Header from './components/Header/Header';
import Portrait from './components/Portrait/Portrait';
import Link from 'next/link';

export default async function Home() {
    const photographers = await getAllPhotographers()
    return (
        <>
            <Header title="Nos Photographes" />
            <section className={styles.photographers}>
                {photographers.map((photographer) => (
                    <div key={photographer.id} className={styles.photographer}>
                        <Link href={`/photographers/${photographer.id}`}>
                            <Portrait photographer={photographer} />
                            <h2>{photographer.name}</h2>
                        </Link>
                        <div className={styles.details}>
                            <span className={styles.location}>{photographer.city}, {photographer.country}</span>
                            <span className={styles.tagline}>{photographer.tagline}</span>
                            <span className={styles.price}>{photographer.price}€/jour</span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}