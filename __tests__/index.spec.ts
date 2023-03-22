import parse from '../src';

describe('api.basic', () => {
  test('parse --opts should be string or boolean', () => {
    const parsed = parse(['--foo=bar', '--debug', '--baz=']);
    console.log('parsed: ', parsed);
    expect(parsed).toEqual({
      args: [],
      opts: {
        foo: 'bar',
        debug: true,
        baz: '',
      },
    });
  });

  test('parse -opts should be string or boolean', () => {
    const parsed = parse(['-f', '-d', '-b=']);
    console.log('parsed: ', parsed);

    expect(parsed).toEqual({
      args: [],
      opts: {
        f: true,
        d: true,
        b: '',
      },
    });
  });
});
