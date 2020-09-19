import { FileSizePipe } from './file-size.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FileSizePipe', () => {
  describe('Teste Isolado', () => {
    const pipe = new FileSizePipe();

    it('deve converter bytes para MB', () => {
      expect(pipe.transform(123456789)).toBe('117.74 MB');
      expect(pipe.transform(987654321)).toBe('941.90 MB');
    });

    it('deve converter bytes para GB', () => {
      expect(pipe.transform(1342177280)).toBe('1.25 GB');
    });
  });
});
