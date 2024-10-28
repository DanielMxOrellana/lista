import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const deseos = [
        {
            name: 'Viajar a Japón',
            description: 'Explorar la cultura y la comida japonesa.',
            lastSee: new Date().toISOString(),
            countlastSee: 1,
            extinct: false,
        },
        {
            name: 'Aprender a tocar guitarra',
            description: 'Tomar clases y practicar regularmente.',
            lastSee: new Date().toISOString(),
            countlastSee: 1,
            extinct: false,
        },
        {
            name: 'Escribir un libro',
            description: 'Completar una novela de ciencia ficción.',
            lastSee: new Date().toISOString(),
            countlastSee: 1,
            extinct: false,
        },
    ];

    for (const deseo of deseos) {
        await prisma.listadeseo.create({
            data: deseo,
        });
    }

    console.log('Datos iniciales de Listadeseo se han creado.');
}

main()
    .catch((e) => {
        console.error('Error al ejecutar la siembra:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
