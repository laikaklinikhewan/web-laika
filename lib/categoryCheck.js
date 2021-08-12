export default function categoryCheck(arrayOfCategories, category){
    let isFound = false
    let counter = 0
    while(!isFound && counter < arrayOfCategories.length){
        if (arrayOfCategories[counter].name ===  category){
            isFound = true
        } else {
            counter++
        }
    }
    return isFound
}