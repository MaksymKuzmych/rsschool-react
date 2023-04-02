export const getHeaderTitle = (path: string) => {
  switch (path) {
    case '/':
      return 'Main';
    case '/about':
      return 'About';
    case '/form':
      return 'Form';
    default:
      return 'Not Found';
  }
};
