import { prisma } from '../src/app/lib/prisma.js'; // ← Ajoutez 'src/'
import photographers from '../public/data/photographer.json' with { type: 'json' };
import medias from '../public/data/media.json' with { type: 'json' };

async function main() {
    await prisma.photographer.createMany({
        data: photographers
    });

    await prisma.media.createMany({
        data: medias
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })