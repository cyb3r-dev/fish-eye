import styles from "./page.module.css";
import { getAllMediasForPhotographer, getPhotographer, updateNumberOfLikes } from "@/src/lib/prisma-db";
import Header from "../../components/Header/Header";
import Portrait from "../../components/Portrait/Portrait";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";


export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographer = await getPhotographer(parseInt(id));
    const medias = await getAllMediasForPhotographer(parseInt(id));

    return (
        <>
            <Header />
            <section className={styles.banner}>
                <div className={styles.details}>
                    <h1>{photographer.name}</h1>
                    <span className={styles.location}>{photographer.city}, {photographer.country}</span>
                    <span className={styles.tagline}>{photographer.tagline}</span>
                </div>
                <Contact name={photographer.name}/>
                <Portrait photographer={photographer} />
            </section>
            <Gallery medias={medias} photographer={photographer}/>
        </>
    );
}