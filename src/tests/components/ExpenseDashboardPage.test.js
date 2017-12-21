import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesDashboardPage, ExpenseDashboardPage } from '../../components/ExpenseDashboardPage'

test('should render ExpenseDashboardPage', () => {
     const wrapper = shallow(<ExpenseDashboardPage />)
     expect(wrapper).toMatchSnapshot()
})