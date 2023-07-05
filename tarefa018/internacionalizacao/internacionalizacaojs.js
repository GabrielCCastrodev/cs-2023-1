const paises = [
    { nome: 'Brazil', locale: 'pt-BR', sigla: 'BRL' },
    { nome: 'South Korea', locale: 'ko-KR', sigla: 'KRW' },
    { nome: 'United States', locale: 'en-US', sigla: 'USD' },
    { nome: 'Germany', locale: 'de-DE', sigla: 'EUR' },
    { nome: 'Australia', locale: 'en-AU', sigla: 'AUD' },
    { nome: 'Russia', locale: 'ru-RU', sigla: 'RUB' },
    { nome: 'Japan', locale: 'ja-JP', sigla: 'JPY' },
    { nome: 'United Kingdom', locale: 'en-GB', sigla: 'GBP' },
    { nome: 'Norway', locale: 'nb-NO', sigla: 'NOK' },
    { nome: 'Israel', locale: 'he-IL', sigla: 'ILS' },
  ];
  
  paises.forEach(pais => {
    const { nome, locale, sigla } = pais;
    const formatoLinguagem = new Intl.DisplayNames(locale, { type: 'language' });
    const formatoData = new Intl.DateTimeFormat(locale, { dateStyle: 'short' });
    const formatoDataLongo = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'medium' });
    const formatoHora = new Intl.DateTimeFormat(locale, { timeStyle: 'medium' });
    const moedaLocal = new Intl.NumberFormat(locale, { style: 'currency', currency: sigla });
    const formatoSeparador = new Intl.NumberFormat(locale);
  
    console.log('Nome do País:', nome);
    console.log('Linguagem:', formatoLinguagem.of(locale));
    console.log('Data no formato curto:', formatoData.format(new Date()));
    console.log('Data no formato longo:', formatoDataLongo.format(new Date()));
    console.log('Formato de hora:', formatoHora.format(new Date()));
    console.log('Símbolo da moeda local:', moedaLocal.format(12345.67));
    console.log('Separador de decimal:', formatoSeparador.format(12345.67));
    console.log('Separador de milhar:', formatoSeparador.format(1234567));
    console.log('Código de página windows:', Intl.getCanonicalLocales(locale));
    console.log('---------------------------------------------------');
  });