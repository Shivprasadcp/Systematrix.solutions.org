import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";


type SheetForm = {
    name:string
    email:string
    phone:string
    subject:string
    message:string
}







import { NextResponse , NextRequest } from 'next/server'
 
export async function POST( req: NextRequest ) {

const body =  await req.json() as unknown as SheetForm
console.log(body);
    try {

     
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

    
    }catch(e){
        console.error(e)
        return  NextResponse.json({message:  'Something went Wrong'})

    }
 

}
