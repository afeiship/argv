export default (inArgv = process.argv.slice(2)) => {
  const args: string[] = [];
  const opts = {};
  const parseArg = (arg: string): [string, boolean | string] => {
    const [key, value] = arg.split('=');
    const isUndefined = value === undefined;
    return [key, isUndefined ? true : value];
  };

  inArgv.forEach((arg) => {
    const isDblDash = arg.startsWith('--');
    const isDash = arg.startsWith('-');
    if (isDblDash || isDash) {
      const [key, value] = parseArg(arg.slice(isDblDash ? 2 : 1));
      opts[key] = value;
    } else {
      args.push(arg);
    }
  });

  return {
    args,
    opts,
  };
};
