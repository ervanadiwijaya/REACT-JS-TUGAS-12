import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Message, Grid, Form, Segment, Button, Header, Image } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> Member Login
          </Header>
          <Form size='large'>
            <Segment raised>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Tidak punya akun? Silahkan <a href='#'>Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
