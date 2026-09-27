import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-80 p-5 rounded-xl bg-gray-800 shadow-lg">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-14 text-right text-2xl px-3 mb-4 rounded-md text-white bg-gray-700 outline-none"
        />
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="col-span-2 h-14 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
          >
            C
          </button>
          <button
            onClick={handleDelete}
            className="col-span-2 h-14 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
          >
            DEL
          </button>

          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === '=' ? handleEqual() : handleClick(btn))}
              className={`h-14 rounded-md text-white font-semibold ${
                btn === '='
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;