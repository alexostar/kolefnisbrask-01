import Image from 'next/image';
import Link from 'next/link';

//<img src={cover_image} alt='' className='w-full rounded' />

export default function Hero() {
  return (
    <div className='container mx-auto max-w-4xl flex flex-col justify-between items-center py-2 px-4'>
      <div className='text-sm italic'>
        This site is under construction. Ongoing update 2022-10-18
      </div>
      <div className='my-12'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl mb-6'>
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
          <p className='mt-6 text-xl'>
            Í samvinnu við Skórrækt ríkisins bjóða landeigendur almenningi upp á
            að fjármagna skórækt þeirra gegn kvittun um vottaðar
            kolefniseiningar að nota til kolefnisjöfnunar. Eigandi bíls sem
            sleppir út fimm tonnum CO<sub>2</sub>-ígilda á ári getur keypt
            gróðursetningu á trjám sem munu binda jafnmikið kolefni á sínum
            lífstíma og þar með fengið límmiða fyrir bílinn sem staðfestir að
            hann sé{' '}
            <span className='italic font-bold text-green-700'>grænn. </span>
            <span className='font-bold'>Þetta gengur ekki upp!</span>
          </p>
          <p className='my-6 mb-12 text-xl'>
            Í aðgerðaráætlun sjórnvalda í loftslagsmálum er gert ráð fyrir að{' '}
            <span className='italic'>
              &quot;skógrækt aukist um samanlagt ca 3000 hekarara á árunum 2019
              - 2022 og að auknar aðgerðir í skógrækt muni skila
              kolefnisbindingu sem samsvarar alls um 34 þúsund tonnum árið 2022.
              Þetta samsvarar árlega 134 þúsund tonnum árið 2030 og 258 þúsund
              tonnum árið 2040.&quot;
            </span>{' '}
            <span className='font-bold'>Stenst þetta nánari skoðun?</span>
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
