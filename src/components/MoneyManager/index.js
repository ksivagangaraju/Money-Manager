import {Component} from 'react'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="profile-name">Hi, Richard</h1>
          <p className="profile-para">
            Welcome back to your{' '}
            <span className="money-span">Money Manager</span>
          </p>
        </div>
      </div>
    )
  }
}

export default MoneyManager
