import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import { Header } from '../../components/Header'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

// react-test-renderer
test('should render Header correctly', () => {
     const wrapper = shallow(<Header startLogout={() => { }} />)
     expect((wrapper)).toMatchSnapshot();

     // expect(wrapper.find('h1').text).toBe('Expensify')

     // const renderer = new ReactShallowRenderer()
     // renderer.render(<Header />)
     // expect(renderer.getRenderOutput()).toMatchSnapshot()

     // /**
     //  * permette di stampare da cosa è composto 
     //  * quel componente, senza far visualizzare 
     //  * il codice sorgente
     //  */
     // console.log(renderer.getRenderOutput())
})

test('should call startLogout on button click', () => {
     const startLogout = jest.fn()
     const wrapper = shallow(<Header startLogout={startLogout} />)
     wrapper.find('button').simulate('click')
     expect(startLogout).toHaveBeenCalled()
})