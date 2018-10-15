import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe(
  'source/components/Button/Button.js', function () {
    it(
      'renders a header element', function () {
        const wrapper = shallow(<Button>Button</Button>)
        expect(wrapper.find('button')).toHaveLength(1)
      }
    )

    it(
      'renders a anchor element', function () {
        const wrapper = shallow(<Button>Button</Button>)
        expect(wrapper.find('button').text()).toEqual('Button')
      }
    )
  }
)
