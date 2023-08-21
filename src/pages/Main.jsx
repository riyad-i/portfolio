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

        <h2>About Me</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus nisi, maxime culpa impedit similique nostrum quam blanditiis facere? Dolore exercitationem ex natus maiores magni doloribus tempora architecto provident vero.</p>
        
        <br/>
        <br/>
        <br/>

        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores porro autem repudiandae quia eaque incidunt recusandae, quis fuga eum ab omnis distinctio doloribus iste nobis ipsa debitis. Autem, alias illo.
        Exercitationem suscipit blanditiis optio modi enim totam magnam cupiditate earum quos fuga delectus voluptatum quisquam similique in provident veniam harum, reiciendis dicta adipisci aperiam? Tempora saepe est minima quis aperiam!
        Vel dolorem iusto consectetur velit iste aliquid qui dolore deserunt facilis veniam dignissimos rerum molestias blanditiis, quo obcaecati quae illo sed? Rem quas illum modi tenetur nobis illo saepe quae!
        Doloremque atque magni totam voluptate nulla et cum vero ullam animi, asperiores, placeat aspernatur iste assumenda labore accusamus sit eum veritatis, laboriosam amet nam repellendus! Ullam officia illo quos nobis!</p>
        <br/>
        <br/>
        <br/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fugiat praesentium quia laborum ab corrupti dolores harum iure? Quaerat reprehenderit voluptatum recusandae. Numquam commodi veniam eaque adipisci autem a ipsum.
        Culpa, atque nostrum. Eum, fugit distinctio facere sapiente molestias aspernatur earum cumque soluta. Tempora quaerat saepe aut pariatur. Autem eligendi ad nemo eveniet. Commodi iusto obcaecati quaerat recusandae veniam culpa.
        Nemo quis debitis, recusandae expedita provident doloremque sapiente unde quam? Odit voluptatum earum dolorem iure! Nostrum, unde impedit dolores atque a iste ad quo voluptatum porro, nulla alias aliquid consequatur.
        Reprehenderit impedit laborum voluptatibus aspernatur iure facilis maxime fugit vel. Ex aliquid eos harum cumque quod corporis, perferendis omnis enim molestiae. Maxime magnam consequuntur modi perferendis alias assumenda pariatur nisi?
        Omnis nostrum aliquid voluptates excepturi quas consectetur quos dolorem inventore, ipsa iusto odio debitis quaerat officia!</p>
        </>
    )

}