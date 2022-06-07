import app from './app';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
