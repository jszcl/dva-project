
import { routerRedux } from 'dva/router'


export default {
  namespace: 'login',
  state: {loginLoading:false},
  reducers: {},
  effects:  {
    *login ({
      payload,
    }, { put, call }) {




          yield put(routerRedux.push('/products'))

      }
    },
  }
