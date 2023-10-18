
const { generatePDF } = require('../services/pdfService');

test('generatePDF should generate a PDF with the correct content', () => {
    const data = {
      movies: [
        {
          title: 'Movie 1',
          genre: 'Action',
          releaseYear: 2023
        },
        {
          title: 'Movie 2',
          genre: 'Comedy',
          releaseYear: 2023
        },
      ],
      series: [
        {
          title: 'series 1',
          genre: 'Action',
          releaseYear: 2023

        },
        {
          title: 'series 2',
          genre: 'Comedy',
          releaseYear: 2023

        },
      ],
    };
  
    // Mock the PDFKit and fs functions to capture the output.
    const pdfOutput = [];
    const fakePdf = {
      pipe: () => fakePdf,
      fontSize: () => fakePdf,
      text: (text) => {
        pdfOutput.push(text);
        return fakePdf;
      },
      moveDown: () => fakePdf,
      end: () => {

        // Check the generated PDF content here.
        const pdfContent = pdfOutput.join('\n');
        expect(pdfContent).toContain('Movie 1');
        expect(pdfContent).toContain('Movie 2');
      },
    };
    jest.mock('pdfkit', () => ({
      __esModule: true,
      default: () => fakePdf,
    }));
    jest.mock('fs', () => ({
      createWriteStream: () => ({
        __esModule: true,
        write: () => {},
      }),
    }));
  
    // Call the function to generate PDF.
    generatePDF(data);
  });
  

