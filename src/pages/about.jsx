import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Dr. Satya Ketan Mohanty | About</title>
        <meta
          name="description"
          content=" Hi, I'm Dr. Satya Ketan Mohanty, an Artist (Sculptor), Museologist, Founder President – Prakruti Prem (NGO)."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Dr. Satya Ketan Mohanty.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there 👋
              </p>
              <p>
                Born on 11th February 1976 at District Baragarh, Odisha, got his primary education in Bargarh School. After his schooling, he went to Bhubaneswar and then New Delhi for his professional studies in Accounting and Information Technology respectively. His mother Smt. Jyotshna Mohanty, a devoted pious lady and father Late Pratap Chandra Mohanty, served as an Union Leader and Human Resource management Personnel.
              </p>
              <p>
                In the year 1995 he started his artifacts collection. He used to collect coins from his childhood and his passion towards collecting rare artifacts began at the age of 17 when he had met a numismatist during a train journey to New Delhi, who inspired him to collect antiques and artifacts to set up a museum some day.
              </p>
              <p>
                He continued his artifacts collection passion even after joining is professional life. While serving as a Marketing Manager in an Electronics Manufacturing Company in 1998. Sooner he became intrigued towards photography, photo framing and various artifacts collections. While travelling far and wide he was always passionate towards his collection and initiated registering himself in various segments of artifacts collections.
              </p>
              <p>
                On his way of life he then got associated with various social institutions and Social works too.
              </p>
              <p>
              <strong>Life as a Museologist:</strong>
              </p>
              <p>
                Social works have taken him to the height where he came in contact with all classes of folks and societies, especially in western part of Odisha. His day to day life affairs with the societies gave him the chance to study about them and added values in his passion.
              </p>
              <p>
                A small artifact collector turned into photographer, then into a highest Sea Shell collector and Coins collector and registered him twice in the “India Book of Records” for his his largest collection of Indian Symbolic Coins and Sea Shells. Over a period his collection categories expanded to Indian Symbolic Coins, Medal & Memento, Ancient documents, Indian Postal Articles, Ancient house goods, Ancient Indian games, Sea Shell, Buddhist Period Artefacts, Tribal Artefacts, Rocks and Minerals, Fossil and Dried herbs etc.
              </p>
              <p>
                Dr. Satya Ketan Mohanty’s house is a museum of sorts, replete with more than 10,000 relics and rare artifacts that date back to several centuries. He exhibits his collections at schools and colleges. With his vast collection outgrowing the space in his house, he has thoughts to set up a public museum in Odisha to exhibit them.
              </p>
              <p>
                From Tribal ornaments, coins to even drift wood, the collector has been collecting it all for the last 27 years and with a mission – to educate the children and youth about the history.
              </p>
              <p>
                He owns more than 10,000 rare antiques which he has categorized into 14 sections. His collection includes; Indian Symbolic Coins, gold coins of Ganga dynasty, Ashok Emperors, coins of Kushana dynasty, Moghal, Shajahan, Bahadursah Jafar etc. to even around 700 types of dried herbs.
              </p>
              <p>
                His efforts and exhibitions in many educational institutes are recognized and awarded by Padmashree Awardees, Member of Parliaments, MLAs, Historians, Educationists and many eminent personalities
              </p>
              <p>
                While Mr. Mohanty exhibits his collections at various educational institutes including GM University, Rampur College, Panchayat College etc. and his outstanding collections of various species and materials from different ages are instrumental for the intellectuals, Educationist, Students, Researchers, Universities and high qualified personals in their field.
              </p>
              <p>
                Dr. Mohanty’s spirit has brought him to the limelight, earned credentials by intellectuals and eminent personalities like Padmashree Jeetendra Haripal, Padmashree Haldhar Nag, Shri Pradeep Amat, Hon’ble Speaker and other Member of Parliaments and MLAs too.
              </p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="#"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                youremailid@domain.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
