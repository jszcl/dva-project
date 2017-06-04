import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import styles from './Login.css'

const FormItem = Form.Item;

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {


  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      console.log(values);
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src='./logo.png' />
        <span>ANT</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="Password" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk}  loading={login.loginLoading}>
            Sign in
          </Button>
          <p>
            <span>Username : guest</span>
            <span>Password : guest</span>
          </p>
        </Row>

      </form>
    </div>
  )
};



export default connect(({ login }) => ({ login }))(Form.create()(Login))


// function mapStateToProps() {
//   return {};
// }
//
// export default connect(mapStateToProps)(Login);
