import { ToHexStringPipe } from './to-hex-string.pipe';

describe('ToHexStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ToHexStringPipe();
    expect(pipe).toBeTruthy();
  });
});
