import Image from 'next/image';
import Link from 'next/link';

//<img src={cover_image} alt='' className='w-full rounded' />

export default function Hero() {
  return (
    <div className='container mx-auto max-w-4xl flex flex-col justify-between items-center py-2 px-4'>
      <div className='text-sm italic'>
        This site is under construction. Ongoing update 2022-10-18/19
      </div>
      <div className='my-12'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl mb-6 text-center'>
          Kolefnisjöfnun með skógrækt tekin til skoðunar
        </h1>

        <div className='relative'>
          <Image
            className='rounded-md'
            src='/hero-image.jpg'
            alt='Environmental vandalism'
            width={1200}
            height={552}
          />
          <h2 className='absolute text-xl sm:text-3xl md:text-5xl font-bold text-white bottom-5 left-5'>
            Jarðrask! Kolefnisbrask?
          </h2>
        </div>
        <p className='text-sm italic'>
          {' '}
          Með svona aðferðum við skógrækt mun losun kolefnis úr jarðvegi verða
          langt umfram bindingu trjánna fyrstu árin! Mynd: Borgþór Magnússon
        </p>

        <h2 className='text-xl md:text-2xl font-bold my-6'></h2>
        <div>
          <p className='my-6 text-xl'>
            Í aðgerðaáætlun stjórnvalda í loftslagsmálum er gert ráð fyrir að
            stórauka skógrækt til kolefnisbindingar. Fjölmargir landeigendur
            bjóða einstaklingum og fyritækjum upp á kaup á kolefniseiningum sem
            mótvægi við kolefnislosun þeirra. Oft er hugtakið kolefnisjöfnun
            notað í markaðssetningu og verkefnin sögð vera byggð á aðferðafræði
            Skógarkolefnis, sem er verkefni Skógræktarinnar til að koma á fót
            viðurkenndu ferli vottunar á bindingu kolefnis með nýskógrækt. En
            stenst alltaf því sem er lofað? Er hægt að kolefnisjafna bifreið með
            því að kaupa árlega áskrift á nýskógrækt sem mun á sínum líftíma
            binda CO2-ígildi sem samsvara árlegari kolefnislosun bílsins? Er
            umhverfisvernd ekki í hávegum höfð þegar kolefnisbindingin er
            megindrifkrafturinn?
          </p>

          <Link href='/cneutral/'>
            <a className='bg-orange-700 px-3 py-2 text-white rounded-md hover:bg-orange-600'>
              Lítum nánar á þetta!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
