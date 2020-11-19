const todoFilter = {
    searchText: "",
    hideCompleted: false
}

const getFilters = () => todoFilter

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string'){
        todoFilter.searchText = updates.searchText
    }
    if(typeof updates.hideCompleted === 'boolean'){
        todoFilter.hideCompleted = updates.hideCompleted
    }
}

export { getFilters, setFilters }
