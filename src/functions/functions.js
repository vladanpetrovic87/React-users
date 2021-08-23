export const hideMail = (mail) => {
  const split = mail.split("@");
  const part1 = split[0].slice(0, 3);
  const part2 = split[1];
  return part1 + "...@" + part2;
};
