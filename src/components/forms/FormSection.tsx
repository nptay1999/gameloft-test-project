import React from 'react';
import Minion from '../../assets/imgs/page/minion.png';
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';

function FormSection(): JSX.Element {
  return (
    <section className="form-section">
      <div className="form-section__container">
        <div className="form-section__container--decorator">
          <img src={Minion} alt="Minion" />
        </div>
        <div>
          <div className="form-section__container--form">
            <h5 className="title">Stay in the Know!</h5>
            <span className="sub-title">
              <span>Don't get left behind!</span>
              <span>Subscribe to our newsletters today!</span>
            </span>

            <form>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Select placeholder="Country">
                <option value="" disabled hidden selected>
                  Country
                </option>
              </Select>
              <Select placeholder="Platform">
                <option value="" disabled hidden selected>
                  Platform
                </option>
              </Select>
              <Checkbox label="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy." />
              <Checkbox label="I agree to receive promotional offers relating to all Gameloft games and services." />
              <div className="flex-center">
                <Button type="submit">Button</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
