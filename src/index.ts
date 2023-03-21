export default (inArgv = process.argv.slice(2)) => {
  const args: string[] = [];
  const opts = {};

  let i = 0;
  while (i < inArgv.length) {
    const arg = inArgv[i];
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      opts[key] = value || true;
    } else if (arg.startsWith('-')) {
      const [key, value] = arg.slice(1).split('=');
      opts[key] = value || true;
    } else {
      args.push(arg);
    }
    i++;
  }

  return {
    args,
    opts,
  };
};
