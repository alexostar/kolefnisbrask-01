import Chart1a from '../components/carboncapture/Chart1a';
import Chart1b from '../components/carboncapture/Chart1b';
import Chart2a from '../components/carboncapture/Chart2a';
import Chart2b from '../components/carboncapture/Chart2b';
import Chart3a from '../components/carboncapture/Chart3a';
import Chart3b from '../components/carboncapture/Chart3b';

export default function Cneutral() {
  return (
    <div className='flex flex-col max-w-4xl items-center py-2 px-4 my-6'>
      <div>
        <h1 className='text-4xl text-slate-900 mb-3'>
          &quot;Kolefnisjöfnun fyrir alla!&quot;
        </h1>

        <p className='my-3'>
          Tökum sem dæmi fyrirtæki í kolefnisbransanum sem bíður einstaklingum
          upp á að kolefnisjafna losun sína á CO<sub>2</sub>-ígildum.
          Skógræktarverkefnið er unnið í samvinnu við Skógræktinan og sagt vera
          byggt á aðferðafræði{' '}
          <a
            href='https://www.skogur.is/is/nyskograekt/fraedsluefni/skogarkolefni'
            className='text-blue-700'>
            Skógarkolefnis.{' '}
          </a>
          Boðið er t.d upp á áskrift á einstaklingspakka fyrir tæpar 30,000kr ár
          ári til að binda 12 tonn CO
          <sub>2</sub>
          -ígilda, sem samsvarar árlegri losun hefðbundins Íslendigs með
          meðalbíl og meðalkeyrslu. Í pakkanum felst gróðursetning á 96 trjám
          til að binda þessa losun.
        </p>
        <p className='italic text-orange-800'>
          &quot;Staðfesting í rafrænu formi fylgir alltaf með kaupum ásamt
          límmiða sem staðfestir að bifreiðin þín er græn í eitt ár!&quot;
        </p>
        <h2 className='text-xl my-3'>Millifyrirsögn?</h2>

        <p className='my-3'>
          Lítum nánar á þetta með útreikningum sem byggðir eru á{' '}
          <a href='https://reiknivel.skogur.is' className='text-blue-700'>
            Skógarkolefnisreikni{' '}
          </a>
          Skógræktarinnar. Eftifarandi línurit sýnir vöxt Alasakaspar och
          Sitkagrenis á skógræktarsvæði{' '}
          <span className='italic'>
            Suðurland, Eyjafjöll-Þórsmörk, Gunnarshólmi.
          </span>
        </p>
      </div>
      <div className='inline lg:hidden'>
        <Chart1a />
      </div>
      <div className='hidden lg:inline'>
        <Chart1b />
      </div>
      <p className='my-3'>
        Samkvæmt þessu mun heidlarbinding sitakgreniskógs og skógs með alaskaösp
        nena um 670 tonnum CO<sub>2</sub>-ígilda á 70 árum. Næsta línurit sýnir
        hve mörg procent af heildarbindingunni eru bundin á ári. Sem mest er
        bindingin í 30 ára skógi, tæp 3%.
      </p>
      <div className='inline lg:hidden'>
        <Chart2a />
      </div>
      <div className='hidden lg:inline'>
        <Chart2b />
      </div>
      <div className='flex flex-col items-start'>
        <h2 className='text-2xl my-3'>Hvernig gengur með kolefnisjöfnunina?</h2>
        <p className='my-3'>
          <strong>
            Hér mun ég útsýra útreikningana á bakvið þriðja línuritið (áætla að
            gera það 2022-10-18).
          </strong>{' '}
          Nunc et tristique nulla, nec volutpat augue. Nullam at leo quis turpis
          efficitur blandit. Suspendisse at vestibulum diam. Vestibulum id
          lobortis risus, at molestie nibh. Duis eleifend nulla vitae nisi
          feugiat, eget
        </p>
      </div>
      <div className='inline lg:hidden'>
        <Chart3a />
      </div>
      <div className='hidden lg:inline'>
        <Chart3b />
      </div>
      <p className='my-3'>
        Nunc et tristique nulla, nec volutpat augue. Nullam at leo quis turpis
        efficitur blandit. Suspendisse at vestibulum diam. Vestibulum id
        lobortis risus, at molestie nibh. Duis eleifend nulla vitae nisi
        feugiat, eget malesuada nulla maximus. Nulla leo eros, elementum ac
        semper quis, consequat eget urna. Maecenas vestibulum tellus ac diam
        porta tempus. Fusce condimentum consequat luctus. Nam blandit metus eget
        neque elementum, non lacinia urna pellentesque. Phasellus fermentum urna
        eget quam rhoncus suscipit.
      </p>
      <p className='my-3'>
        Nunc et tristique nulla, nec volutpat augue. Nullam at leo quis turpis
        efficitur blandit. Suspendisse at vestibulum diam. Vestibulum id
        lobortis risus, at molestie nibh. Duis eleifend nulla vitae nisi
        feugiat, eget malesuada nulla maximus. Nulla leo eros, elementum ac
        semper quis, consequat eget urna. Maecenas vestibulum tellus ac diam
        porta tempus. Fusce condimentum consequat luctus. Nam blandit metus eget
        neque elementum, non lacinia urna pellentesque. Phasellus fermentum urna
        eget quam rhoncus suscipit.
      </p>
      <p className='my-3'>
        Áætlað er að hver hektari af skógræktarlandi bindi um 500-600 tonn Co2e
        og að um 2500 plöntur fari á hvern hektara. Áætlað er að hver
        gróðursetning Súrefnisskógarins standi í 50 ár og bindingin sem á sér
        stað er seld fram í tímann, ásamt einingunum sem koma til með að myndast
        (ex-ante) og er þetta út frá aðferðarfræði Skógarkolefnis og unnið
        áreiðanlega út frá ISO staðli 14064 og Tækniforskrift Staðlaráðs Íslands
        ÍST TS 92: 2022.
      </p>
    </div>
  );
}
