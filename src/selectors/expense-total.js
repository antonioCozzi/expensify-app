export default (expenses) => {
     return expenses
         .map((expense) => { return expense.amount })
         .reduce((sum, expense) => { return sum + expense }, 0)
}