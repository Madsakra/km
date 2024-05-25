
// import { myModel } from '../firebase-config'

// const CallGemini = async (uploadedFiles,description) => {


//     async function fileToGenerativePart(file) {
//         const base64EncodedDataPromise = new Promise((resolve) => {
//           const reader = new FileReader();
//           reader.onloadend = () => resolve(reader.result.split(',')[1]);
//           reader.readAsDataURL(file);
//         });
//         return {
//           inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
//         };
//       }
      
//       try{


//             const prompt = description;
//             const imageParts = await Promise.all(
//                 [...uploadedFiles].map(fileToGenerativePart)
//             );
        
//             const result = await myModel.generateContent([prompt,...imageParts]);
//             const response = result.response;
//             const text = response.text()
        
//             return text;



//       }
//       catch(err)
//       {
//         console.log(err);
//         return "explicit error"
//       }





// }

// export default CallGemini
