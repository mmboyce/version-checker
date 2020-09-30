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

});