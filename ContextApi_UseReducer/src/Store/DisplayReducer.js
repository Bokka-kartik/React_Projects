export const initialState={disp:""}


export function DisplayReducer(state,action)
{
    switch(action.type)
    {
        case "add":return {...state,disp:action.payload}
    }
}