const PDFDocument = require('pdfkit');
const fs = require('fs');

//Funcrtion to Genrate PDF
const generatePDF = (data) => {

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('combinedCollectionData.pdf'));

    let firstPage = true;

    // Function to add a field if it exists
    const addField = (fieldName, value) => {
        if (value) {
            doc.fontSize(12).text(`${fieldName}: ${value}`);
            doc.moveDown(0.5); // Adjust the number of lines as needed for spacing
        }
    };

    try {
        for (const collectionName in data) {
            if (!firstPage) {
                doc.addPage(); // Start a new page for each table except the first one
            } else {
                firstPage = false;
            }

            doc.fontSize(16).text(collectionName, { align: 'center' });
            doc.moveDown(1.2); // Add space after collection name


            const collectionData = data[collectionName];

            for (const item of collectionData) {

                addField('Title', item.title);
                addField('Genre', item.genre);
                addField('Release Year', item.releaseYear);
                addField('Director', item.director);
                addField('Description', item.description);
                addField('Duration', item.duration);
                addField('CastCrew', item.castCrew);
                addField('UserName', item.username);
                addField('UserEmail', item.email);
                addField('UserRole', item.role);
                addField('UserAction', item.action);
                addField('Resource', item.resource);

                doc.moveDown(3);
            }

        }

        doc.end();
    } catch (error) {
        console.log('PDF generation error:', error);
        throw error;

    }


}

// Export the generatePDF function
module.exports = {
    generatePDF
}