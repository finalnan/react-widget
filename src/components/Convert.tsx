import React from 'react';
import axios from 'axios';

type ConvertProps = {
  language: {
    label: string;
    value: string;
  };
  text: string;
};

const Convert: React.FC<ConvertProps> = ({ language, text }): JSX.Element => {
  const [translated, setTranslated] = React.useState('');
  const [debouncedText, setdebouncedText] = React.useState(text);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  React.useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (debouncedText !== '') doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
