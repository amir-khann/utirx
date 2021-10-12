import React, { useState, useEffect } from 'react'
import { Table } from 'antd'

const Summary = ({questions, answers}) => {
  const [summary, setSummary] = useState([])
  const columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
    }, 
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'answer',
    },
  ]
  useEffect(() => {
    const summary = questions.map((question, index) => {
      return {
        question: question.question,
        answer: answers.find(answer => answer.question === question._id).answer
      }
    })
    const dataSource = summary.map((question, index) => {
      return {
        key: index,
        question: question.question,
        answer: question.answer
      }
    })
    setSummary(dataSource)
  }, [])
  return (
        <Table columns={columns} dataSource={summary} pagination={false}  className="scroll-table"/>
  )
}

export default Summary
