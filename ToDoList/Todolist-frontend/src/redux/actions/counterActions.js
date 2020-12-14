import * as actionTypes from './actionTypes'

export const getValue = (state) => ({
            type:actionTypes.GET_VALUES,
            payload:state
})

export const getid = (id) =>({
        type:actionTypes.GET_ID,
        payload:id
})