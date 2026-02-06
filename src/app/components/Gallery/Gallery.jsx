"use client";
import styles from "./Gallery.module.css";
import { useState } from "react";
import { updateLikes } from "@/src/actions/services";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Gallery({ medias, photographer }) {
    const [mediasState, setMediasState] = useState(medias);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModalAt = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const handleLike = (mediaId) => {
        setMediasState(prev => prev.map(media => media.id === mediaId ? { ...media, likes: media.likes + 1 } : media));
        updateLikes(mediaId, mediasState.find(media => media.id === mediaId).likes + 1);
    }

    return (
        <section className={styles.gallery}>
            <div className={styles.medias}>
                {mediasState.map((media, i) => (
                    <div key={media.id} className={styles.media}>
                        <div onClick={() => openModalAt(i)}>
                            {media.image && <img src={`/media/${media.image}`} alt={media.title} />}
                            {media.video &&
                                <video autoPlay muted loop>
                                    <source src={`/media/${media.video}`} type="video/mp4" />
                                </video>
                            }
                        </div>
                        <div className={styles.details}>
                            <h2>{media.title}</h2>
                            <span onClick={() => handleLike(media.id)}>
                                {media.likes}
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Carousel isOpen={isOpen} onClose={() => setIsOpen(false)} medias={mediasState} index={currentIndex} />
            <div className={styles.price}>
                <span>
                    {mediasState.reduce((sum, media) => sum + media.likes, 0).toLocaleString("fr-FR")}
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span>{photographer.price}€ / jour</span>
            </div>
        </section>
    );
}