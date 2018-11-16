import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe(
  'source/components/Footer/Footer.js', function () {
    it(
      'renders a header element', function () {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('footer')).toHaveLength(1)
      }
    )

    it(
      'renders a h1 element', function () {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('h1').text()).toEqual('Footer')
      }
    )
  }
)
