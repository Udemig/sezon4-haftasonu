export const SET_CATEGORIES = 'SET_CATEGORIES'

const initialState = {
    categories: [],
    initialized: false
}

export const setCategoriesAction = (payload) => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}

export default function categoriesReducer(state = initialState, action) {
    console.log('>> categoriesReducer params', state, action)

    switch (action.action_name) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.data,
                initialized: true,
                foo: action.foo,
                bar: action.bar
            }

        default:
            return state
    }
}
