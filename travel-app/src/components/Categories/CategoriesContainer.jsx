import { useEffect } from "react";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setCategoriesAcAcr } from "../../redux/categoriesReducer";
import { chooseCategoryAcCr } from "../../redux/toursReducer";


const CategoriesContainer = (props) => {
    useEffect(() => {
        fetch("http://localhost:8080/categories_Data")
          .then((response) => {
    
            if (!response.ok) {
              throw new Error('error HTTP, status' + response.status)
            }
            return response.json();
          })
          .then((data) => {
           console.log(data);
           props.setCategories(data);
          })
          .catch((error) => {
            console.log(error('Error:', error));
          })
      }, []);

      return <Categories {...props} />
}

let mapStateToProps = (state) => {
    return {
        categoriesPage: state.categoriesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCategories: (categories_Data) =>{
            dispatch(setCategoriesAcAcr(categories_Data));
        },
        chooseCategory: (category) => {
          dispatch(chooseCategoryAcCr(category))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)