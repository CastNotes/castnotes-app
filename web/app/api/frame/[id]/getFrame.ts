import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextResponse } from 'next/server';
import { AttestationData, AttestationResponse } from './[page]/image/route';
import { getAttestation } from 'app/api/sign-protocol/_utils/sign-protocol';
import { getCast } from 'app/api/farcaster/cast/_utils/hub';
import { getFnameByFid } from 'app/api/farcaster/cast/_utils/fname';

const ATTESTATION_CASTER_URL = 'http://localhost:3000';
const WARPCAST_URL = 'https://warpcast.com';
const SIGN_SCAN_URL = 'https://testnet-scan.sign.global/attestation';

export async function getFrame0(id: string) {
  const attestation: AttestationResponse = await getAttestation(id);
  const attestation_data: AttestationData = JSON.parse(attestation.data);
  const cast = (await getCast(attestation_data.authorFID, attestation_data.castHash)).data
    .castAddBody.text;
  const author = (await getFnameByFid(attestation_data.authorFID)).transfers[0].username;
  const attester = (await getFnameByFid(attestation_data.attesterFID)).transfers[0].username;

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'References',
          action: 'post',
        },
        {
          label: 'Attester',
          action: 'link',
          target: WARPCAST_URL + `/${attester}`,
        },
        {
          label: 'Original Cast',
          action: 'link',
          target: WARPCAST_URL + `/${author}/${attestation_data.castHash}`,
        },
        {
          label: 'More Info',
          action: 'post',
        },
      ],
      image: {
        src: ATTESTATION_CASTER_URL + `/api/frame/${id}/0/image`,
        aspectRatio: '1:1',
      },
      postUrl: ATTESTATION_CASTER_URL + `/api/frame/${id}/0`,
    }),
  );
}

export async function getFrame1(id: string) {
  const attestation: AttestationResponse = await getAttestation(id);
  const attestation_data: AttestationData = JSON.parse(attestation.data);

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Reference 1',
          action: 'link',
          target: ATTESTATION_CASTER_URL, //TODO: change target to reference 1 field
        },
        {
          label: 'Reference 2',
          action: 'link',
          target: ATTESTATION_CASTER_URL, //TODO: change target to reference 2 field
        },
        {
          label: 'Next',
          action: 'post',
        },
        {
          label: 'Back',
          action: 'post',
        },
      ],
      image: {
        src: ATTESTATION_CASTER_URL + `/api/frame/${id}/1/image`,
        aspectRatio: '1:1',
      },
      postUrl: ATTESTATION_CASTER_URL + `/api/frame/${id}/1`,
    }),
  );
}

export async function getFrame2(id: string) {
  const attestation: AttestationResponse = await getAttestation(id);
  const attestation_data: AttestationData = JSON.parse(attestation.data);

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Reference 3',
          action: 'link',
          target: ATTESTATION_CASTER_URL, //TODO: change target to reference 3 field
        },
        {
          label: 'Reference 4',
          action: 'link',
          target: ATTESTATION_CASTER_URL, //TODO: change target to reference 4 field
        },
        {
          label: 'Back',
          action: 'post',
        },
      ],
      image: {
        src: ATTESTATION_CASTER_URL + `/api/frame/${id}/2/image`,
        aspectRatio: '1:1',
      },
      postUrl: ATTESTATION_CASTER_URL + `/api/frame/${id}/2`,
    }),
  );
}

export async function getFrame3(id: string) {
  const attestation: AttestationResponse = await getAttestation(id);
  const attestation_data: AttestationData = JSON.parse(attestation.data);

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Back',
          action: 'post',
        },
        {
          label: 'Attestation Info',
          action: 'link',
          target: SIGN_SCAN_URL + '/' + id,
        },
      ],
      image: {
        src: ATTESTATION_CASTER_URL + `/api/frame/${id}/3/image`,
        aspectRatio: '1:1',
      },
      postUrl: ATTESTATION_CASTER_URL + `/api/frame/${id}/3`,
    }),
  );
}