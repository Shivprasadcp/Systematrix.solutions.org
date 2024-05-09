import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
    name:string
    email:string
    phone:string
    subject:string
    message:string
}

// export default async function   POST(
//     req: NextApiRequest,
//     res: NextApiResponse
// ){
    
//     if(req.method !== 'POST'){
//         return res.status(405).send({message: 'Only POST request are allowed'})
//     }

//     const body = req.body as SheetForm

//     try {

//         // console.log("i am in try");
//         const auth = new google.auth.GoogleAuth({
//             credentials:{
//                 client_email : process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key : process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
//             },
//             scopes:[
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets'
//             ]
//         });

//         const sheets = google.sheets ({
//             auth,
//             version:'v4'
//         });

//         const response = await sheets.spreadsheets.values.append({
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range:'A1:D1',
//             valueInputOption: 'USER_ENTERED',
//             requestBody:{
//                 values:[
//                     [body.name , body.email , body.phone , body.subject , body.message]
//                 ]
//             }
//         });

//         return res.status(200).json( {
            
//             data: response.data
//         });

//         res.json({message: "It works!"});
//     }catch(e){
//         console.error(e)
//         return  res.status(500).send({message:  'Something went Wrong'})

//     }
// }



// export async function POST(){
//     return new Response("hi");
// } 



// function handler (req: NextApiRequest,
//       res: NextApiResponse) {
// 	return new Response("Hi")
// }

// export default handler;


import { NextResponse , NextRequest } from 'next/server'
 
export async function POST( req: NextRequest ) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })
 
//   const data = await res.json()
const body =  await req.json() as unknown as SheetForm
console.log(body);
    try {

        // console.log("i am in try");
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email : process.env.GOOGLE_CLIENT_EMAIL,
                private_key : process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets ({
            auth,
            version:'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range:'A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values:[
                    [body.name , body.email , body.phone , body.subject , body.message]
                ]
            }
        });
 console.log(body.name);
        return NextResponse.json( {
            
            data: response.data
        });

        // NextResponse.json({message: "It works!"});
    }catch(e){
        console.error(e)
        return  NextResponse.json({message:  'Something went Wrong'})

    }
 
//   return NextResponse.json({})
}
