import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p> <br />
            Thanks for coming. Let me tell you about what brings us together! This was an assignment meant to
            teach us about authorization i.e. logins. No login = no access. We're super happy with how this turned
            out and we're 100% sure there is no way this could break or behave unexpectedley. This is the first
            time we've built an app like this so please check it out!<br /><br />
            Once you've registered, you'll be able to upload a photo to the shelf with a description. Let's
            keep this G rated as everyone that is registered will be able to see everyone else's images. You will
            have the option to delete anything that you have uploaded at any time. If you own the image, the
            'delete' button will be visible. <br /> <br />

            Quickstart: <br /> <br />1) Register <em>(if already registered, login)</em> <br />2) Once logged in, click 'The Shelf' in the upper right corner
            <br />3) Input the images description <br />4) Input image URL and submit!<br /><br />
            <em>Optional:<br/>There is an option to have only the items you have uploaded displayed
            on the screen. To enable this feature, click on the 'My Shelf' button in the upper left corner.
              To revert back click the 'Community Shelf' button.</em><br /><br />Use 
              the input box to the right and register and have some fun! <em>(Don't 
                worry we're not asking for any of your personal information or/even contact 
                information)</em><br /><br /><br />If you're willing to give feedback, 
                it would be greatly appreaciated<br />
            <em><a href="mailto:naaszja@gmail.com">Naaszja@gmail.com</a></em>.



          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button variant="info" className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
