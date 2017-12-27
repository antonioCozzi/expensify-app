import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme';
import React from 'react'

test('should render ExpenseSummaryComponent properly w/ 1 expense', () => {
     const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>)
     expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummaryComponent properly w/ multiple expenses', () => {
     const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={23423}/>)
     expect(wrapper).toMatchSnapshot()
})