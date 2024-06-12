const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const prices = [["$12.00", "$22.99", "$21.99", "$15.00"],
["$17.00", "$25.95", "$24.69", "$16.00"],
["$19.00", "$28.91", "$29.49", "$18.00"]];

const breakfastMenuItemsHTML = breakfastMenu
.map((item, index) => `<p>Item ${index + 1}: ${item} - ${prices[0][index]}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item} - ${prices[1][index]}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]} - ${prices[2][i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
