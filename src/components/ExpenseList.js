import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses to show</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} /*la chiave va data 
                                                            ogni volta che abbiamo 
                                                            una collection di items*/ 
                                                {...expense} />
                })
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)/*
                    cosa vogliamo prendere dallo store di redux
                    */(ExpenseList)/*
                    il componente di cui vogliamo creare la versione
                     connessa a ciò che prendiamo dallo store*/