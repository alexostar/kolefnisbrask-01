export default function Footer() {
  return (
    <div className='container mx-auto max-w-4xl flex justify-between items-center px-4 py-2 sm:py-4 border-t-2'>
      <a
        href='http://dietdata.se/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-900 hover:text-orange-600 text-base text-right'>
        &copy; 2022 kolefnisbrask.is
      </a>
      <a
        href='http://dietdata.se/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-900 hover:text-orange-600 text-base text-right'>
        Hafðu samband!
      </a>
    </div>
  );
}
