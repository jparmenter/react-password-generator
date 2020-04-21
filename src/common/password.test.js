import {
  generate,
  alphanumeric,
  numbers,
  uppercaseAlphanumeric,
  symbols,
} from './password';

describe('password', () => {
  let options;

  beforeEach(() => {
    options = {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
    };
  });
  describe('generate', () => {
    it('should return empty when given falsey options', () => {
      expect(generate(options)).toEqual('');
    });

    describe('options', () => {
      it('should only container alphanumeric', () => {
        options.lowercase = true;
        const password = generate(options);

        const result = [...password].filter((character) =>
          alphanumeric.includes(character)
        );

        expect(result.length).toBeTruthy();
      });

      it('should only container uppercase alphanumeric', () => {
        options.uppercase = true;
        const password = generate(options);

        const result = [...password].filter((character) =>
          uppercaseAlphanumeric.includes(character)
        );

        expect(result.length).toBeTruthy();
      });

      it('should only container numbers', () => {
        options.numbers = true;
        const password = generate(options);

        const result = [...password].filter((character) =>
          numbers.includes(character)
        );

        expect(result.length).toBeTruthy();
      });

      it('should only container symbols', () => {
        options.symbols = true;
        const password = generate(options);

        const result = [...password].filter((character) =>
          symbols.includes(character)
        );

        expect(result.length).toBeTruthy();
      });
    });
  });
});
