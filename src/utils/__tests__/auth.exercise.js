// Testing Pure Functions
// 💯 improved titles for jest-in-case

import cases from 'jest-in-case'
import {isPasswordAllowed} from '../auth'

function casify(obj) {
  console.log('casifying')
  console.log(
    Object.entries(obj).map(([name, password]) => ({
      name: `${password} - ${name}`,
      password,
    })),
  )

  return Object.entries(obj).map(([name, password]) => ({
    name: `${password} - ${name}`,
    password,
  }))
}

cases(
  'isPasswordAllowed: valid passwords',
  ({password}) => {
    expect(isPasswordAllowed(password)).toBe(true)
  },
  casify({'valid password': '!aBc123'}),
)

cases(
  'isPasswordAllowed: invalid passwords',
  ({password}) => {
    expect(isPasswordAllowed(password)).toBe(false)
  },
  casify({
    'too short': 'a2c!',
    'no letters': '123456!',
    'no numbers': 'ABCdef!',
    'no uppercase letters': 'abc123!',
    'no lowercase letters': 'ABC123!',
    'no non-alphanumeric characters': 'ABCdef123',
  }),
)
