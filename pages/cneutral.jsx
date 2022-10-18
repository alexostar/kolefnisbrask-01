import Chart1a from '../components/carboncapture/Chart1a';
import Chart1b from '../components/carboncapture/Chart1b';
import Chart2a from '../components/carboncapture/Chart2a';
import Chart2b from '../components/carboncapture/Chart2b';
import Chart3a from '../components/carboncapture/Chart3a';
import Chart3b from '../components/carboncapture/Chart3b';

export default function Cneutral() {
  return (
    <div className='flex flex-col max-w-4xl items-center py-2 px-4'>
      <p className='text-sm italic text-center'>
        This site is under construction. Ongoing update 2022-10-18/19
      </p>
      <div>
        <h1 className='text-4xl text-slate-900 my-6 italic'>
          &quot;Kolefnisjöfnun fyrir alla!&quot;
        </h1>

        <p className='my-3'>
          Tökum sem dæmi fyrirtæki í kolefnisbransanum sem bíður einstaklingum
          upp á að kolefnisjafna losun sína. Skógræktarverkefnið er unnið í
          samvinnu við Skógræktinan og sagt vera byggt á aðferðafræði{' '}
          <a
            href='https://www.skogur.is/is/nyskograekt/fraedsluefni/skogarkolefni'
            className='text-blue-700'>
            Skógarkolefnis.{' '}
          </a>
          Boðið er t.d upp á áskrift á einstaklingspakka fyrir tæpar 30.000 kr á
          ári til að binda 12 tonn CO
          <sub>2</sub>
          -ígilda, sem samsvarar árlegri losun{' '}
          <italic>hefðbundins Íslendigs</italic> með meðalbíl og meðalkeyrslu. Í
          pakkanum felst gróðursetning á 96 trjám til að binda þessa losun.
        </p>
        <p className='italic text-orange-800'>
          &quot;Staðfesting í rafrænu formi fylgir alltaf með kaupum ásamt
          límmiða sem staðfestir að bifreiðin þín er græn í eitt ár!&quot;
        </p>

        <p className='my-3'>
          Lítum nánar á þetta með útreikningum sem byggðir eru á{' '}
          <a href='https://reiknivel.skogur.is' className='text-blue-700'>
            Skógarkolefnisreikni{' '}
          </a>
          Skógræktarinnar. Eftifarandi línurit sýnir vöxt Alasakaspar och
          Sitkagrenis á skógræktarsvæðinu{' '}
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
        Samkvæmt þessu mun heidlarbinding sitakgrenis og Alaskaaspar nena um 670
        tonnum CO<sub>2</sub>-ígilda á hektara og 70 árum. Línurit 2 sýnir svo
        hve mörg procent af heildarbindingunni (meðaltal fyrir sitkagreni og
        Alaskaösp) eru bundin á hverju ári. Sem mest er bindingin í 30 ára
        gömlum skógi eða tæp 3% af heildarbindingunni.
      </p>
      <div className='inline lg:hidden'>
        <Chart2a />
      </div>
      <div className='hidden lg:inline'>
        <Chart2b />
      </div>
      <div className='flex flex-col items-start'>
        <h2 className='text-2xl my-3'>
          En hvernig gengur með kolefnisjöfnunina?
        </h2>
        <p className='my-3'>
          Tökum nú sem dæmi einstakling sem ákveður árið 2022 að kaupa í áskrift
          árlega einn einstaklingspakka í 70 ár. Að þeim tíma liðnum hefur hann
          borgað fyrir 70 skógarreiti sem eru á öllum aldri, frá árs gömlum
          plöntum til 70 ára skógs sem er þá búin að binda 12 tonn. Þriðja
          línuritið sýnir annars vegar hve mörg tonn hann hefur borgað fyrir og
          hins vegar samanlagða bindingu á þeim reitum sem seljandinn
          (landeigandinn) á.
        </p>
        <p className='my-3'>
          Árið 2040, þegar Ísland á að vera orðið kolefnishlutlausst land, er
          hann búinn að borga fyrir bindingu á 218 (18 x 12) tonnum en samanlögð
          binding er aðeins orðin 10.55 tonn eða um 4.9% af kaupunum. Eftir 70
          ár eru samsvarandi tölur 840 og 440 tonn. Ef hann heldur áfram með
          sína áskrif eftir þetta er hann loks búinn að ná árlegri
          kolefnisjöfnun, en kolefnisskuldin sem nemur 400 tonnum mun ekki
          minnka frekar.
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
      <p className='my-3 border-t italic text-sm'>
        Footnote: Hjá umræddu kolefnisfyrirtæki er áætlað er að hver hektari af
        skógræktarlandi bindi um 500-600 tonn C0<sub>2</sub>-eininga og að um
        2500 plöntur fari á hvern hektara. Áætlað er að hver gróðursetning
        skógarins standi í 50 ár og bindingin sem á sér stað er seld fram í
        tímann, ásamt einingunum sem koma til með að myndast (ex-ante) og er
        þetta út frá aðferðarfræði Skógarkolefnis og unnið áreiðanlega út frá
        ISO staðli 14064 og Tækniforskrift Staðlaráðs Íslands ÍST TS 92: 2022.
      </p>
    </div>
  );
}
