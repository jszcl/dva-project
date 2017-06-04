import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router';

// 1. Initialize
const app = dva({
  history:browserHistory,
  initialState:{
    products: [
      {name:'dva',id:1},
      {name:'dva',id:2},
    ],
  },
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));

app.model(require("./models/login"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
