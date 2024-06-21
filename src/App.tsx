import './App.css';
import Delete from './delete_button.png';
import { data } from './data';
import { useEffect, useState } from 'react';

function getData(data: string) {
  const splittedData: Array<{ [key: string]: string }> = [];
  const newData = data.split(/\d+.	/).slice(1);

  for (let item of newData) {
    const [header, answer] = item.replace('\n', 'DELETE').split('DELETE');
    splittedData.push({ [header]: answer });
  }

  return splittedData;
}

function App() {
  const [info, setInfo] = useState<Array<{ [key: string]: string }>>();

  useEffect(() => {
    setInfo(getData(data));
  }, []);

  if (!info) return <div>Нет информации</div>;

  return (
    <>
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
      <div className='input_wrapper'>
        <div id='input_div'></div>
        <button className='enter'>найти</button>
        <ul className='wrapper'>
          <img src={Delete} alt='стереть' className='delete' />
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
        </ul>
      </div>
    </>
  );
}

export default App;
