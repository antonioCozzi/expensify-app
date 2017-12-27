import total from '../../selectors/expense-total'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
     const emptyExpenses = []
     const result = total(emptyExpenses)
     expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
     const result = total([expenses[0]])
     expect(result).toBe(195)
})

test('should correctly add up multiple expenses', () => {
     const result = total(expenses)
     expect(result).toBe(114195)
})