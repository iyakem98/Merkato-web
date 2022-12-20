
import React from 'react'
import './Faq.css'
import {questions} from './data.js'

import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from './Question'

const Faq = () => {
    return (
        <div className="faq">
          <div className="u-title">
            <MdOutlineLibraryBooks color="rgb(31, 187, 31)" size={60} />
            <h2>FAQs</h2>
            <p className="u-text-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
              itaque veniam laudantium, quam quas dolor tempora eligendi officia
              sequi. Iusto.
            </p>
          </div>
          <div className="questions">
            {questions.map((question) => (
              <Question
                key={question.id}
                title={question.title}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
    )
}

export default Faq
