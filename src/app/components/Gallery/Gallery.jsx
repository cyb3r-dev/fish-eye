"use client";
import styles from "./Gallery.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Carousel from "../Carousel/Carousel";

export default function Gallery({ medias }) {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openModalAt = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    return (
        <section className={styles.gallery}>
            <div className={styles.medias}>
                {medias.map((media, index) => (
                    <div key={index} className={styles.media}>
                        <div onClick={() => openModalAt(index)}>
                            {media.image && <img src={`/media/${media.image}`} alt={media.title}/>}
                            {media.video &&
                                <video autoPlay muted loop>
                                    <source src={`/media/${media.video}`} type="video/mp4"/>
                                </video>
                            }
                        </div>
                        <div className={styles.details}>
                            <h2>{media.title}</h2>
                            <span>
                                {media.likes}
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Carousel isOpen={isOpen} onClose={() => setIsOpen(false)} medias={medias} index={currentIndex}/>
        </section>
    );
}