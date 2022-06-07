import app from './app';

require('dotenv').config();

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
