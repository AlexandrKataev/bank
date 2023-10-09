export const createReferralLink = (userName: string) => {
  const currentDate = new Date();

  const month = new Intl.DateTimeFormat('en-US', { month: 'short', year: '2-digit' })
    .format(currentDate)
    .split(' ')
    .join('');

  const getRandomString = () => {
    let text = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < 5; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
  };
  return (userName + getRandomString() + '-' + month).toUpperCase();
};
