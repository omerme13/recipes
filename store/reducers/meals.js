import {MEALS} from '../../data/data';
import * as actions from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex(meal => (
                meal.id === action.id
            ));
            
            if (existingIndex > -1) {
                const prevFavorite = [...state.favoriteMeals];
                prevFavorite.splice(existingIndex, 1);
                
                return {
                    ...state,
                    favoriteMeals: prevFavorite
                }
            } else {
                const mealToAdd = state.meals.find(meal => meal.id === action.id);

                return {
                    ...state,
                    favoriteMeals: [...state.favoriteMeals, mealToAdd]
                }
            }
        
        case actions.SET_FILTERS: 
            const filteredMeals = state.meals.filter(meal => {
                if (action.settings.isGlutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (action.settings.isVegan && !meal.isVegan) {
                    return false;
                }
                if (action.settings.isVegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (action.settings.isLactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                return true;
            })

            return {
                ...state,
                filteredMeals
            }

        default: return state;
    }
}

export default mealsReducer;