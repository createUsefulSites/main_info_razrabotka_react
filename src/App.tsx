import './App.css';
import Delete from './delete_button.png';
import { data } from './data';
import { useEffect, useState } from 'react';

function removeAllExceptWords(item: string) {
  return item.replace(/[^а-яА-ЯёЁ]/g, '').toLowerCase();
}

function getData(data: string) {
  const splittedData: Array<{ [key: string]: string }> = [];
  // eslint-disable-next-line no-control-regex
  const newData = data.split(/\d+.	/).slice(1);

  for (const item of newData) {
    const [header, answer] = item.replace('\n', 'DELETE').split('DELETE');
    splittedData.push({ [header]: answer });
  }

  return splittedData;
}

function App() {
  const [opened, setOpened] = useState<boolean>(true);
  const [info, setInfo] = useState<Array<{ [key: string]: string }>>();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInfo(getData(data));
  }, []);

  function handleClickKeys(e: React.SyntheticEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'LI') {
      setInputValue((prev) => prev + target.innerHTML);
    }
  }

  function handleClickDel() {
    setInputValue((prev) => prev.slice(0, -1));
  }

  function handleClickFind() {
    const allInfos = document.querySelectorAll('h1');
    allInfos.forEach((item) => {
      if (removeAllExceptWords(item.innerHTML).includes(inputValue.toLowerCase())) {
        item.scrollIntoView();
      }
    });
    setInputValue('');
    setOpened(false);
  }

  if (!info) return <div>Нет информации</div>;

  return (
    <>
      {opened && (
        <>
          <div className='input_div'>{inputValue}</div>
          <img className='delete' src={Delete} alt='delete' onClick={handleClickDel} />
          <ul className='wrapper' onClick={(e) => handleClickKeys(e)}>
            <li className='but'>A</li>
            <li className='but'>Б</li>
            <li className='but'>В</li>
            <li className='but'>Г</li>
            <li className='but'>Д</li>
            <li className='but'>Е</li>
            <li className='but'>Ё</li>
            <li className='but'>Ж</li>
            <li className='but'>З</li>
            <li className='but'>И</li>
            <li className='but'>Й</li>
            <li className='but'>К</li>
            <li className='but'>Л</li>
            <li className='but'>М</li>
            <li className='but'>Н</li>
            <li className='but'>О</li>
            <li className='but'>П</li>
            <li className='but'>Р</li>
            <li className='but'>С</li>
            <li className='but'>Т</li>
            <li className='but'>У</li>
            <li className='but'>Ф</li>
            <li className='but'>Х</li>
            <li className='but'>Ц</li>
            <li className='but'>Ч</li>
            <li className='but'>Ш</li>
            <li className='but'>Щ</li>
            <li className='but'>Ы</li>
            <li className='but'>Ъ</li>
            <li className='but'>Э</li>
            <li className='but'>Ь</li>
            <li className='but'>Ю</li>
            <li className='but'>Я</li>
            <button className='enter' onClick={handleClickFind}>
              найти
            </button>
          </ul>
        </>
      )}
      {opened === false && (
        <div onClick={() => setOpened(true)} className='open_input'>
          открыть ввод
        </div>
      )}
      <div className='main_info'>
        {info.map((item, id) => {
          const [key, value] = Object.entries(item)[0];

          return (
            <article key={id}>
              <h1>{key}</h1>
              <p>{value}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;