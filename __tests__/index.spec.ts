import parse from '../src';

describe('test cra-envs', () => {
  test('cra-envs: get all', function () {
    console.log(parse(['arg1 --opt1=1 --opt2=2 -p=3']));
  });
});
