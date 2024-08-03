const SearchBox = ({resData, setRestaurantData}) => {

    return <input type="text" placeholder="Search..." onKeyUp={
        (event) => {
         setRestaurantData(() => resData.filter((restaurant) => {
            const res = restaurant.info.name.toLowerCase();
            const val = event.target.value.toLowerCase();
            return res.includes(val)
         }))
         }
    } />
}
export default SearchBox;