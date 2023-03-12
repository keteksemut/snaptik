import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vn from '../../public/lang/vn';
import br from '../../public/lang/br';
import id from '../../public/lang/id';
import { useMemo } from 'react';

const langs = {
  en,
  vn,
  br,
  ID: id,
};

type LOCALE = keyof typeof langs;

const useTrans = () => {
  const { locale } = useRouter();

  const trans = useMemo(() => langs[(locale as LOCALE) ?? 'en'] || langs.en, [locale]);

  return trans;
};

export default useTrans;
