import { NextRequest, NextResponse } from 'next/server';

/**
 * Farcaster Actions
 * Spec: https://docs.farcaster.xyz/reference/actions/spec
 * GET: return the metadata of the action
 * @param req
 * @param res
 */
export async function GET(req: NextRequest): Promise<Response> {
    const medataData = {
        "name": "Attest this!",
        "icon": "log",
        "description": "Attest this on sign protocol",
        "aboutUrl": "https://cast-notes-testing-app.vercel.app/",
        "action": {
            "type": "post",
            "postUrl": "https://cast-notes-testing-app.vercel.app/api/actions/attestations"
        }
    }
    return NextResponse.json(medataData, { status: 200 });
}


export async function POST(req: NextRequest): Promise<Response> {
    const responseFrameURL = 'https://cast-notes-testing-app.vercel.app/frames/attestations/'
    return NextResponse.json({ type: 'frame', frameUrl: responseFrameURL }, { status: 200 });
}

export const dynamic = 'force-dynamic';
