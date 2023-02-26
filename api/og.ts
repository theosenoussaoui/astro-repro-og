import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler() {
  const html = {
    type: 'div',
    props: {
      children: 'hello, world',
      style: { color: 'black' }
    }
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    debug: true
  });
}
