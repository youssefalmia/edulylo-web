import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: 'البريد الإلكتروني غير صالح' }, { status: 400 });
        }

        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'waiting_list.json');

        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        let waitingList = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                waitingList = JSON.parse(fileContent);
            } catch (e) {
                // If file is corrupt or empty, start fresh
                waitingList = [];
            }
        }

        // Check for duplicates
        if (waitingList.some((entry: any) => entry.email === email)) {
            return NextResponse.json({ message: 'تمت عملية التسجيل بنجاح' }, { status: 200 });
        }

        waitingList.push({
            email,
            timestamp: new Date().toISOString(),
        });

        fs.writeFileSync(filePath, JSON.stringify(waitingList, null, 2));

        return NextResponse.json({ message: 'تم التسجيل بنجاح' }, { status: 200 });
    } catch (error) {
        console.error('Error saving to waiting list:', error);
        return NextResponse.json({ error: 'حدث خطأ أثناء التسجيل' }, { status: 500 });
    }
}
