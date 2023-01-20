import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider';
import { lightTheme } from '../../themes';
import { Button } from '../../Button';
import { ModalLayout, ModalHeader, ModalBody, ModalFooter } from '../index';

describe('ModalLayout', () => {
  it('should render component and match snapshot', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ModalLayout onClose={() => jest.fn()} labelledBy="title">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>Hello World</ModalBody>
          <ModalFooter
            startActions={
              <Button onClick={() => jest.fn} variant="tertiary">
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button variant="secondary">Add new stuff</Button>
                <Button onClick={() => jest.fn()}>Finish</Button>
              </>
            }
          />
        </ModalLayout>
      </ThemeProvider>,
    );

    expect(document.body).toMatchInlineSnapshot(`
      .c0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c15 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        line-height: 1.14;
        color: #32324d;
      }

      .c2 {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 2px 15px rgba(33,33,52,0.1);
      }

      .c4 {
        background: #f6f6f9;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 16px;
        padding-left: 20px;
      }

      .c9 {
        padding: 32px;
      }

      .c7 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c7 svg {
        height: 12px;
        width: 12px;
      }

      .c7 svg > g,
      .c7 svg path {
        fill: #ffffff;
      }

      .c7[aria-disabled='true'] {
        pointer-events: none;
      }

      .c7:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c7:focus-visible {
        outline: none;
      }

      .c7:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c14 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #4945ff;
        border: 1px solid #4945ff;
        height: 2rem;
        padding-left: 16px;
        padding-right: 16px;
        border: 1px solid #dcdce4;
        background: #ffffff;
      }

      .c14 [object Object] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c14 [object Object] {
        color: #ffffff;
      }

      .c14[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c14[aria-disabled='true'] svg > g,.c14[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c14[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c14[aria-disabled='true']:active svg > g,.c14[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c14:hover {
        background-color: #f6f6f9;
      }

      .c14:active {
        background-color: #eaeaef;
      }

      .c14 svg > g,
      .c14 svg path {
        fill: #32324d;
      }

      .c16 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #4945ff;
        border: 1px solid #4945ff;
        height: 2rem;
        padding-left: 16px;
        padding-right: 16px;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
      }

      .c16 [object Object] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c16 [object Object] {
        color: #ffffff;
      }

      .c16[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c16[aria-disabled='true'] svg > g,.c16[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c16[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c16[aria-disabled='true']:active svg > g,.c16[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c16:hover {
        background-color: #ffffff;
      }

      .c16:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c16:active svg > g,
      .c16:active svg path {
        fill: #4945ff;
      }

      .c16 svg > g,
      .c16 svg path {
        fill: #271fe0;
      }

      .c17 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #4945ff;
        border: 1px solid #4945ff;
        height: 2rem;
        padding-left: 16px;
        padding-right: 16px;
      }

      .c17 [object Object] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c17 [object Object] {
        color: #ffffff;
      }

      .c17[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c17[aria-disabled='true'] svg > g,.c17[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c17[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c17[aria-disabled='true']:active svg > g,.c17[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c17:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c17:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c17 svg > g,
      .c17 svg path {
        fill: #ffffff;
      }

      .c1 {
        position: fixed;
        z-index: 4;
        inset: 0;
        background: #32324d1F;
        padding: 0 40px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c3 {
        width: 51.875rem;
      }

      .c6 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c12 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c8 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
      }

      .c8 svg > g,
      .c8 svg path {
        fill: #8e8ea9;
      }

      .c8:hover svg > g,
      .c8:hover svg path {
        fill: #666687;
      }

      .c8:active svg > g,
      .c8:active svg path {
        fill: #a5a5ba;
      }

      .c8[aria-disabled='true'] {
        background-color: #eaeaef;
      }

      .c8[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c5 {
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #eaeaef;
      }

      .c11 {
        border-radius: 0 0 4px 4px;
        border-top: 1px solid #eaeaef;
      }

      .c13 > * + * {
        margin-left: 8px;
      }

      .c10 {
        overflow: auto;
        max-height: 60vh;
      }

      <body
        class="lock-body-scroll"
      >
        <div>
          <div
            class="c0"
          >
            <p
              aria-live="polite"
              aria-relevant="all"
              id="live-region-log"
              role="log"
            />
            <p
              aria-live="polite"
              aria-relevant="all"
              id="live-region-status"
              role="status"
            />
            <p
              aria-live="assertive"
              aria-relevant="all"
              id="live-region-alert"
              role="alert"
            />
          </div>
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c1"
          >
            <div>
              <div>
                <div
                  aria-labelledby="title"
                  aria-modal="true"
                  class="c2 c3"
                  role="dialog"
                >
                  <div
                    class="c4 c5"
                  >
                    <div
                      class="c6"
                    >
                      Modal Title
                      <button
                        aria-disabled="false"
                        class="c7 c8"
                        type="button"
                      >
                        <span
                          class="c0"
                        >
                          Close the modal
                        </span>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 2.417L21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417z"
                            fill="#212134"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="c9 c10"
                  >
                    Hello World
                  </div>
                  <div
                    class="c4 c11"
                  >
                    <div
                      class="c6"
                    >
                      <div
                        class="c12 c13"
                      >
                        <button
                          aria-disabled="false"
                          class="c7 c14"
                          type="button"
                        >
                          <span
                            class="c15"
                          >
                            Cancel
                          </span>
                        </button>
                      </div>
                      <div
                        class="c12 c13"
                      >
                        <button
                          aria-disabled="false"
                          class="c7 c16"
                          type="button"
                        >
                          <span
                            class="c15"
                          >
                            Add new stuff
                          </span>
                        </button>
                        <button
                          aria-disabled="false"
                          class="c7 c17"
                          type="button"
                        >
                          <span
                            class="c15"
                          >
                            Finish
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
