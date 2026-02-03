import PhotographerThumbnail from "../PhotographerThumbnail/PhotographerThumbnail";
import styles from "./ThumbnailSection.module.css";
import { getAllPhotographers } from "../../../lib/prisma-db";

const PhotographersSection = async () => {
  const photographers = await getAllPhotographers()
  
  return (
    <section className={styles.photographersSection}>
        {photographers.map((photographer) => (
          <PhotographerThumbnail
            key={photographer.id}
            photographer={photographer}
          />
        ))}
    </section>
  );
};

export default PhotographersSection;
