import Aux from "../../../hoc/Auxillary";
import Burger from "../../Burger/Burger";
import {useState} from 'react';
import BuildControls from "../../Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    bacon: 0.70
}

const BurgerBuilder = (props) => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    });
    const [totalPrice, setTotalPrice] = useState(4.00);

    const addIngredientHandler = (type) => {
        let updatedIngredients = {...ingredients};
        updatedIngredients[type] = ingredients[type] + 1;
        setIngredients(updatedIngredients);

        let updatedTotalPrice = totalPrice;
        updatedTotalPrice = totalPrice + INGREDIENT_PRICES[type];
        setTotalPrice(updatedTotalPrice)
    };

    const removeIngredientHandler = (type) => {
        if (ingredients[type] >= 1) {
            let updatedIngredients = {...ingredients};
            updatedIngredients[type] = ingredients[type] - 1;
            setIngredients(updatedIngredients);

            let updatedTotalPrice = totalPrice;
            updatedTotalPrice = totalPrice - INGREDIENT_PRICES[type];
            setTotalPrice(updatedTotalPrice)
        }
    };

    const disabledInfo = {...ingredients};
    for (let key in disabledInfo) {
        disabledInfo[key] =  
    }

    return (
        <Aux>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
            />
        </Aux>
    );
};

export default BurgerBuilder;