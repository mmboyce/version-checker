const { compareVersions } = require('../../service/compareVersions');

describe('compareVersions', () => {
  describe('when versions have same amount of periods', () => {
    it('should represent lower numbers as before', () => {
      expect(compareVersions('1.0.0', '1.0.1')).toBe('before');
      expect(compareVersions('1.0.0', '2.0.0')).toBe('before');
      expect(compareVersions('1.2.0', '3.10.1')).toBe('before');
    });

    it('should represent greater numbers as after', () => {
      expect(compareVersions('2.0.0', '1.0.1')).toBe('after');
      expect(compareVersions('1.120.0', '1.12.1')).toBe('after');
      expect(compareVersions('3.0.5', '3.0.1')).toBe('after');
    });

    it('should represent same numbers as equal', () => {
      expect(compareVersions('2.0.0', '2.0.0')).toBe('equal');
      expect(compareVersions('1.0.1', '1.0.1')).toBe('equal');
      expect(compareVersions('1.12.0', '1.12.0')).toBe('equal');
    });
  });

  describe('when versions have different amount of periods', () => {
    it('should represent lower numbers as before', () => {
      expect(compareVersions('1.0', '1.0.1')).toBe('before');
      expect(compareVersions('1.1', '1.10.0')).toBe('before');
      expect(compareVersions('1', '1.0.1')).toBe('before');
    });

    it('should represent greater numbers as after', () => {
      expect(compareVersions('2.0.0', '1.0')).toBe('after');
      expect(compareVersions('1.1.0', '1.0')).toBe('after');
      expect(compareVersions('2.5.0.12', '2.5.0')).toBe('after');
    });

    it('should represent same numbers as equal', () => {
      expect(compareVersions('2', '2.0.0')).toBe('equal');
      expect(compareVersions('1.12', '1.12.0')).toBe('equal');
      expect(compareVersions('2.3.0', '2.3')).toBe('equal');
    });
  });

  describe('when supplied improper parameters', () => {
    it('should throw an error', () => {
      expect(() => {
        compareVersions('one', 'two');
      }).toThrow();

      expect(() => {
        compareVersions('one.0', '2.two');
      }).toThrow();

      expect(() => {
        // these are not zeroes, they are the letter O!
        compareVersions('1.O', '2.O');
      }).toThrow();

      expect(() => {
        compareVersions('1..0', '1.0');
      }).toThrow();
    });

    it('should result in a 400 response code', () => {
      expect(() => {
        compareVersions('wrong', 'format');
      }).toThrow('400');
    });
  });
});
