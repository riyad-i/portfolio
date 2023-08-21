// import React from 'react'
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import ReactPDF from '@react-pdf/renderer';

// import resume from '../../Resumev4.pdf'

// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.js.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4'
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });
  
//   // Create Document Component
//   const MyDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );

export default function Main(){




    return (
        <>
        <h1>Portfolio</h1>
        {/* <Document file={resume} onLoadError={console.error}  >
            <Page pageIndex={0}/>

        </Document> */}
        {/* ReactPDF.render(<MyDocument />, `../../Resumev4.pdf`); */}
        {/* <MyDocument></MyDocument> */}
        </>
    )

}