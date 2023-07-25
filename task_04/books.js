


// DataBase ===============================================================
const loadDatabase = () => {
    return JSON.parse(localStorage.getItem('book__database'))
}
let database = loadDatabase()
if (!database) database = {
    list_all: [
        {
            id: 1,
            name: 'Book Number1',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 2,
            name: 'Book Number2',
            read_finish: true,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 3,
            name: 'Book Number3',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 4,
            name: 'Book Number4',
            read_finish: true,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 5,
            name: 'Book Number5',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 6,
            name: 'Book Number6',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        }
    ],
    favorite: [
        {
            id: 1,
            name: 'Book Number1',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 2,
            name: 'Book Number2',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
        {
            id: 5,
            name: 'Book Number5',
            read_finish: false,
            description: `Разнообразный и богатый опыт укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
            Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.`
        },
    ]
}
const saveDatabase = () => {
    localStorage.setItem('book__database', JSON.stringify(database))
}
loadDatabase()
saveDatabase()
// DataBase ===============================================================





const loadScreenOnRead = (book = {}) => {
    const screen__book__description = document.getElementById('screen__book__description')
    screen__book__description.innerText = ''
    const name__book = document.getElementById('screen__book__name')
    name__book.textContent = book.name
    const description__book = document.createElement('p')
    description__book.setAttribute('class', 'mb-[30px]')
    description__book.textContent = book.description
    screen__book__description.appendChild(description__book)

}

const generateElement = (element = '', attributes = [{ name: 'class', value: 'awdawd awd adw dw', }],) => {
    const createElement = document.createElement(element)
    if (attributes.length == 0) return createElement
    attributes.forEach(atribute => {
        createElement.setAttribute(atribute.name, atribute.value)
    })
    return createElement
}

const actionDelete = (button, data, action, list_type = 'list_all') => {
    button.setAttribute('class', 'material-symbols-outlined mr-[5px] border-2 rounded border-black py-[7px] px-[7px] font-bold')
    button.textContent = 'close'
    button.setAttribute('value', data.id)
    button.onclick = (e) => {
        const list_id = Number(button.getAttribute('value'))
        database[list_type] = database[list_type].filter(list => list.id != list_id)
        onReLoad()
    }
}
const actionRead = (button, data, action, list_type = 'list_all') => {
    button.setAttribute('class', ' mr-[5px] border-2 rounded border-black py-[7px] px-[7px] font-bold')
    button.textContent = action
    button.setAttribute('value', data.id)
    button.onclick = (e) => {
        const list_id = Number(button.getAttribute('value'))
        const target__book = database[list_type].find(book => book.id === list_id)
        loadScreenOnRead(target__book)
        onReLoad()
    }
}
const actionReaded = (button, data, action, list_type = 'list_all') => {
    button.setAttribute('class', ' mr-[5px] border-2 rounded border-black py-[7px] px-[7px] font-bold')
    button.textContent = action
    button.setAttribute('value', data.id)
    button.onclick = (e) => {
        const list_id = Number(button.getAttribute('value'))
        const index_book = database[list_type].findIndex(book => book.id === list_id)
        database[list_type][index_book].read_finish = !database[list_type][index_book].read_finish
        onReLoad()
    }
}
const actionEdit = (button, data, action, list_type = 'list_all') => {
    button.setAttribute('class', 'mr-[5px] border-2 rounded border-black py-[7px] px-[7px] font-bold')
    button.textContent = action
    button.setAttribute('value', data.id)
    button.onclick = () => {
        const modal__window__container = document.getElementById('modal__window__container')
        modal__window__container.setAttribute('class', 'modal__window__container max-w-[500px] max-h-[400px] fixed inset-10 top-[200px]  border border-black p-5  bg-white  ')
        const edit_name_book = document.getElementById('edit_name_book')
        const edit_description_book = document.getElementById('edit_description_book')
        const list_id = Number(button.getAttribute('value'))
        const target__book = database[list_type].find((book) => book.id === list_id)
        const target__index = database[list_type].findIndex((book) => book.id === list_id)
        edit_name_book.value = target__book.name
        edit_description_book.textContent = target__book.description
        const edit_form_save_button = document.getElementById('edit_form_save')
        edit_form_save_button.onclick = (e) => {
            database[list_type][target__index].name = edit_name_book.value
            database[list_type][target__index].description = edit_description_book.value
            closeEditForm()
            onReLoad()
        }
    }
}
const render = (targetElement, list_type) => {
    const listContainer = document.getElementById(targetElement)
    database[list_type].forEach(book => {
        //  Поулчаем корневой элемент, куда будем вставлять последующие айтемы, итерируемые с бд
        const list__books__item = document.createElement('div')
        book.read_finish
            ?
            list__books__item.setAttribute('class', 'list__books__item flex justify-between items-center mb-[20px]  bg-[#E8DEDE]')
            :
            list__books__item.setAttribute('class', 'list__books__item flex justify-between items-center mb-[20px] ')
        // Выстраиваю DOM Элементы Item , после буду добавлять в родителя.
        const el_h3 = generateElement('h3', [{ name: 'class', value: 'font-bold' }])
        const el_span = generateElement('span', [])
        el_h3.appendChild(el_span)
        el_h3.textContent = book.name
        const book_actions = generateElement('div', [{ name: 'class', value: 'book_actions flex justify-center items-center' }])
        const buttons__actions = ['Ред.', 'Прочитал', 'Читать', 'Удалить']
        buttons__actions.forEach(action => {
            const button = document.createElement('button')
            if (action === 'Удалить') {
                actionDelete(button, book, action, list_type)
            } else if (action === 'Читать') {
                actionRead(button, book, action, list_type)
            } else if (action === 'Прочитал') {
                actionReaded(button, book, action, list_type)
            }
            else if (action === 'Ред.') {
                actionEdit(button, book, action, list_type)
            }
            book_actions.appendChild(button)
        })
        // Добавление сформированного ДОМ компонента в родителя
        list__books__item.appendChild(el_h3)
        list__books__item.appendChild(book_actions)
        listContainer.appendChild(list__books__item)

    })
}

const clearListType = (list_type) => {
    const book__lists = document.getElementById(list_type)
    book__lists.innerText = ''
}

const onReLoad = () => {
    clearListType('book__lists')
    clearListType('book__favorite')
    saveDatabase()
    render('book__lists', 'list_all')
    render('book__favorite', 'favorite')
}

const clearForm = () => {
    form__setting.name__input.target_v.value = ''
    form__setting.description_input.target_v.value = ''
}

const onRewriteForm = () => {
    const add_book_button = document.getElementById('add_book')
    const form__information = document.getElementById('form__information')
    form__information.innerText = ''
    const name__book = document.createElement('input')
    name__book.setAttribute('type', 'text')
    name__book.setAttribute('placeholder', 'Заголовок')
    name__book.setAttribute('class', 'border-2 border-black w-full mb-[10px] px-[17px] h-[50px]')
    name__book.setAttribute('id', 'name_book')

    form__setting.name__input.target_v = name__book

    const description__book = document.createElement('textarea')
    description__book.setAttribute('placeholder', 'Описание')
    description__book.setAttribute('class', 'border-2 border-black w-full px-[17px]')
    description__book.setAttribute('id', 'description_book')
    description__book.setAttribute('name', 'description')
    description__book.setAttribute('cols', '30')
    description__book.setAttribute('rows', '5')

    form__setting.description_input.target_v = description__book

    form__information.appendChild(name__book)
    form__information.appendChild(description__book)
    add_book_button.setAttribute('type', 'submit')
    add_book_button.value = 'create'
    add_book_button.onclick = (e) => {
        event.preventDefault()
        addBook()
    }
}

const validForm = (args = []) => {
    let result;
    args.forEach(arg => {
        if (arg !== null && arg !== undefined && arg !== '') result = 1
        else result = 0
    })
    return result
}
render('book__lists', 'list_all')
render('book__favorite', 'favorite')

const form__setting = {
    check_one: document.getElementById('check_load'),
    check_two: document.getElementById('write_some'),
    name__input: {
        visibility: true,
        target_v: document.getElementById('name_book')
    },
    description_input: {
        visibility: true,
        target_v: document.getElementById('description_book')
    }
}

const check_load = document.getElementById('check_load')
const write_some = document.getElementById('write_some')
check_load.onchange = (e) => mdlwForm(e)
write_some.onchange = (e) => mdlwForm(e)

const sendFile = async (file) => {
    try {
        const username = 'Dev'
        const password = 'qdprivate'
        // const headers = new Headers()
        // headers.set('Authorization', 'Basic ' + btoa(username + ':' + password))
        // const response = await fetch('https://apiinterns.osora.ru/', {
        //     method: 'POST',
        //     headers: headers,
        //     mode:'no-cors',
        //     body: {
        //         login: 'asss',
        //         file: file
        //     }

        // })
        const formData = new FormData()
        formData.append('file', file)
        const { data } = await axios({
            method: "POST",
            url: "https://apiinterns.osora.ru/",
            headers: {
                'Access-Control-Allow-Origin': '*',
            },

            formData,
            auth: {
                username,
                password
            }
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

const mdlwForm = (v) => {
    const target_id = v.target.id
    const form__information = document.getElementById('form__information')
    const add_book_button = document.getElementById('add_book')
    if (target_id === 'check_load') {

        form__information.innerText = ''
        add_book_button.setAttribute('type', 'submit')
        add_book_button.value = 'loadFile'

        const loadFile = document.createElement('input')
        loadFile.setAttribute('id', 'loadFile')
        loadFile.setAttribute('type', 'file')
        form__information.appendChild(loadFile)

        const inputFile = document.getElementById('loadFile')


        add_book_button.onclick = async (e) => {
            console.log('file: ', inputFile.value)
            console.log('event data: ', e)
            await sendFile(inputFile.files[0])
        }

    }
    else {
        onRewriteForm()

    }

}


const addBook = () => {
    const generateId = Math.floor(Math.random() * 532516)
    const valueInputs = [form__setting.name__input.target_v.value, form__setting.description_input.target_v.value]
    const [name, description] = valueInputs
    const valid_result = validForm(valueInputs)
    if (valid_result === 0) return console.log(' Missing Param(-s)')
    database.list_all.push({ id: generateId, name, description })
    clearForm()
    onReLoad()
}

const close_button_editForm = document.getElementById('close__edit__form')
close_button_editForm.onclick = (e) => closeEditForm(e)

const closeEditForm = (e) => {
    const modal__window__container = document.getElementById('modal__window__container')
    modal__window__container.setAttribute('class', 'modal__window__container max-w-[500px] max-h-[400px] fixed inset-10 top-[200px]  border border-black p-5  bg-white hidden ')
}



