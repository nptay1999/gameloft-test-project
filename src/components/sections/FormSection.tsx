import React from 'react';
import { InView } from 'react-intersection-observer';

import Minion from '../../assets/imgs/page/minion.png';
import Button from '../forms/Button';
import Checkbox from '../forms/Checkbox';
import Input from '../forms/Input';
import Select from '../forms/Select';

function FormSection(): JSX.Element {
  return (
    <section className="form-section">
      <div className="form-section__container">
        <InView>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`form-section__container--decorator animate-element transition-delay-3 ${
                inView ? 'animate-up' : 'animate-down'
              }`}
            >
              <img src={Minion} alt="Minion" />
            </div>
          )}
        </InView>

        <div>
          <div className="form-section__container--form">
            <InView>
              {({ inView, ref }) => (
                <h5
                  ref={ref}
                  className={`title animate-element ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
                  Stay in the Know!
                </h5>
              )}
            </InView>

            <InView>
              {({ inView, ref }) => (
                <span
                  ref={ref}
                  className={`sub-title animate-element ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
                  <span>Don't get left behind!</span>
                  <span>Subscribe to our newsletters today!</span>
                </span>
              )}
            </InView>

            <InView>
              {({ inView, ref }) => (
                <form
                  ref={ref}
                  className={`animate-element transition-delay-5 ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
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
              )}
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
