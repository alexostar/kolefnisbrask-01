export default function Footer() {
  return (
    <div className='container mx-auto max-w-4xl flex justify-between items-center px-4 py-2 sm:py-4 border-t-2'>
      <a
        href='https://github.com/IceSwede'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-900 hover:text-orange-600 text-base text-right'>
        &copy; 2022 kolefnisbrask.is
      </a>
      <a
        href='https://github.com/IceSwede/nextpress-acm-crud-example/discussions/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-slate-900 hover:text-orange-600 text-base text-right'>
        Samband
      </a>
    </div>
  );
}
