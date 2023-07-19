import React, { useState } from "react"

const Difficulty = ({ startTest }) => {
    const [selectType, setSelectType] = useState(1)
    const buttonRunTest = () => {
        startTest(selectType)

    }
    return (
        <div>
            <select className="difficulty__select border rounded border-emerald-300 p-2 mr-2 cursor-pointer" onChange={(e) => setSelectType(Number(e.target.value))}>
                <option value disabled="disabled">Выберите сложность</option>
                <option value="1" >Easy/Легко</option>
                <option value="2" >Hard/Тяжело</option>
            </select>
            <button className="difficulty__button p-2 border rounded text-center bg-emerald-200" onClick={buttonRunTest}>Начать тест</button>
        </div>

    )
}

export default Difficulty