import { Button } from '@nextui-org/react';
import { useState } from 'react';
import ProviderWrapper from './components/wrapper/ProviderWrapper';
import supabase from './supabaseClinet';

function App() {
  const [text, setText] = useState('');

  const saveText = async () => {
    const testData = {
      test: text,
    };
    const { data, error } = await supabase
      .from('Test')
      .insert([testData])
      .select();

    if (error) {
      console.error('Error saving text:', error);
    } else {
      alert('Text saved successfully!');
      setText('');
    }
    console.log('data is: ', data);
  };

  return (
    <div className='App'>
      <ProviderWrapper>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter your text here...'
        />
        <Button onClick={saveText}>Save Text</Button>
      </ProviderWrapper>
    </div>
  );
}

export default App;
