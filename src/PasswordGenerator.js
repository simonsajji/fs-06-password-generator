import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase,setIncludeUpperCase] = useState(true);
  const [includeLowerCase,setIncludeLowerCase] = useState(true);

  const generatePassword = () => {
    const characters = '';
    let additionalCharacters = '';

    if (includeSpecialChars) {
      additionalCharacters += '!@#$%^&*()';
    }

    if (includeNumbers) {
      additionalCharacters += '0123456789';
    }

    if (includeUpperCase) {
        additionalCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
      if(includeLowerCase){
        additionalCharacters += 'abcdefghijklmnopqrstuvwxyz';
      }

    const allCharacters = characters + additionalCharacters;

    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className='generator'>
      <div>
      <h1 className='t-center'>Password Generator</h1>
        <p className='t-center f-bold'>{password}</p>
      </div>
      <div className='t-number'>
        <div className='t-number-label'>Password Length:</div>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
          />
          Include uppercase letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
          />
          Include lowercase letters
        </label>
      </div>
      <p className='t-center'> <button onClick={generatePassword} className='t-center j-self-center'>Generate Password</button></p>
    </div>
  );
};

export default PasswordGenerator;




