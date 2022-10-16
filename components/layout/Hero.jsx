import Image from 'next/image';

//<img src={cover_image} alt='' className='w-full rounded' />

export default function Hero() {
  return (
    <div className='container mx-auto max-w-4xl flex flex-col justify-between items-center py-2 px-4 my-12'>
      <h1 className='text-5xl mb-6'>Jarðrask og kolefnisbrask</h1>

      <Image
        className='rounded-md'
        src='/hero-image.jpg'
        alt='Environmental vandalism'
        width={1200}
        height={552}
      />

      <div>
        <p className='mt-6 text-xl'>
          Með svona aðferðum við skógrækt mun losun kolefnis úr jarðvegi verða
          langt umfram bindingu trjánna fyrstu árin.
        </p>
        <p className='mt-6 text-xl'>
          Í samvinnu við Skórrækt ríkisins bjóða landeigendur almenningi upp á
          að fjármagna skórækt þeirra gegn kvittun um vottaðar bundnar
          kolefniseiningar. Eigandi bíls sem sleppir út 5 tonnum CO2e á ári geta
          keypt gróðursetningu á trjám sem munu binda 5 tonn á sínum lífstíma og
          fengið límmiða fyrir bílinn sem staðfestir að hann sé grænn. Þetta
          gengur ekki upp!
        </p>
        <p className='mt-6 text-xl'>
          Í aðgerðaráætlun sjórnvalda í loftslagsmálum er gert ráð fyrir að
          &quot;skógrækt aukist um samanlagt ca 3000 hekarara á árunum 2019 -
          2022 og að auknar aðgerðir í skógrækt muni skila kolefnisbindingu sem
          samsvarar alls um 34 þúsund tonnum árið 2022. Þetta samsvarar árlega
          134 þúsund tonnum árið 2030 og 258 þúsund tonnum árið 2040&quot;.
          Stenst þetta nánari skoðun?
        </p>

        <button className='bg-orange-700 my-6 px-3 py-2 text-white rounded-md hover:bg-orange-500'>
          Lítum nánar á þetta!
        </button>
      </div>
    </div>
  );
}
