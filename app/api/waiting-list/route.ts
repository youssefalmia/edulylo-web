import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: 'البريد الإلكتروني غير صالح' }, { status: 400 });
        }

        // Log to Console (Always keep this as a backup)
        console.log('NEW ENTRY:', email, new Date().toISOString());

        // Google Sheets Integration
        if (
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
            process.env.GOOGLE_PRIVATE_KEY &&
            process.env.GOOGLE_SHEET_ID
        ) {
            try {
                // Initialize Auth - JWT is the new way for Service Accounts
                const serviceAccountAuth = new JWT({
                    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    scopes: [
                        'https://www.googleapis.com/auth/spreadsheets',
                    ],
                });

                const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

                await doc.loadInfo(); // loads document properties and worksheets

                // Get or create the sheet
                let sheet = doc.sheetsByTitle['Waiting List'];
                if (!sheet) {
                    sheet = await doc.addSheet({
                        title: 'Waiting List',
                        headerValues: ['Email', 'Timestamp', 'Date']
                    });
                }

                // Check for duplicates (Optional, simple check)
                const rows = await sheet.getRows();
                const isDuplicate = rows.some(row => row.get('Email') === email);

                if (!isDuplicate) {
                    await sheet.addRow({
                        Email: email,
                        Timestamp: new Date().toISOString(),
                        Date: new Date().toLocaleString('fr-TN')
                    });
                    console.log('Saved to Google Sheets');
                } else {
                    console.log('Duplicate email in Sheets');
                }

            } catch (sheetError) {
                console.error('Google Sheets Error:', sheetError);
                // Don't fail the request if Sheets fails, just log it
            }
        } else {
            console.log('Google Sheets credentials missing - skipping sheet save');
        }

        return NextResponse.json({ message: 'تم التسجيل بنجاح' }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'حدث خطأ أثناء التسجيل' }, { status: 500 });
    }
}
