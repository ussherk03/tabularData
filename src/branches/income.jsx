
import React, { Component } from "react";


class Income extends Component {
  render() {

    const { income, index, delInc, editInc } = this.props;

    return (
      <>
        <tr>
          {/* { title: 'Fees', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'My Payment' }*/}
          <td className="title">{income.title}</td>
          <td className="category">{income.category}</td>
          <td className="amnt">{income.amount}</td>
          <td className="invc-num">{income.invNum}</td>
          <td className="date">{income.date}</td>
          <td className="note">{income.note}</td>
          <td className="action">
            <a href="/edit" id="edit-bttn" onClick={(e) => editInc(index, income)}>
              <i className="fa fa-pen-nib"></i>
            </a>

            <a href="#!" id="del-bttn" onClick={(e) => delInc(index)}>
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </>
    );
  }
}

export default Income;
