import { useState } from "react";
import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "../lib/images";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));


const projects = [
  {
    name: 'WebX DAO',
    description:
      'We focus on building and talking about possible future usage of web technologies.',
    link: { href: 'https://github.com/WebXDAO', label: 'github.com/WebXDAO' },
    logo: image2,
  },
  {
    name: 'SurPath Hub',
    description:
      'Inclusive Open Source Community for Filipino student ',
    link: { href: 'https://github.com/SurPathHub', label: 'github.com/SurPathHub' },
    logo: image1,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <>
      <Head>
        <title>Dr. Satya Ketan Mohanty | Sculpture Arts</title>
        <meta
          name="description"
          content=" Hi, I'm Dr. Satya Ketan Mohanty, an Artist (Sculptor), Museologist, Founder President – Prakruti Prem (NGO)."
        />
      </Head>
      <SimpleLayout
        title="A Sculptor’s journey."
        intro="The creativity of Indian artist Dr. Satya Ketan Mohany has given life to dead cells."
      >
        <div className="lg:order-first lg:row-span-2">
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              The visionary man loves to roam around the sea shore and spend time with nature. That love for nature enabled him to see life in every object and that has given him the space to create his signature in the unique art form as a Sculptor. The creativity of the Indian Artist has explored the potentiality of Drift wood, waste wood and scrap wood etc.
            </p>
            <p>
              The creativity of Indian artist Dr. Satya Ketan Mohany has given life to dead cells. His love for wildlife and nature can be seen in his art.
            </p>
            <p>
              It’s more than two decades while roaming in forests and sea shore, his love for nature and wildlife intrigued in photography. A life after photography, he has seen there is life in every object and that has given him the space to create signature in this unique art form as a sculptor.
            </p>
            <p>
              The sculptor sees himself as ‘an observer of nature’. He says ‘I can see the potentiality of driftwood, waste wood, scrap wood etc. and feel like every objective has a life’. In creating sculpture arts, he has applied his immense craftsmanship and ideas to present things differently and his incredible skill as a sculptor.
            </p>
            <p>
              A small step in the right direction led him to the biggest step of his life and so his effort of more than two decades has given different illustrations and identity.
            </p>
            <p>
              He has been felicitated by various institutions, universities for his incredible collections and drift wood arts in various cultural programs, Universities and institutions.
            </p>
          </div>
        </div>
        <br/>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
        <br/>
        <p>
          He closely works to develop a museum and has the honor of numerous collections. Being an recognized artisan by Min. of Textile, GOI, he has founded “Prakruti Prem” – a handicraft research and development center and his focus is on waste wood management, Natural scripture etc. is going to contribute significant expansion in welfare measures.
        </p>
      </SimpleLayout>
    </>
  )
}
