# RENDER-PROPS-Pattern
// Задача: 
===============================================
создать компонент с кнопкой (кнопками), содержащим стейт, 
изменяющийся при нажатии на кнопку. 
В данный компонент через render-props мы передаем функцию принимающую в качестве аргумента значение стейта. 
Через данный  render-props  указанный компонент принимает в себя другой элемент, 
который выводит значение нашего стейта полученного из аргумента render-props.

В качестве пропса в данном примере указана функция рендер, 
аргумент которой (counter) сразу передается в компонент Message принимающего элемента.
