import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  const sourceCodePro = fetch(
    new URL('./SourceCodePro-Light.ttf', process.env.NEXT_PUBLIC_SITE_URL),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '7rem',
        }}
      >
        RUNFUNRUN
      </p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Source_Code_Pro',
          data: await sourceCodePro,
        },
      ],
    },
  );
}
