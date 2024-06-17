import React, { useEffect, useState } from 'react';

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const API_URL = "http://127.0.0.1:3000/api/v1";

const cardStyles = {
  backgroundColor: 'hsl(var(--nextui-primary-500))',
  color: 'hsl(var(--nextui-color-text))',
};


export default function RichText2({rich_text_id}) {
    const [richText, setRichText] = useState(null);

  useEffect(() => {
    async function loadRichText() {
      console.log(API_URL);
      try {
        const richTextResponse = await fetch(`${API_URL}/rich_texts/${rich_text_id}`);
        if (richTextResponse.ok) {
          const richTextData = await richTextResponse.json();
          setRichText(richTextData);
        } else {
          throw new Error('Failed to fetch creator data');
        }
      } catch (e) {
        setError('An Error Occurred...');
        console.log('An error occurred', e);
      } finally {
        setLoading(false);
      }
    }
    loadRichText();
  }, [rich_text_id]);

  if (!richText) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="max-w-[400px]"
    css={{
        backgroundColor: '#ffffff', // Change the background color here
        color: '#333', // Change the text color here
      }}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}