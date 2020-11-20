const todoFilter = {
    searchText: "",
    hideCompleted: false
}

const getFilters = () => todoFilter

const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string'){
        todoFilter.searchText = searchText
    }
    if(typeof hideCompleted === 'boolean'){
        todoFilter.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }
