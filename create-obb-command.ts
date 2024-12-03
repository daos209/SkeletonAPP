
import * as fs from 'fs';
import * as path from 'path';
import * as archiver from 'archiver';

const outputFilePath = path.join(__dirname, 'skeletonapp.obb');
const sourceDir = path.join(__dirname, 'assets'); // Directorio con los archivos a incluir en el OBB

function createOBB() {
    const output = fs.createWriteStream(outputFilePath);
    const archive = archiver('zip', {
        zlib: { level: 9 } // Nivel de compresión
    });

    output.on('close', () => {
        console.log(`OBB file created: ${outputFilePath} (${archive.pointer()} total bytes)`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);

    archive.directory(sourceDir, false);

    archive.finalize();
}

createOBB();